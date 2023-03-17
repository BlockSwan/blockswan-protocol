import { utils } from "ethers";

import {
  isAmountGtThan0Validator,
  isEvmAddressValidator,
} from "../validations";

export function FaucetValidator(
  target: any,
  propertyName: string,
  descriptor: TypedPropertyDescriptor<any>
): any {
  const method = descriptor.value;
  descriptor.value = function () {
    // @ts-expect-error
    if (!utils.isAddress(this.faucetAddress)) {
      console.error(`[FaucetValidator] You need to pass valid addresses`);
      return [];
    }

    isEvmAddressValidator({
      target,
      propertyName,
      methodArguments: arguments,
    });

    return method.apply(this, arguments);
  };
}

export function MetaTxValidator(
  target: any,
  propertyName: string,
  descriptor: TypedPropertyDescriptor<any>
): any {
  const method = descriptor.value;
  // @ts-expect-error
  if (!utils.isAddress(this.input.from) || !utils.isAddress(this.input.to)) {
    console.error(`[MetaTxValidator] You need to pass valid addresses`);
    return [];
  }
  descriptor.value = function () {
    isEvmAddressValidator({
      target,
      propertyName,
      methodArguments: arguments,
    });

    return method.apply(this, arguments);
  };
}
