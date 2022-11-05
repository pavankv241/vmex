"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IBoosterFactory = void 0;
const ethers_1 = require("ethers");
class IBoosterFactory {
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.IBoosterFactory = IBoosterFactory;
const _abi = [
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_pid",
                type: "uint256",
            },
            {
                internalType: "uint256",
                name: "_amount",
                type: "uint256",
            },
            {
                internalType: "bool",
                name: "_stake",
                type: "bool",
            },
        ],
        name: "deposit",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "n",
                type: "uint256",
            },
        ],
        name: "poolInfo",
        outputs: [
            {
                components: [
                    {
                        internalType: "address",
                        name: "lptoken",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "token",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "gauge",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "crvRewards",
                        type: "address",
                    },
                    {
                        internalType: "address",
                        name: "stash",
                        type: "address",
                    },
                    {
                        internalType: "bool",
                        name: "shutdown",
                        type: "bool",
                    },
                ],
                internalType: "struct IBooster.PoolInfo",
                name: "",
                type: "tuple",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "poolLength",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
//# sourceMappingURL=IBoosterFactory.js.map