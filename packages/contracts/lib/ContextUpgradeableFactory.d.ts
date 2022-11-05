import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ContextUpgradeable } from "./ContextUpgradeable";
export declare class ContextUpgradeableFactory {
    static connect(address: string, signerOrProvider: Signer | Provider): ContextUpgradeable;
}
