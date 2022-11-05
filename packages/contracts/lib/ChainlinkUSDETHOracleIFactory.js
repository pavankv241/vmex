"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChainlinkUSDETHOracleIFactory = void 0;
const ethers_1 = require("ethers");
class ChainlinkUSDETHOracleIFactory {
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.ChainlinkUSDETHOracleIFactory = ChainlinkUSDETHOracleIFactory;
const _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "int256",
                name: "current",
                type: "int256",
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "answerId",
                type: "uint256",
            },
        ],
        name: "AnswerUpdated",
        type: "event",
    },
];
//# sourceMappingURL=ChainlinkUSDETHOracleIFactory.js.map