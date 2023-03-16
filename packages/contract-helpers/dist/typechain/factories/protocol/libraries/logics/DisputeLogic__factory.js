"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisputeLogic__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "uint256",
                name: "evidenceUntil",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "commitUntil",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "voteUntil",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "appealUntil",
                type: "uint256",
            },
        ],
        name: "calcDisputeDelaysFromBlock",
        outputs: [
            {
                internalType: "uint256[]",
                name: "delays",
                type: "uint256[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
const _bytecode = "0x613f1e61003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106101205760003560e01c806390bc2a91116100ac578063a191f9b31161007b578063a191f9b3146102db578063a59ae3a4146102fb578063d5a22c1e1461030e578063e06f7e7414610374578063ebc3655d1461039457600080fd5b806390bc2a911461025b578063987198041461027b5780639d403dc51461029b5780639e3918e6146102bb57600080fd5b8063425791c4116100f3578063425791c4146101bb5780634aac5052146101db5780635f8fdbc5146101fb5780636a7809e51461021b5780637254894a1461023b57600080fd5b80630b4b3b1f14610125578063101ee79114610145578063115e1e5f1461017a578063369de64f1461019b575b600080fd5b81801561013157600080fd5b50610143610140366004612ba0565b50565b005b81801561015157600080fd5b50610165610160366004612d2e565b6103d4565b60405190151581526020015b60405180910390f35b61018d610188366004612dba565b610555565b604051908152602001610171565b8180156101a757600080fd5b506101656101b6366004612df1565b61056a565b8180156101c757600080fd5b506101656101d6366004612ee5565b6106e9565b6101ee6101e9366004612f85565b610aa6565b6040516101719190612fb7565b81801561020757600080fd5b50610143610216366004612ffb565b610bcd565b81801561022757600080fd5b50610143610236366004612ba0565b61119d565b81801561024757600080fd5b50610165610256366004613068565b6115ac565b81801561026757600080fd5b50610165610276366004613094565b61170d565b81801561028757600080fd5b50610143610296366004612dba565b61186e565b8180156102a757600080fd5b506101656102b636600461311f565b611bdc565b8180156102c757600080fd5b506101436102d6366004612dba565b611df8565b6102ee6102e9366004612dba565b61209a565b604051610171919061343c565b61018d610309366004612dba565b6121eb565b81801561031a57600080fd5b5061032e61032936600461363e565b6122a9565b6040516101719190600060a08201905082511515825260208301511515602083015260408301516040830152606083015160608301526080830151608083015292915050565b81801561038057600080fd5b5061018d61038f366004613068565b6125dd565b8180156103a057600080fd5b506103b46103af366004612ba0565b612819565b604080519485526020850193909352918301526060820152608001610171565b6000828180600583015460ff1660048111156103f2576103f261322e565b14604051806040016040528060028152602001610d4d60f21b815250906104355760405162461bcd60e51b815260040161042c9190613676565b60405180910390fd5b5060405163db7e892160e01b81526004810186905260009073__$a30805314670aba7a268b004e381771f39$__9063db7e89219060240160206040518083038186803b15801561048457600080fd5b505af4158015610498573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104bc9190613689565b6040516331d0395d60e11b815290915073__$81e31c3dd8ba021b250581ddc9f3365d5d$__906363a072ba906104f890849089906004016136a2565b60206040518083038186803b15801561051057600080fd5b505af4158015610524573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061054891906136d0565b5060019695505050505050565b60008281526020829052604090205b92915050565b600084600180600583015460ff1660048111156105895761058961322e565b14604051806040016040528060028152602001610d4d60f21b815250906105c35760405162461bcd60e51b815260040161042c9190613676565b5060405163db7e892160e01b81526004810188905260009073__$a30805314670aba7a268b004e381771f39$__9063db7e89219060240160206040518083038186803b15801561061257600080fd5b505af4158015610626573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061064a9190613689565b60405163ba30c1a760e01b815290915073__$81e31c3dd8ba021b250581ddc9f3365d5d$__9063ba30c1a79061068a90849089908c908c906004016136eb565b60206040518083038186803b1580156106a257600080fd5b505af41580156106b6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106da91906136d0565b50600198975050505050505050565b600082600480600583015460ff1660048111156107085761070861322e565b14604051806040016040528060028152602001610d4d60f21b815250906107425760405162461bcd60e51b815260040161042c9190613676565b5060405163db7e892160e01b81526004810186905260009073__$a30805314670aba7a268b004e381771f39$__9063db7e89219060240160206040518083038186803b15801561079157600080fd5b505af41580156107a5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107c99190613689565b60405163164ca46760e31b81526004810182905290915073__$af828e0c356433108d8dfb596a8a6763fb$__9063b26523389060240160206040518083038186803b15801561081757600080fd5b505af415801561082b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061084f91906136d0565b60405180604001604052806002815260200161363160f01b815250906108885760405162461bcd60e51b815260040161042c9190613676565b506040516345597be160e11b815273__$a30805314670aba7a268b004e381771f39$__90638ab2f7c2906108c3908990600090600401613722565b60206040518083038186803b1580156108db57600080fd5b505af41580156108ef573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061091391906136d0565b50604051636377233f60e11b81526004810187905273__$a30805314670aba7a268b004e381771f39$__9063c6ee467e9060240160206040518083038186803b15801561095f57600080fd5b505af4158015610973573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061099791906136d0565b50845160405163230ef19960e21b815273__$a30805314670aba7a268b004e381771f39$__91638c3bc664916109da918a91600401918252602082015260400190565b60206040518083038186803b1580156109f257600080fd5b505af4158015610a06573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a2a91906136d0565b506040805160c08101825286820151815260608088015160208084019190915288015182840152835490820152600183015460808083019190915287015160a0820152905163365e702360e21b815273__$81e31c3dd8ba021b250581ddc9f3365d5d$__9163d979c08c916104f89160068b0191600401613736565b60408051600480825260a0820190925260609142919060208201608080368337019050509150610ad686826137a1565b82600081518110610ae957610ae96137b9565b6020026020010181815250508482600081518110610b0957610b096137b9565b6020026020010151610b1b91906137a1565b82600181518110610b2e57610b2e6137b9565b6020026020010181815250508382600181518110610b4e57610b4e6137b9565b6020026020010151610b6091906137a1565b82600281518110610b7357610b736137b9565b6020026020010181815250508282600281518110610b9357610b936137b9565b6020026020010151610ba591906137a1565b82600381518110610bb857610bb86137b9565b60200260200101818152505050949350505050565b81600080600583015460ff166004811115610bea57610bea61322e565b14604051806040016040528060028152602001610d4d60f21b81525090610c245760405162461bcd60e51b815260040161042c9190613676565b5083600401600081548110610c3b57610c3b6137b9565b90600052602060002001548042101560405180604001604052806002815260200161353360f01b81525090610c835760405162461bcd60e51b815260040161042c9190613676565b5060405163db7e892160e01b81526004810186905260009073__$a30805314670aba7a268b004e381771f39$__9063db7e89219060240160206040518083038186803b158015610cd257600080fd5b505af4158015610ce6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d0a9190613689565b60405163e6053cff60e01b81526004810182905290915073__$81e31c3dd8ba021b250581ddc9f3365d5d$__9063e6053cff9060240160206040518083038186803b158015610d5857600080fd5b505af4158015610d6c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d9091906136d0565b15610ebb57604080860151905163230ef19960e21b815273__$a30805314670aba7a268b004e381771f39$__91638c3bc66491610dda918a91600401918252602082015260400190565b60206040518083038186803b158015610df257600080fd5b505af4158015610e06573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e2a91906136d0565b506040516345597be160e11b815273__$a30805314670aba7a268b004e381771f39$__90638ab2f7c290610e65908990600190600401613722565b60206040518083038186803b158015610e7d57600080fd5b505af4158015610e91573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610eb591906136d0565b50611195565b604080860151905163230ef19960e21b815273__$a30805314670aba7a268b004e381771f39$__91638c3bc66491610f00918a91600401918252602082015260400190565b60206040518083038186803b158015610f1857600080fd5b505af4158015610f2c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f5091906136d0565b50606085015160405163230ef19960e21b815273__$a30805314670aba7a268b004e381771f39$__91638c3bc66491610f96918a91600401918252602082015260400190565b60206040518083038186803b158015610fae57600080fd5b505af4158015610fc2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fe691906136d0565b50608085015160405163230ef19960e21b815273__$a30805314670aba7a268b004e381771f39$__91638c3bc6649161102c918a91600401918252602082015260400190565b60206040518083038186803b15801561104457600080fd5b505af4158015611058573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061107c91906136d0565b506040516345597be160e11b815273__$a30805314670aba7a268b004e381771f39$__90638ab2f7c2906110b7908990600390600401613722565b60206040518083038186803b1580156110cf57600080fd5b505af41580156110e3573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061110791906136d0565b5060405163764a60fb60e11b815260048101829052612710602482015273__$af828e0c356433108d8dfb596a8a6763fb$__9063ec94c1f69060440160206040518083038186803b15801561115b57600080fd5b505af415801561116f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061119391906136d0565b505b505050505050565b80600380600583015460ff1660048111156111ba576111ba61322e565b14604051806040016040528060028152602001610d4d60f21b815250906111f45760405162461bcd60e51b815260040161042c9190613676565b508260040160038154811061120b5761120b6137b9565b90600052602060002001548042101560405180604001604052806002815260200161353360f01b815250906112535760405162461bcd60e51b815260040161042c9190613676565b506040516345597be160e11b815273__$a30805314670aba7a268b004e381771f39$__90638ab2f7c29061128d9087906004908101613722565b60206040518083038186803b1580156112a557600080fd5b505af41580156112b9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112dd91906136d0565b5060405163db7e892160e01b81526004810185905260009073__$a30805314670aba7a268b004e381771f39$__9063db7e89219060240160206040518083038186803b15801561132c57600080fd5b505af4158015611340573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113649190613689565b60078101546040516389e48ba160e01b81526004810182905291925090600090819073__$af828e0c356433108d8dfb596a8a6763fb$__906389e48ba190602401604080518083038186803b1580156113bc57600080fd5b505af41580156113d0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113f491906137cf565b60405163c0b088f760e01b8152600481018790526024810183905260448101829052919350915073__$af828e0c356433108d8dfb596a8a6763fb$__906357d4723490869073__$81e31c3dd8ba021b250581ddc9f3365d5d$__9063c0b088f79060640160206040518083038186803b15801561147057600080fd5b505af4158015611484573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114a89190613689565b6040516001600160e01b031960e085901b1681526004810192909252602482015260440160206040518083038186803b1580156114e457600080fd5b505af41580156114f8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061151c91906136d0565b5060405163d1e1ddff60e01b81526004810185905273__$af828e0c356433108d8dfb596a8a6763fb$__9063d1e1ddff906024015b60206040518083038186803b15801561156957600080fd5b505af415801561157d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115a191906136d0565b505050505050505050565b600083600380600583015460ff1660048111156115cb576115cb61322e565b14604051806040016040528060028152602001610d4d60f21b815250906116055760405162461bcd60e51b815260040161042c9190613676565b5060405163db7e892160e01b81526004810187905260009073__$a30805314670aba7a268b004e381771f39$__9063db7e89219060240160206040518083038186803b15801561165457600080fd5b505af4158015611668573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061168c9190613689565b6040516317eb2c5b60e11b815260048101829052602481018890526044810187905290915073__$81e31c3dd8ba021b250581ddc9f3365d5d$__90632fd658b69060640160006040518083038186803b1580156116e857600080fd5b505af41580156116fc573d6000803e3d6000fd5b5060019a9950505050505050505050565b600085600280600583015460ff16600481111561172c5761172c61322e565b14604051806040016040528060028152602001610d4d60f21b815250906117665760405162461bcd60e51b815260040161042c9190613676565b5060405163db7e892160e01b81526004810189905260009073__$a30805314670aba7a268b004e381771f39$__9063db7e89219060240160206040518083038186803b1580156117b557600080fd5b505af41580156117c9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117ed9190613689565b604051635dd10b2960e11b815290915073__$81e31c3dd8ba021b250581ddc9f3365d5d$__9063bba216529061182f90849089908d908d908d906004016137f3565b60006040518083038186803b15801561184757600080fd5b505af415801561185b573d6000803e3d6000fd5b5060019c9b505050505050505050505050565b81600280600583015460ff16600481111561188b5761188b61322e565b14604051806040016040528060028152602001610d4d60f21b815250906118c55760405162461bcd60e51b815260040161042c9190613676565b50836004016002815481106118dc576118dc6137b9565b90600052602060002001548042101560405180604001604052806002815260200161353360f01b815250906119245760405162461bcd60e51b815260040161042c9190613676565b5060405163db7e892160e01b815260048101869052859060009073__$a30805314670aba7a268b004e381771f39$__9063db7e89219060240160206040518083038186803b15801561197557600080fd5b505af4158015611989573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119ad9190613689565b9050600081600901541160405180604001604052806002815260200161353760f01b815250906119f05760405162461bcd60e51b815260040161042c9190613676565b506040516345597be160e11b815273__$a30805314670aba7a268b004e381771f39$__90638ab2f7c290611a2b908a90600390600401613722565b60206040518083038186803b158015611a4357600080fd5b505af4158015611a57573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a7b91906136d0565b5060405163230ef19960e21b8152600481018890526024810187905273__$a30805314670aba7a268b004e381771f39$__90638c3bc6649060440160206040518083038186803b158015611ace57600080fd5b505af4158015611ae2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b0691906136d0565b5060405163db7e892160e01b81526004810188905260009073__$a30805314670aba7a268b004e381771f39$__9063db7e89219060240160206040518083038186803b158015611b5557600080fd5b505af4158015611b69573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b8d9190613689565b905073__$af828e0c356433108d8dfb596a8a6763fb$__63ec94c1f682611bb381612a64565b6040516001600160e01b031960e085901b16815260048101929092526024820152604401611551565b80516000908190611bee908690612ac9565b90506000611c00846000015186610555565b60e085015160405163230ef19960e21b815260048101839052602481019190915290915073__$a30805314670aba7a268b004e381771f39$__90638c3bc6649060440160206040518083038186803b158015611c5b57600080fd5b505af4158015611c6f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c9391906136d0565b508060060173__$81e31c3dd8ba021b250581ddc9f3365d5d$__63d979c08c90916040518060c001604052808860a0015181526020018860c0015181526020018860800151815260200188604001518152602001886060015181526020018861010001518152506040518363ffffffff1660e01b8152600401611d17929190613736565b60206040518083038186803b158015611d2f57600080fd5b505af4158015611d43573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d6791906136d0565b5060405163218d0a6360e01b81526004810182905273__$a30805314670aba7a268b004e381771f39$__9063218d0a639060240160206040518083038186803b158015611db357600080fd5b505af4158015611dc7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611deb91906136d0565b50909150505b9392505050565b81600180600583015460ff166004811115611e1557611e1561322e565b14604051806040016040528060028152602001610d4d60f21b81525090611e4f5760405162461bcd60e51b815260040161042c9190613676565b5083600401600181548110611e6657611e666137b9565b90600052602060002001548042101560405180604001604052806002815260200161353360f01b81525090611eae5760405162461bcd60e51b815260040161042c9190613676565b5060405163db7e892160e01b815260048101869052859060009073__$a30805314670aba7a268b004e381771f39$__9063db7e89219060240160206040518083038186803b158015611eff57600080fd5b505af4158015611f13573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f379190613689565b9050600081600a015411604051806040016040528060028152602001611a9b60f11b81525090611f7a5760405162461bcd60e51b815260040161042c9190613676565b5060405163230ef19960e21b8152600481018890526024810187905273__$a30805314670aba7a268b004e381771f39$__90638c3bc6649060440160206040518083038186803b158015611fcd57600080fd5b505af4158015611fe1573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061200591906136d0565b506040516345597be160e11b815273__$a30805314670aba7a268b004e381771f39$__90638ab2f7c290612040908a90600290600401613722565b60206040518083038186803b15801561205857600080fd5b505af415801561206c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061209091906136d0565b5050505050505050565b6120a2612b4a565b604051806101000160405280846000015481526020018381526020018460010154815260200184600201548152602001846003015481526020018460040180548060200260200160405190810160405280929190818152602001828054801561212a57602002820191906000526020600020905b815481526020019060010190808311612116575b5050509183525050600585015460209091019060ff1660048111156121515761215161322e565b815260405163327d2e0160e01b815260068601600482015260209091019073__$81e31c3dd8ba021b250581ddc9f3365d5d$__9063327d2e019060240160006040518083038186803b1580156121a657600080fd5b505af41580156121ba573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526121e29190810190613b79565b90529392505050565b60405163db7e892160e01b815260048101839052600090819073__$a30805314670aba7a268b004e381771f39$__9063db7e89219060240160206040518083038186803b15801561223b57600080fd5b505af415801561224f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906122739190613689565b905060008160030154846122879190613dc2565b612292906002613dc2565b90506122a0816103e8612ad5565b95945050505050565b6122df6040518060a001604052806000151581526020016000151581526020016000815260200160008152602001600081525090565b60405163c466486960e01b8152600481018590526024810183905260009073__$a30805314670aba7a268b004e381771f39$__9063c46648699060440160206040518083038186803b15801561233457600080fd5b505af4158015612348573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061236c9190613689565b6007810154604051635f09024560e11b815260048101839052602481018290529192509060009073__$af828e0c356433108d8dfb596a8a6763fb$__9063be12048a9060440160206040518083038186803b1580156123ca57600080fd5b505af41580156123de573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906124029190613689565b905060008073__$af828e0c356433108d8dfb596a8a6763fb$__6389e48ba1856040518263ffffffff1660e01b815260040161244091815260200190565b604080518083038186803b15801561245757600080fd5b505af415801561246b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061248f91906137cf565b915091508473__$81e31c3dd8ba021b250581ddc9f3365d5d$__6301d84af590916040518061010001604052808c6001600160a01b03168152602001868152602001858152602001888152602001878152602001896004015481526020018960050154815260200189600601548152506040518363ffffffff1660e01b815260040161258092919060006101208201905083825260018060a01b038351166020830152602083015160408301526040830151606083015260608301516080830152608083015160a083015260a083015160c083015260c083015160e083015260e08301516101008301529392505050565b60a06040518083038186803b15801561259857600080fd5b505af41580156125ac573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906125d09190613de1565b9998505050505050505050565b6000808211604051806040016040528060028152602001611b1960f11b8152509061261b5760405162461bcd60e51b815260040161042c9190613676565b5060405163c466486960e01b81526004810185905260248101839052600090819073__$81e31c3dd8ba021b250581ddc9f3365d5d$__906304fb8e1a9073__$a30805314670aba7a268b004e381771f39$__9063c46648699060440160206040518083038186803b15801561268f57600080fd5b505af41580156126a3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906126c79190613689565b73__$a30805314670aba7a268b004e381771f39$__63c46648698a6126ed60018b613e5c565b6040516001600160e01b031960e085901b1681526004810192909252602482015260440160206040518083038186803b15801561272957600080fd5b505af415801561273d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906127619190613689565b6040516001600160e01b031960e085901b1681526004810192909252602482015260448101889052606401604080518083038186803b1580156127a357600080fd5b505af41580156127b7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906127db9190613e73565b915091508060405180604001604052806002815260200161363360f01b81525090611deb5760405162461bcd60e51b815260040161042c9190613676565b600080808084600480600583015460ff16600481111561283b5761283b61322e565b14604051806040016040528060028152602001610d4d60f21b815250906128755760405162461bcd60e51b815260040161042c9190613676565b506003870154604080518082019091526002815261363560f01b60208201528891156128b45760405162461bcd60e51b815260040161042c9190613676565b5060405163db7e892160e01b81526004810189905260009073__$a30805314670aba7a268b004e381771f39$__9063db7e89219060240160206040518083038186803b15801561290357600080fd5b505af4158015612917573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061293b9190613689565b60405162ffd60560e01b81526004810182905290915073__$81e31c3dd8ba021b250581ddc9f3365d5d$__9062ffd6059060240160606040518083038186803b15801561298757600080fd5b505af415801561299b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906129bf9190613e9f565b60018c01546040516305d5e26960e21b8152600481018e905260248101859052939b509950909750955073__$a30805314670aba7a268b004e381771f39$__9063175789a49060440160206040518083038186803b158015612a2057600080fd5b505af4158015612a34573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612a5891906136d0565b50505050509193509193565b60008080805b600b811015612ac0578185600c0182600b8110612a8957612a896137b9565b01541115612aae5780925084600c0181600b8110612aa957612aa96137b9565b015491505b80612ab881613ecd565b915050612a6a565b50909392505050565b6000611df18383612afb565b600081156113881983900484111517612aed57600080fd5b506127109102611388010490565b6000818152600183016020526040812054612b4257508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155610564565b506000610564565b60405180610100016040528060008152602001600081526020016000815260200160008152602001600081526020016060815260200160006004811115612b9357612b9361322e565b8152602001606081525090565b600060208284031215612bb257600080fd5b5035919050565b634e487b7160e01b600052604160045260246000fd5b604051606081016001600160401b0381118282101715612bf157612bf1612bb9565b60405290565b60405160a081016001600160401b0381118282101715612bf157612bf1612bb9565b60405161012081016001600160401b0381118282101715612bf157612bf1612bb9565b60405160c081016001600160401b0381118282101715612bf157612bf1612bb9565b60405161028081016001600160401b0381118282101715612bf157612bf1612bb9565b604051601f8201601f191681016001600160401b0381118282101715612ca957612ca9612bb9565b604052919050565b60006001600160401b03821115612cca57612cca612bb9565b50601f01601f191660200190565b600082601f830112612ce957600080fd5b8135612cfc612cf782612cb1565b612c81565b818152846020838601011115612d1157600080fd5b816020850160208301376000918101602001919091529392505050565b60008060408385031215612d4157600080fd5b8235915060208301356001600160401b0380821115612d5f57600080fd5b9084019060608287031215612d7357600080fd5b612d7b612bcf565b8235815260208301356020820152604083013582811115612d9b57600080fd5b612da788828601612cd8565b6040830152508093505050509250929050565b60008060408385031215612dcd57600080fd5b50508035926020909101359150565b6001600160a01b038116811461014057600080fd5b60008060008060808587031215612e0757600080fd5b843593506020850135925060408501356001600160401b03811115612e2b57600080fd5b612e3787828801612cd8565b9250506060850135612e4881612ddc565b939692955090935050565b60006001600160401b03821115612e6c57612e6c612bb9565b5060051b60200190565b600082601f830112612e8757600080fd5b81356020612e97612cf783612e53565b82815260059290921b84018101918181019086841115612eb657600080fd5b8286015b84811015612eda578035612ecd81612ddc565b8352918301918301612eba565b509695505050505050565b60008060408385031215612ef857600080fd5b8235915060208301356001600160401b0380821115612f1657600080fd5b9084019060a08287031215612f2a57600080fd5b612f32612bf7565b82358152602083013560208201526040830135604082015260608301356060820152608083013582811115612f6657600080fd5b612f7288828601612e76565b6080830152508093505050509250929050565b60008060008060808587031215612f9b57600080fd5b5050823594602084013594506040840135936060013592509050565b6020808252825182820181905260009190848201906040850190845b81811015612fef57835183529284019291840191600101612fd3565b50909695505050505050565b60008082840360c081121561300f57600080fd5b8335925060a0601f198201121561302557600080fd5b5061302e612bf7565b6020840135815260408401356020820152606084013560408201526080840135606082015260a08401356080820152809150509250929050565b60008060006060848603121561307d57600080fd5b505081359360208301359350604090920135919050565b600080600080600060a086880312156130ac57600080fd5b853594506020860135935060408601356001600160401b03808211156130d157600080fd5b6130dd89838a01612cd8565b945060608801359150808211156130f357600080fd5b5061310088828901612cd8565b925050608086013561311181612ddc565b809150509295509295909350565b60008060006060848603121561313457600080fd5b833592506020840135915060408401356001600160401b038082111561315957600080fd5b90850190610120828803121561316e57600080fd5b613176612c19565b823581526020830135602082015260408301356040820152606083013560608201526080830135608082015260a083013560a082015260c083013560c082015260e083013560e082015261010080840135838111156131d457600080fd5b6131e08a828701612e76565b8284015250508093505050509250925092565b600081518084526020808501945080840160005b8381101561322357815187529582019590820190600101613207565b509495945050505050565b634e487b7160e01b600052602160045260246000fd5b6005811061326257634e487b7160e01b600052602160045260246000fd5b9052565b8060005b600b81101561328957815184526020938401939091019060010161326a565b50505050565b60005b838110156132aa578181015183820152602001613292565b838111156132895750506000910152565b600081518084526132d381602086016020860161328f565b601f01601f19169290920160200192915050565b600081518084526020808501808196508360051b8101915082860160005b8581101561337d578284038952815180516001600160a01b031685528581015186860152604080820151908601526060808201519086015260808082015160c08288018190529190613359838901826132bb565b60a09485015115159890940197909752505098850198935090840190600101613305565b5091979650505050505050565b805182526020810151602083015260006040820151606060408501526133b360608501826132bb565b949350505050565b600081518084526020808501808196508360051b8101915082860160005b8581101561337d5782840389526133f184835161338a565b988501989350908401906001016133d9565b600081518084526020808501945080840160005b838110156132235781516001600160a01b031687529582019590820190600101613417565b600060208083526101208451828501528185015180604086015250604085015180606086015250606085015180608086015250608085015160a0818187015280870151915061010060c08181890152613497858901856131f3565b93508089015160e06134ab818b0183613244565b808b0151601f198b88038101868d01528151808952918a0193509089880190600581901b89018b0160005b8281101561362b57848b830301845286516103c0815184528e8201518f8501526040820151604085015260608201516060850152608082015160808501528b8201518c850152898201518a85015287820151888501528a8201518b8501528d8201518e8501526101408083015181860152506101608083015181860152506101808083015161356782870182613266565b50506101a0820151816102e0860152613582828601826131f3565b9150506101c08201516103008501526101e08201518482036103208601526135aa82826132e7565b9150506102008201518482036103408601526135c682826133bb565b9150506102208201518482036103608601526135e28282613403565b9150506102408201518482036103808601526135fe8282613403565b91505061026082015191506136186103a085018315159052565b978e0197948e01949250506001016134d6565b509e9d5050505050505050505050505050565b60008060006060848603121561365357600080fd5b83359250602084013561366581612ddc565b929592945050506040919091013590565b602081526000611df160208301846132bb565b60006020828403121561369b57600080fd5b5051919050565b8281526040602082015260006133b3604083018461338a565b805180151581146136cb57600080fd5b919050565b6000602082840312156136e257600080fd5b611df1826136bb565b84815260018060a01b038416602082015282604082015260806060820152600061371860808301846132bb565b9695505050505050565b82815260408101611df16020830184613244565b82815260406020820152815160408201526020820151606082015260408201516080820152606082015160a0820152608082015160c0820152600060a083015160c060e08401526122a0610100840182613403565b634e487b7160e01b600052601160045260246000fd5b600082198211156137b4576137b461378b565b500190565b634e487b7160e01b600052603260045260246000fd5b600080604083850312156137e257600080fd5b505080516020909101519092909150565b85815260018060a01b038516602082015283604082015260a06060820152600061382060a08301856132bb565b828103608084015261383281856132bb565b98975050505050505050565b600082601f83011261384f57600080fd5b6040516101608082018281106001600160401b038211171561387357613873612bb9565b6040528301818582111561388657600080fd5b845b828110156138a0578051825260209182019101613888565b509195945050505050565b600082601f8301126138bc57600080fd5b815160206138cc612cf783612e53565b82815260059290921b840181019181810190868411156138eb57600080fd5b8286015b84811015612eda57805183529183019183016138ef565b600082601f83011261391757600080fd5b8151613925612cf782612cb1565b81815284602083860101111561393a57600080fd5b6133b382602083016020870161328f565b600082601f83011261395c57600080fd5b8151602061396c612cf783612e53565b82815260059290921b8401810191818101908684111561398b57600080fd5b8286015b84811015612eda5780516001600160401b03808211156139af5760008081fd5b9088019060c0828b03601f19018113156139c95760008081fd5b6139d1612c3c565b878401516139de81612ddc565b8082525060408085015189830152606080860151828401526080915081860151818401525060a08086015185811115613a175760008081fd5b613a258f8c838a0101613906565b8385015250613a358487016136bb565b9083015250865250505091830191830161398f565b600082601f830112613a5b57600080fd5b81516020613a6b612cf783612e53565b82815260059290921b84018101918181019086841115613a8a57600080fd5b8286015b84811015612eda5780516001600160401b0380821115613aae5760008081fd5b908801906060828b03601f1901811315613ac85760008081fd5b613ad0612bcf565b838801518152604080850151828a0152918401519183831115613af35760008081fd5b613b018d8a85880101613906565b908201528652505050918301918301613a8e565b600082601f830112613b2657600080fd5b81516020613b36612cf783612e53565b82815260059290921b84018101918181019086841115613b5557600080fd5b8286015b84811015612eda578051613b6c81612ddc565b8352918301918301613b59565b60006020808385031215613b8c57600080fd5b82516001600160401b0380821115613ba357600080fd5b818501915085601f830112613bb757600080fd5b8151613bc5612cf782612e53565b81815260059190911b83018401908481019088831115613be457600080fd5b8585015b83811015613db557805185811115613c005760008081fd5b86016103c0818c03601f1901811315613c195760008081fd5b613c21612c5e565b8983015181526040808401518b830152606080850151828401526080915081850151818401525060a0808501518284015260c0915081850151818401525060e08085015182840152610100915081850151818401525061012080850151828401526101409150818501518184015250610160808501518284015261018091508185015181840152506101a0613cb88f82870161383e565b82840152610300850151915089821115613cd25760008081fd5b613ce08f8d848801016138ab565b90830152506103208301516101c082015261034083015188811115613d055760008081fd5b613d138e8c8387010161394b565b6101e08301525061036083015188811115613d2e5760008081fd5b613d3c8e8c83870101613a4a565b6102008301525061038083015188811115613d575760008081fd5b613d658e8c83870101613b15565b610220830152506103a083015188811115613d805760008081fd5b613d8e8e8c83870101613b15565b61024083015250613da08284016136bb565b61026082015285525050918601918601613be8565b5098975050505050505050565b6000816000190483118215151615613ddc57613ddc61378b565b500290565b600060a08284031215613df357600080fd5b60405160a081018181106001600160401b0382111715613e1557613e15612bb9565b604052613e21836136bb565b8152613e2f602084016136bb565b60208201526040830151604082015260608301516060820152608083015160808201528091505092915050565b600082821015613e6e57613e6e61378b565b500390565b60008060408385031215613e8657600080fd5b82519150613e96602084016136bb565b90509250929050565b600080600060608486031215613eb457600080fd5b8351925060208401519150604084015190509250925092565b6000600019821415613ee157613ee161378b565b506001019056fea264697066735822122062f9f8fcbe2255ac4ac352b7485ecd06ad28b20555883972786c73874dc4dce364736f6c63430008090033";
const isSuperArgs = (xs) => {
    return (typeof xs[0] === "string" ||
        Array.isArray(xs[0]) ||
        "_isInterface" in xs[0]);
};
class DisputeLogic__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            const [linkLibraryAddresses, signer] = args;
            super(_abi, DisputeLogic__factory.linkBytecode(linkLibraryAddresses), signer);
        }
    }
    static linkBytecode(linkLibraryAddresses) {
        let linkedBytecode = _bytecode;
        linkedBytecode = linkedBytecode.replace(new RegExp("__\\$a30805314670aba7a268b004e381771f39\\$__", "g"), linkLibraryAddresses["contracts/protocol/libraries/logics/DisputeDataLogic.sol:DisputeDataLogic"]
            .replace(/^0x/, "")
            .toLowerCase());
        linkedBytecode = linkedBytecode.replace(new RegExp("__\\$81e31c3dd8ba021b250581ddc9f3365d5d\\$__", "g"), linkLibraryAddresses["contracts/protocol/libraries/logics/RoundLogic.sol:RoundLogic"]
            .replace(/^0x/, "")
            .toLowerCase());
        linkedBytecode = linkedBytecode.replace(new RegExp("__\\$af828e0c356433108d8dfb596a8a6763fb\\$__", "g"), linkLibraryAddresses["contracts/protocol/libraries/logics/RoundDataLogic.sol:RoundDataLogic"]
            .replace(/^0x/, "")
            .toLowerCase());
        return linkedBytecode;
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.DisputeLogic__factory = DisputeLogic__factory;
DisputeLogic__factory.bytecode = _bytecode;
DisputeLogic__factory.abi = _abi;
