/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  OrderLogic,
  OrderLogicInterface,
} from "../../../../protocol/libraries/logics/OrderLogic";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "winningChoice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "calcRulingValues",
    outputs: [
      {
        internalType: "uint256",
        name: "toProcecutor",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "toDefendant",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x612725610053600b82828239805160001a607314610046577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361061009d5760003560e01c8063681caa2111610070578063681caa211461018657806384323457146101c3578063937bb083146101f45780639ce385c014610232578063b54a2e19146102625761009d565b8063146cc32c146100a257806334d61bae146100e05780634d5291571461011e578063679173cc14610147575b600080fd5b8180156100ae57600080fd5b506100c960048036038101906100c4919061222c565b610292565b6040516100d79291906125b8565b60405180910390f35b8180156100ec57600080fd5b50610107600480360381019061010291906120b7565b610515565b6040516101159291906123c3565b60405180910390f35b81801561012a57600080fd5b50610145600480360381019061014091906121ff565b610aed565b005b81801561015357600080fd5b5061016e600480360381019061016991906121ff565b610c57565b60405161017d939291906123f8565b60405180910390f35b81801561019257600080fd5b506101ad60048036038101906101a89190612263565b610f1f565b6040516101ba91906123b0565b60405180910390f35b6101dd60048036038101906101d891906121db565b6111a1565b6040516101eb9291906125d8565b60405180910390f35b81801561020057600080fd5b5061021b6004803603810190610216919061222c565b61120e565b6040516102299291906125b8565b60405180910390f35b61024c60048036038101906102479190612093565b61153c565b6040516102599190612472565b60405180910390f35b61027c600480360381019061027791906121b7565b6117ef565b604051610289919061254e565b60405180910390f35b6000806102a967d8e6202ec7a7062760c01b611847565b6102bd67b52038aeb6a4b1f560c01b611847565b6102d1672cc4eef382d5b8be60c01b611847565b60006102dd87856117ef565b90506102f367a42308aa40e2534260c01b611847565b6103076752c32944837ee79560c01b611847565b610311818761184a565b6103256761fb050d92fdc1e060c01b611847565b61033967e83a45107cd4e26060c01b611847565b61034381866119b5565b6103576780cf10418337341560c01b611847565b61036b6766566d6a6ea3d37f60c01b611847565b610376816001611b20565b61038a67dcb5a51db614b64460c01b611847565b61039e671174156b178c051860c01b611847565b8073__$b4fe748c53f8821a645d4d1b5c6d8eb652$__638cc55427909160036040518363ffffffff1660e01b81526004016103da92919061255f565b60206040518083038186803b1580156103f257600080fd5b505af4158015610406573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061042a9190612069565b5061043f674baafb7d1f94a25860c01b611847565b61045367b82b1813dd32870360c01b611847565b8060070173__$550f058dba878dd89fc9dbefa555bd334f$__63f4b84e5990916040518263ffffffff1660e01b815260040161048f919061241e565b60206040518083038186803b1580156104a757600080fd5b505af41580156104bb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104df919061219c565b8160070160040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16925092505094509492505050565b60008061052c67914b2f9a6537c42560c01b611847565b61054067567b7dab42041fa560c01b611847565b610554671b6208ad1045bccc60c01b611847565b600061057184608001516000015187611c8b90919063ffffffff16565b905061058767180ef22cf387291760c01b611847565b61059b673a858a602c8134a260c01b611847565b60006105af856080015160000151876117ef565b90506105c5670d1dfd7463d94adc60c01b611847565b6105d9672efee9d94ea9446d60c01b611847565b8060070173__$550f058dba878dd89fc9dbefa555bd334f$__63da6e40d5909187600001518860a001518960600151600001518a60600151602001516040518663ffffffff1660e01b815260040161063595949392919061242f565b60206040518083038186803b15801561064d57600080fd5b505af4158015610661573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106859190612069565b5061069a6751ec0a4e5e32694060c01b611847565b6106ae67c814762f80aeac7860c01b611847565b8073__$b4fe748c53f8821a645d4d1b5c6d8eb652$__63a6be43c0909187602001516040518363ffffffff1660e01b81526004016106ed92919061257e565b60206040518083038186803b15801561070557600080fd5b505af4158015610719573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061073d9190612069565b5061075267c8653be003ea1be060c01b611847565b61076667dc7b1813d26e221860c01b611847565b8073__$b4fe748c53f8821a645d4d1b5c6d8eb652$__63d3debde8909187604001516040518363ffffffff1660e01b81526004016107a592919061257e565b60206040518083038186803b1580156107bd57600080fd5b505af41580156107d1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107f59190612069565b5061080a6769b227ecc4ac6df260c01b611847565b61081e67aecb882a571f2a7860c01b611847565b8073__$b4fe748c53f8821a645d4d1b5c6d8eb652$__6384c6b9c490918760800151602001516040518363ffffffff1660e01b81526004016108619291906125a0565b60206040518083038186803b15801561087957600080fd5b505af415801561088d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108b19190612069565b506108c667af59b8725bc6314c60c01b611847565b6108da674da219b631bd8b7960c01b611847565b8073__$b4fe748c53f8821a645d4d1b5c6d8eb652$__638c20f44790918760800151604001516040518363ffffffff1660e01b815260040161091d9291906125a0565b60206040518083038186803b15801561093557600080fd5b505af4158015610949573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061096d9190612069565b5061098267d4095dd6f7538bb160c01b611847565b61099667aad42ad94f24c8ab60c01b611847565b8073__$b4fe748c53f8821a645d4d1b5c6d8eb652$__634d4c429490918760800151606001516040518363ffffffff1660e01b81526004016109d99291906125a0565b60206040518083038186803b1580156109f157600080fd5b505af4158015610a05573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a299190612069565b50610a3e67187c5a21e9cb89d960c01b611847565b610a5267fb1914981d6145f360c01b611847565b818160070173__$550f058dba878dd89fc9dbefa555bd334f$__63f4b84e5990916040518263ffffffff1660e01b8152600401610a8f919061241e565b60206040518083038186803b158015610aa757600080fd5b505af4158015610abb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610adf919061219c565b935093505050935093915050565b610b016701c2901dc560a73260c01b611847565b610b1567243febf1de9a69d560c01b611847565b610b29674a936b337901ff6860c01b611847565b6000610b3584836117ef565b9050610b4b6747e17354cf5c72ae60c01b611847565b610b5f670fe2decf606c953860c01b611847565b610b69818461184a565b610b7d6716e05225f48185ec60c01b611847565b610b9167321fe3255c803b7760c01b611847565b610b9c816000611b20565b610bb067d0318ce0d9dfc07060c01b611847565b610bc46766d4218f3ca2dde260c01b611847565b8073__$b4fe748c53f8821a645d4d1b5c6d8eb652$__638cc55427909160016040518363ffffffff1660e01b8152600401610c0092919061255f565b60206040518083038186803b158015610c1857600080fd5b505af4158015610c2c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c509190612069565b5050505050565b610c5f611de2565b600080610c766766db084ae656f4f060c01b611847565b610c8a67cd78f26bedc031e260c01b611847565b610c9e67b435d3c516a57b3060c01b611847565b6000610caa87866117ef565b9050610cc067b74816a11ad10c3160c01b611847565b610cd4679bd33ce12245057760c01b611847565b610cde81876119b5565b610cf26747c67712a7303e3660c01b611847565b610d06672db931333faa607060c01b611847565b610d11816001611b20565b610d25673825f8ffbf7bc06560c01b611847565b610d39672d42c95ab622af4c60c01b611847565b8073__$b4fe748c53f8821a645d4d1b5c6d8eb652$__638cc55427909160036040518363ffffffff1660e01b8152600401610d7592919061255f565b60206040518083038186803b158015610d8d57600080fd5b505af4158015610da1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dc59190612069565b50610dda6785f2c7a55ff21ea860c01b611847565b610dee67e924c197c1a5b16d60c01b611847565b8060070181600301548260070173__$550f058dba878dd89fc9dbefa555bd334f$__63b92aa3c090916040518263ffffffff1660e01b8152600401610e33919061241e565b60206040518083038186803b158015610e4b57600080fd5b505af4158015610e5f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e83919061219c565b826040518060a0016040529081600082015481526020016001820154815260200160028201548152602001600382015481526020016004820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152505092509350935093505093509350939050565b6000610f3567b331e980d90c263660c01b611847565b610f496788602946b97164f260c01b611847565b610f5d671b768e567b7841f060c01b611847565b6000610f6987846117ef565b9050610f7f67706cf6563d14695660c01b611847565b610f936751c3c3767c08ca3760c01b611847565b610f9d81876119b5565b610fb167723e3b4d01a9de9560c01b611847565b610fc567d67ed62e8dd3e1ab60c01b611847565b610fcf818661184a565b610fe36706e76bbc71281f3360c01b611847565b610ff76763c81ab11cf7c5be60c01b611847565b611002816001611b20565b61101667d963914300fb81fe60c01b611847565b61102a67931f8fa8b552f47b60c01b611847565b8073__$b4fe748c53f8821a645d4d1b5c6d8eb652$__638cc55427909160026040518363ffffffff1660e01b815260040161106692919061255f565b60206040518083038186803b15801561107e57600080fd5b505af4158015611092573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110b69190612069565b506110cb674935c9f1dbbfc15960c01b611847565b6110df67f7ff3e646be4458d60c01b611847565b8073__$b4fe748c53f8821a645d4d1b5c6d8eb652$__635b4bca6b9091866040518363ffffffff1660e01b815260040161111a9291906125a0565b60206040518083038186803b15801561113257600080fd5b505af4158015611146573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061116a9190612069565b5061117f67a0a317f7418645e560c01b611847565b61119367914f977d1f2b77f960c01b611847565b600191505095945050505050565b6000806111b8678fdcfce79e4a71c660c01b611847565b6111cc67b3754ba54a24e9c060c01b611847565b6111e3836103e8866111de9190612640565b611ca5565b91506111f9677b6eb32dd441891660c01b611847565b81836112059190612666565b90509250929050565b600080611225675968aa277ec31ffb60c01b611847565b6112396724726664e83c8ea360c01b611847565b61124d6741646a5e4d632d5160c01b611847565b600061125987856117ef565b905061126f67ac412d019ce1563260c01b611847565b611283674f3dd32507e01bb160c01b611847565b61128d81876119b5565b6112a1675095eb77572d0cc960c01b611847565b6112b567efee110234c7c6c360c01b611847565b6112c0816000611b20565b6112d4679297b5e8ec15095260c01b611847565b6112e867958158b8f41a0a5860c01b611847565b6112fc672e499c490270531760c01b611847565b84816007016003015461130f9190612621565b42116040518060400160405280600281526020017f323400000000000000000000000000000000000000000000000000000000000081525090611388576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161137f91906123dd565b60405180910390fd5b5061139d675ff0da8afec1031f60c01b611847565b6113b1677be5db7ea473701260c01b611847565b6113c567c1d63eaea09a56e960c01b611847565b8073__$b4fe748c53f8821a645d4d1b5c6d8eb652$__638cc55427909160036040518363ffffffff1660e01b815260040161140192919061255f565b60206040518083038186803b15801561141957600080fd5b505af415801561142d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114519190612069565b50611466679ed22f036ac1948860c01b611847565b61147a67326ca87fd7dd5b8860c01b611847565b8060070173__$550f058dba878dd89fc9dbefa555bd334f$__63f4b84e5990916040518263ffffffff1660e01b81526004016114b6919061241e565b60206040518083038186803b1580156114ce57600080fd5b505af41580156114e2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611506919061219c565b8160070160040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16925092505094509492505050565b611544611e27565b61155867c644245bd51fbeb560c01b611847565b61156c67111dbf9fedfc20e960c01b611847565b61158067be2322de7b12139060c01b611847565b60405180610160016040528084600001805461159b90612684565b80601f01602080910402602001604051908101604052809291908181526020018280546115c790612684565b80156116145780601f106115e957610100808354040283529160200191611614565b820191906000526020600020905b8154815290600101906020018083116115f757829003601f168201915b5050505050815260200184600101805461162d90612684565b80601f016020809104026020016040519081016040528092919081815260200182805461165990612684565b80156116a65780601f1061167b576101008083540402835291602001916116a6565b820191906000526020600020905b81548152906001019060200180831161168957829003601f168201915b50505050508152602001838152602001846002015481526020018460030154815260200184600401548152602001846005015481526020016116ea85600d01611cd2565b81526020018460060160009054906101000a900460ff1615158152602001846007016040518060a0016040529081600082015481526020016001820154815260200160028201548152602001600382015481526020016004820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681525050815260200184600c0160009054906101000a900460ff1660038111156117e4577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b815250905092915050565b6000611805673b4bc6eccc2d5e8f60c01b611847565b61181967bdde2b6f50998a7960c01b611847565b61182d67833a840155869b6c60c01b611847565b816000848152602001908152602001600020905092915050565b50565b61185e673144d1f00edf91ab60c01b611847565b61187267791f982bc7b2671e60c01b611847565b611886672125a04a3f75928760c01b611847565b61189a67d6c7650ed2578e7a60c01b611847565b8173__$b4fe748c53f8821a645d4d1b5c6d8eb652$__63a6bbe89f9091836040518363ffffffff1660e01b81526004016118d59291906125a0565b60206040518083038186803b1580156118ed57600080fd5b505af4158015611901573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119259190612069565b6040518060400160405280600281526020017f32310000000000000000000000000000000000000000000000000000000000008152509061199c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161199391906123dd565b60405180910390fd5b506119b16729d11fbfb67a4f2e60c01b611847565b5050565b6119c967dc3c7b3acb1aba6260c01b611847565b6119dd67a9d038823985913460c01b611847565b6119f1673d2a7557e028ddcf60c01b611847565b611a0567b6452eeaf8c73d8260c01b611847565b8173__$b4fe748c53f8821a645d4d1b5c6d8eb652$__63bad183539091836040518363ffffffff1660e01b8152600401611a409291906125a0565b60206040518083038186803b158015611a5857600080fd5b505af4158015611a6c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a909190612069565b6040518060400160405280600281526020017f323200000000000000000000000000000000000000000000000000000000000081525090611b07576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611afe91906123dd565b60405180910390fd5b50611b1c67caed6319151df79660c01b611847565b5050565b611b346739640e7eb42ea6d360c01b611847565b611b4867d867f5f1c5264fc960c01b611847565b611b5c67ac8492e9117324c760c01b611847565b611b70676644ffbd50013ba460c01b611847565b8173__$b4fe748c53f8821a645d4d1b5c6d8eb652$__630a2d74b09091836040518363ffffffff1660e01b8152600401611bab92919061255f565b60206040518083038186803b158015611bc357600080fd5b505af4158015611bd7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611bfb9190612069565b6040518060400160405280600281526020017f323300000000000000000000000000000000000000000000000000000000000081525090611c72576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611c6991906123dd565b60405180910390fd5b50611c8767db59677a5a616ba660c01b611847565b5050565b6000611c9d836000018360001b611cf3565b905092915050565b6000816113886000190304831115821517611cbf57600080fd5b6127106113888385020104905092915050565b60606000611ce283600001611d63565b905060608190508092505050919050565b6000611cff8383611dbf565b611d58578260000182908060018154018082558091505060019003906000526020600020016000909190919091505582600001805490508360010160008481526020019081526020016000208190555060019050611d5d565b600090505b92915050565b606081600001805480602002602001604051908101604052809291908181526020018280548015611db357602002820191906000526020600020905b815481526020019060010190808311611d9f575b50505050509050919050565b600080836001016000848152602001908152602001600020541415905092915050565b6040518060a0016040528060008152602001600081526020016000815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff1681525090565b6040518061016001604052806060815260200160608152602001600081526020016000815260200160008152602001600081526020016000815260200160608152602001600015158152602001611e7c611de2565b815260200160006003811115611ebb577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b81525090565b60008135905060018060a01b0381168114611edb57600080fd5b919050565b600082601f830112611ef0578081fd5b813567ffffffffffffffff811115611f0b57611f0a6126d9565b5b611f1e6020601f19601f840116016125f0565b818152846020838601011115611f32578283fd5b816020850160208301378260208383010152809250505092915050565b600060408284031215611f60578081fd5b6040516040810181811067ffffffffffffffff82111715611f8457611f836126d9565b5b806040525080915082358152602083013560208201525092915050565b600060808284031215611fb2578081fd5b6040516040810181811067ffffffffffffffff82111715611fd657611fd56126d9565b5b8060405250809150611fe88484611f4f565b8152611ff78460408501611f4f565b60208201525092915050565b600060808284031215612014578081fd5b6040516080810181811067ffffffffffffffff82111715612038576120376126d9565b5b8060405250809150823581526020830135602082015260408301356040820152606083013560608201525092915050565b60006020828403121561207a578081fd5b81518015158114612089578182fd5b8091505092915050565b600080604083850312156120a5578081fd5b82359150602083013590509250929050565b6000806000606084860312156120cb578081fd5b8335925060208401359150604084013567ffffffffffffffff808211156120f0578283fd5b81860191506101808288031215612105578283fd5b61210f60c06125f0565b82358152602083013582811115612124578485fd5b61213089828601611ee0565b602083015250604083013582811115612147578485fd5b61215389828601611ee0565b6040830152506121668860608501611fa1565b60608201526121788860e08501612003565b608082015261218a6101608401611ec1565b60a08201528093505050509250925092565b6000602082840312156121ad578081fd5b8151905092915050565b600080604083850312156121c9578182fd5b82359150602083013590509250929050565b600080604083850312156121ed578182fd5b82359150602083013590509250929050565b600080600060608486031215612213578283fd5b8335925060208401359150604084013590509250925092565b60008060008060808587031215612241578081fd5b8435935060208501359250604085013591506060850135905092959194509250565b600080600080600060a0868803121561227a578283fd5b85359450602086013593506040860135925060608601359150608086013590509295509295909350565b6000815180845260208085019450808401835b838110156122d85781518752828701965082820191506001810190506122b7565b5050505082905092915050565b80151582525050565b6004811061230c57634e487b7160e01b600052602160045260246000fd5b8082525050565b60008151808452815b8181101561233e5760208082860101518183880101525060208101905061231c565b8181111561234f5782602083870101525b506020601f19601f83011685010191505092915050565b80518252602081015160208301525050565b8051825260208101516020830152604081015160408301526060810151606083015260018060a01b0360808201511660808301525050565b6000602082019050821515825292915050565b600060408201905083151582528260208301529392505050565b6000602082526123f06020830184612313565b905092915050565b600060e08201905061240a8286612378565b8360a08301528260c0830152949350505050565b600060208201905082825292915050565b600060e08201905086825285602083015260018060a01b038516604083015261245b6060830185612366565b61246860a0830184612366565b9695505050505050565b60006020825282516101e0806020850152612491610200850183612313565b91506020850151601f19808685030160408701526124af8483612313565b93506040870151606087015260608701516080870152608087015160a087015260a087015160c087015260c087015160e087015260e0870151915061010081878603018188015261250085846122a4565b94508088015192505050610120612519818701836122e5565b8087015191505061014061252f81870183612378565b80870151915050612542828601826122ee565b50508091505092915050565b600060208201905082825292915050565b600060408201905083825261257760208301846122ee565b9392505050565b6000838252604060208301526125976040830184612313565b90509392505050565b60006040820190508382528260208301529392505050565b600060408201905083825260018060a01b03831660208301529392505050565b60006040820190508382528260208301529392505050565b6000604051905081810181811067ffffffffffffffff82111715612617576126166126d9565b5b8060405250919050565b60008219821115612635576126346126c3565b5b828201905092915050565b600081600019048311821515161561265b5761265a6126c3565b5b828202905092915050565b600082821015612679576126786126c3565b5b828203905092915050565b6000600282049050600182168061269c57607f821691505b602082108114156126bd57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fdfea26469706673582212204fcf50122fb1665392b7df3f9ad252d72dc8442e04c7cb3e9825919fe7920d6e64736f6c63430008000033";

type OrderLogicConstructorParams =
  | [linkLibraryAddresses: OrderLogicLibraryAddresses, signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: OrderLogicConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === "string" ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    "_isInterface" in xs[0]
  );
};

export class OrderLogic__factory extends ContractFactory {
  constructor(...args: OrderLogicConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(
        _abi,
        OrderLogic__factory.linkBytecode(linkLibraryAddresses),
        signer
      );
    }
  }

  static linkBytecode(
    linkLibraryAddresses: OrderLogicLibraryAddresses
  ): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$b4fe748c53f8821a645d4d1b5c6d8eb652\\$__", "g"),
      linkLibraryAddresses[
        "contracts/protocol/libraries/logics/OrderDataLogic.sol:OrderDataLogic"
      ]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$550f058dba878dd89fc9dbefa555bd334f\\$__", "g"),
      linkLibraryAddresses[
        "contracts/protocol/libraries/logics/InvoiceLogic.sol:InvoiceLogic"
      ]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    return linkedBytecode;
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<OrderLogic> {
    return super.deploy(overrides || {}) as Promise<OrderLogic>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): OrderLogic {
    return super.attach(address) as OrderLogic;
  }
  override connect(signer: Signer): OrderLogic__factory {
    return super.connect(signer) as OrderLogic__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OrderLogicInterface {
    return new utils.Interface(_abi) as OrderLogicInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OrderLogic {
    return new Contract(address, _abi, signerOrProvider) as OrderLogic;
  }
}

export interface OrderLogicLibraryAddresses {
  ["contracts/protocol/libraries/logics/OrderDataLogic.sol:OrderDataLogic"]: string;
  ["contracts/protocol/libraries/logics/InvoiceLogic.sol:InvoiceLogic"]: string;
}
