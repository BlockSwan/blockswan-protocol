import { expect } from 'chai'
import { ONE_ADDRESS } from '../helpers/constants'
import { deployments, ethers } from 'hardhat'
import { ProtocolErrors, TestEnv } from '../helpers/types'
import makeSuite from './fixtures/makeSuite'

describe('ProviderRegistry', function () {
    const NEW_ADDRESSES_PROVIDER_ID_2 = 2
    const NEW_ADDRESSES_PROVIDER_ID_3 = 3
    const NEW_ADDRESSES_PROVIDER_ADDRESS = ONE_ADDRESS
    const {
        INVALID_ADDRESS_PROVIDER_ID,
        ADDRESS_PROVIDER_NOT_REGISTERED,
        ADDRESS_PROVIDER_ALREADY_ADDED,
    } = ProtocolErrors
    let testEnv = {} as TestEnv
    let { Registry, registryOwner, AddressProvider, users } = testEnv

    before(async () => {
        testEnv = await makeSuite()
        Registry = testEnv.Registry
        AddressProvider = testEnv.AddressProvider
        registryOwner = testEnv.registryOwner
        users = testEnv.users
    })

    it('Checks the addresses provider is added to the Registry', async () => {
        const providers = await Registry.getAddressProvidersList()

        expect(providers?.length).to.be.equal(
            1,
            'Invalid length of the addresses providers list'
        )
        if (providers) {
            expect(providers[0]?.toString()).to.be.equal(
                AddressProvider?.address,
                'Invalid addresses provider added to the list'
            )
        }
    })
    it('Tries to register an addresses provider with id 0 (revert expected)', async () => {
        //const { Registry, deployer, registryOwner } = await make_suite();
        await expect(
            Registry.connect(registryOwner).registerAddressProvider(
                NEW_ADDRESSES_PROVIDER_ADDRESS,
                '0'
            )
        ).to.be.revertedWith(INVALID_ADDRESS_PROVIDER_ID)
    })

    it('Registers a mock addresses provider', async () => {
        // const { Registry, registryOwner } = await make_suite();

        const providers_before = await Registry.getAddressProvidersList()

        expect(
            await Registry.connect(registryOwner).registerAddressProvider(
                NEW_ADDRESSES_PROVIDER_ADDRESS,
                NEW_ADDRESSES_PROVIDER_ID_2
            )
        )
            .to.emit(Registry, 'ev_addresses_provider_registered')
            .withArgs(
                NEW_ADDRESSES_PROVIDER_ADDRESS,
                NEW_ADDRESSES_PROVIDER_ID_2
            )

        expect(
            await Registry.getAddressProviderIdByAddress(
                NEW_ADDRESSES_PROVIDER_ADDRESS
            )
        ).to.be.eq(NEW_ADDRESSES_PROVIDER_ID_2)

        const providers_after = await Registry.getAddressProvidersList()
        expect(providers_after.length).to.be.equal(
            providers_before.length + 1,
            'Invalid length of the addresses providers list'
        )
        expect(providers_after[1].toString()).to.be.equal(
            NEW_ADDRESSES_PROVIDER_ADDRESS,
            'Invalid addresses provider added to the list'
        )
        expect(
            await Registry.getAddressProviderById(NEW_ADDRESSES_PROVIDER_ID_2)
        ).to.be.equal(
            NEW_ADDRESSES_PROVIDER_ADDRESS,
            'Invalid update of id mapping'
        )
    })

    it('Registers users[2] as another addresses provider', async () => {
        // Simulating an addresses provider using the users[2] wallet address
        expect(
            await Registry.connect(registryOwner).registerAddressProvider(
                users[2].address,
                NEW_ADDRESSES_PROVIDER_ID_3
            )
        )
            .to.emit(Registry, 'ev_addresses_provider_registered')
            .withArgs(users[2].address, NEW_ADDRESSES_PROVIDER_ID_3)

        const providers = await Registry.getAddressProvidersList()

        expect(providers.length).to.be.equal(
            NEW_ADDRESSES_PROVIDER_ID_3,
            'Invalid length of the addresses providers list'
        )
        expect(providers[2].toString()).to.be.equal(
            users[2].address,
            'Invalid addresses provider added to the list'
        )
    })

    it('Removes the mock addresses provider', async () => {
        //	const { users, Registry, AddressProvider, registryOwner } = await make_suite();

        const providers_before = await Registry.getAddressProvidersList()

        expect(
            await Registry.getAddressProviderIdByAddress(
                NEW_ADDRESSES_PROVIDER_ADDRESS
            )
        ).to.be.equal(NEW_ADDRESSES_PROVIDER_ID_2)

        expect(
            await Registry.connect(registryOwner).unregisterAddressProvider(
                NEW_ADDRESSES_PROVIDER_ADDRESS
            )
        )
            .to.emit(Registry, 'ev_addresses_provider_unregistered')
            .withArgs(
                NEW_ADDRESSES_PROVIDER_ADDRESS,
                NEW_ADDRESSES_PROVIDER_ID_2
            )

        const providers_after = await Registry.getAddressProvidersList()

        expect(providers_after.length).to.be.equal(
            providers_before.length - 1,
            'Invalid length of the addresses providers list'
        )
        expect(providers_after[0].toString()).to.be.equal(
            AddressProvider.address,
            'Invalid addresses provider added to the list'
        )
    })

    it('Tries to remove an already unregistered AddressProvider (revert expected)', async () => {
        //	const { users, Registry, registryOwner } = await make_suite();

        await expect(
            Registry.connect(registryOwner).unregisterAddressProvider(
                NEW_ADDRESSES_PROVIDER_ADDRESS
            )
        ).to.be.revertedWith(ADDRESS_PROVIDER_NOT_REGISTERED)
    })

    it('Tries to add an already registered AddressProvider with a different id (revert expected)', async () => {
        //	const { Registry, AddressProvider, registryOwner } = await make_suite();

        const id = await Registry.getAddressProviderIdByAddress(
            AddressProvider.address
        )
        expect(id).not.to.be.eq(0)

        const providers_before = await Registry.getAddressProvidersList()

        await expect(
            Registry.connect(registryOwner).registerAddressProvider(
                AddressProvider.address,
                NEW_ADDRESSES_PROVIDER_ID_2
            )
        ).to.be.revertedWith(ADDRESS_PROVIDER_ALREADY_ADDED)

        const providers_after = await Registry.getAddressProvidersList()

        expect(
            await Registry.getAddressProviderIdByAddress(
                AddressProvider.address
            )
        ).to.be.eq(id)

        expect(providers_after.length).to.be.equal(
            providers_before.length,
            'Invalid length of the addresses providers list'
        )
        expect(providers_after[0].toString()).to.be.equal(
            AddressProvider.address,
            'Invalid addresses provider added to the list'
        )
    })

    it('Tries to add an AddressProvider with an already used id (revert expected)', async () => {
        //	const { users, Registry, AddressProvider, registryOwner } = await make_suite();

        const id = await Registry.getAddressProviderIdByAddress(
            AddressProvider.address
        )
        expect(id).not.to.be.eq(0)

        // Simulating an addresses provider using the users[5] wallet address
        await expect(
            Registry.connect(registryOwner).registerAddressProvider(
                users[5].address,
                id
            )
        ).to.be.revertedWith(INVALID_ADDRESS_PROVIDER_ID)

        const providers = await Registry.getAddressProvidersList()
        const id_map: any = {}

        for (let i = 0; i < providers.length; i++) {
            const id = (
                await Registry.getAddressProviderIdByAddress(providers[i])
            ).toNumber()
            if (id > 0) {
                if (id_map[id] == undefined) {
                    id_map[id] = true
                } else {
                    expect(false, 'Duplicate ids').to.be.true
                }
            }
        }
    })

    it('Reregisters the mock addresses provider after it being removed', async () => {
        //	const { Registry, registryOwner } = await make_suite();

        const providers_before = await Registry.getAddressProvidersList()

        expect(
            await Registry.connect(registryOwner).registerAddressProvider(
                NEW_ADDRESSES_PROVIDER_ADDRESS,
                NEW_ADDRESSES_PROVIDER_ID_2
            )
        )
            .to.emit(Registry, 'AddressesProviderRegistered')
            .withArgs(
                NEW_ADDRESSES_PROVIDER_ADDRESS,
                NEW_ADDRESSES_PROVIDER_ID_2
            )

        expect(
            await Registry.getAddressProviderIdByAddress(
                NEW_ADDRESSES_PROVIDER_ADDRESS
            )
        ).to.be.eq(NEW_ADDRESSES_PROVIDER_ID_2)

        const providers_after = await Registry.getAddressProvidersList()
        expect(providers_after.length).to.be.equal(
            providers_before.length + 1,
            'Invalid length of the addresses providers list'
        )
        expect(
            providers_after[providers_after.length - 1].toString()
        ).to.be.equal(
            NEW_ADDRESSES_PROVIDER_ADDRESS,
            'Invalid addresses provider added to the list'
        )
        expect(
            await Registry.getAddressProviderById(NEW_ADDRESSES_PROVIDER_ID_2)
        ).to.be.equal(
            NEW_ADDRESSES_PROVIDER_ADDRESS,
            'Invalid update of id mapping'
        )
    })

    it('Removes the last addresses provider', async () => {
        //	const { Registry, AddressProvider, registryOwner } = await make_suite();

        const providers_before = await Registry.getAddressProvidersList()
        const provider_to_remove = providers_before[providers_before.length - 1]
        const provider_to_remove_id =
            await Registry.getAddressProviderIdByAddress(provider_to_remove)

        expect(
            await Registry.connect(registryOwner).unregisterAddressProvider(
                provider_to_remove
            )
        )
            .to.emit(Registry, 'ev_addresses_provider_unregistered')
            .withArgs(provider_to_remove, provider_to_remove_id)

        const providers_after = await Registry.getAddressProvidersList()

        expect(providers_after.length).to.be.equal(
            providers_before.length - 1,
            'Invalid length of the addresses providers list'
        )
        expect(providers_after[0].toString()).to.be.equal(
            AddressProvider.address,
            'Invalid addresses provider added to the list'
        )
    })
})
