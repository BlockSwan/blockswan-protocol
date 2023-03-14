// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import {Counters} from "../../imports/openzeppelin/contracts/Counters.sol";
import {EnumerableSet} from "../../imports/openzeppelin/contracts/EnumerableSet.sol";
import {EnumerableMap} from "../../imports/openzeppelin/contracts/EnumerableMap.sol";
import {DataTypes} from "../libraries/types/DataTypes.sol";
import {InputTypes} from "../libraries/types/InputTypes.sol";
import {OutputTypes} from "../libraries/types/OutputTypes.sol";
import {GigLogic} from "../libraries/logics/GigLogic.sol";
import {InviterLogic} from "../libraries/logics/InviterLogic.sol";
import {GigStorage} from "./GigStorage.sol";
import {ProviderContract} from "../configuration/ProviderContract.sol";
import {IAddressProvider} from "../../interfaces/IAddressProvider.sol";
import {IUser} from "../../interfaces/IUser.sol";
import {IBSWAN} from "../../interfaces/IBSWAN.sol";

import {IProtocolConfigurator} from "../../interfaces/IProtocolConfigurator.sol";
import {XPKeys} from "../libraries/helpers/XPKeys.sol";
import {RegistryKeys} from "../libraries/helpers/RegistryKeys.sol";

/**
 * @title Gig contract
 * @author Blockswan
 * @notice  User data within an Blockswan protocol's marketplace
 * - Users can:
 *   # create gigs
 *   # edit gigs
 *   # invite users
 *   # choose affiliates
 * @dev To be covered by a proxy contract, owned by the addressProvider of the specific marketplace
 * @dev All admin functions are callable by the protocolConfigurator contract defined also in the
 *   addressProvider
 **/
contract Gig is GigStorage, ProviderContract {
    using EnumerableSet for EnumerableSet.UintSet;
    using GigLogic for DataTypes.Gig;
    using Counters for Counters.Counter;

    /**
     * @dev Constructor.
     * @param provider The address of the AddressProvider
     */
    constructor(IAddressProvider provider) ProviderContract(provider) {}

    function getGigsCount() public view virtual returns (uint256) {
        uint256 count = _gigIds.length();
        return count;
    }

    function getGigById(
        uint256 gigId
    ) public view virtual returns (OutputTypes.GigOutput memory) {
        DataTypes.Gig storage gig = GigLogic.getGigById(gigId, _gigs);
        return gig.format(gigId);
    }

    function getGigList()
        external
        view
        virtual
        returns (OutputTypes.GigOutput[] memory)
    {
        uint256 len = getGigsCount();
        OutputTypes.GigOutput[] memory gigList = new OutputTypes.GigOutput[](
            len
        );
        for (uint256 i = 0; i < len; i++) {
            gigList[i] = getGigById(i);
        }
        return gigList;
    }

    function createGig(
        string memory metadata,
        DataTypes.Package[3] memory packages
    ) external onlyStillSeller {
        address caller = _msgSender();
        uint256 newId = getGigsCount();
        bool isCreated = GigLogic.executeCreateGig(
            _gigIds,
            _gigs,
            InputTypes.CreateGigInput({
                newId: newId,
                packages: packages,
                metadata: metadata
            })
        );
        bool relationSuccess = IUser(fetchContract(RegistryKeys.USER))
            .createGig(caller, newId);
        require(isCreated && relationSuccess, "failed to create gig");
        _giveXP(XPKeys.CREATE_GIG, caller);
        (address inviter0, address inviter1) = getInvitersAddresses(caller);
        DataTypes.RetributionParams
            memory retributionParams = getProtocolRetributionParams();
        DataTypes.CreationParams
            memory gigCreationParams = getGigCreationParams();
        OutputTypes.CalcInvitersRewardsOutput memory rewards = InviterLogic
            .calcInvitersRewards(
                InputTypes.CalcInvitersRewardsInput({
                    currencyValue: gigCreationParams.currencyValue,
                    affiliateShare: retributionParams.affiliate,
                    lvl0AffiliateShare: retributionParams.lvl0AffiliateShare
                })
            );
        _processPayment(
            InputTypes.ProcessPaymentInput({
                caller: caller,
                inviter0: inviter0,
                inviter1: inviter1,
                inviter0Rewards: rewards.inviter0Rewards,
                inviter1Rewards: rewards.inviter1Rewards,
                remainingRewards: rewards.remainingRewards
            })
        );
    }

    function getInvitersAddresses(
        address account
    ) public view returns (address, address) {
        return
            IUser(fetchContract(RegistryKeys.USER)).getInvitersByUserAddress(
                account
            );
    }

    function getGigCreationParams()
        internal
        view
        returns (DataTypes.CreationParams memory)
    {
        return
            IProtocolConfigurator(
                fetchContract(RegistryKeys.PROTOCOL_CONFIGURATOR)
            ).getGigCreationParams();
    }

    function createOrder(
        uint256 newOrderId,
        uint256 gigId,
        uint256 packageId
    )
        external
        onlyProvider(RegistryKeys.ORDER)
        returns (bool, string memory, DataTypes.Package memory)
    {
        DataTypes.Gig storage gig = GigLogic.getGigById(gigId, _gigs);
        require(_isCorrectPackage(gig.packages[packageId]), "Invalid Package");
        bool success = gig.executeCreateOrder(newOrderId);
        return (success, gig.metadata, gig.packages[packageId]);
    }

    function _isCorrectPackage(
        DataTypes.Package memory package
    ) internal pure returns (bool) {
        return package.price > 0 && package.timeDelivery > 0;
    }
}
