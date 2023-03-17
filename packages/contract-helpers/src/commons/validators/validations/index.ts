import { utils } from "ethers";
import { canBeEnsAddress } from "../../utils";

import {
  paramsType,
  isEvmAddressMetadataKey,
  isEvmAddressArrayMetadataKey,
  isEvmAddressArrayMetadataKeyNotEmpty,
  isEvmAddressOrENSMetadataKey,
  isPositiveMetadataKey,
  is0OrPositiveMetadataKey,
} from "../params";

export function isEvmAddressValidator(args: {
  target: any;
  propertyName: string;
  methodArguments: any;
  isParamOptional?: boolean[];
}): void {
  const { target, propertyName, methodArguments, isParamOptional } = args;
  const addressParameters: paramsType[] = Reflect.getOwnMetadata(
    isEvmAddressMetadataKey,
    target,
    propertyName
  );

  if (addressParameters) {
    addressParameters.forEach((storedParams) => {
      if (storedParams.field) {
        if (
          methodArguments[0][storedParams.field] &&
          !utils.isAddress(methodArguments[0][storedParams.field])
        ) {
          throw new Error(
            `Address: ${
              methodArguments[0][storedParams.field]
            } is not a valid ethereum Address`
          );
        }
      } else {
        const isOptional = isParamOptional?.[storedParams.index];
        if (
          methodArguments[storedParams.index] &&
          !isOptional &&
          !utils.isAddress(methodArguments[storedParams.index])
        ) {
          throw new Error(
            `Address: ${
              methodArguments[storedParams.index]
            } is not a valid ethereum Address`
          );
        }
      }
    });
  }
}

export function isEvmAddressArrayValidator(args: {
  target: any;
  propertyName: string;
  methodArguments: any;
  isParamOptional?: boolean[];
}): void {
  const { target, propertyName, methodArguments, isParamOptional } = args;
  const addressParameters: paramsType[] = Reflect.getOwnMetadata(
    isEvmAddressArrayMetadataKey,
    target,
    propertyName
  );

  if (addressParameters) {
    addressParameters.forEach((storedParams) => {
      if (storedParams.field) {
        if (methodArguments[0][storedParams.field]) {
          if (methodArguments[0][storedParams.field].length > 0) {
            const fieldArray = methodArguments[0][storedParams.field];
            fieldArray.forEach((address: string) => {
              if (!utils.isAddress(address)) {
                throw new Error(
                  `Address: ${address} is not a valid ethereum Address`
                );
              }
            });
          }
        }
      } else {
        const isOptional = isParamOptional?.[storedParams.index];
        if (methodArguments[storedParams.index] && !isOptional) {
          if (methodArguments[storedParams.index].length > 0) {
            const fieldArray = methodArguments[storedParams.index];
            fieldArray.forEach((address: string) => {
              if (!utils.isAddress(address)) {
                throw new Error(
                  `Address: ${address} is not a valid ethereum Address`
                );
              }
            });
          }
        }
      }
    });
  }
}

export function isEvmAddressArrayValidatorNotEmpty(args: {
  target: any;
  propertyName: string;
  methodArguments: any;
  isParamOptional?: boolean[];
}): void {
  const { target, propertyName, methodArguments, isParamOptional } = args;
  const addressParameters: paramsType[] = Reflect.getOwnMetadata(
    isEvmAddressArrayMetadataKeyNotEmpty,
    target,
    propertyName
  );

  if (addressParameters) {
    addressParameters.forEach((storedParams) => {
      if (storedParams.field) {
        if (methodArguments[0][storedParams.field]) {
          if (methodArguments[0][storedParams.field].length > 0) {
            const fieldArray = methodArguments[0][storedParams.field];
            fieldArray.forEach((address: string) => {
              if (!utils.isAddress(address)) {
                throw new Error(
                  `Address: ${address} is not a valid ethereum Address`
                );
              }
            });
          } else {
            throw new Error("Addresses Array should not be empty");
          }
        }
      } else {
        const isOptional = isParamOptional?.[storedParams.index];
        if (methodArguments[storedParams.index] && !isOptional) {
          if (methodArguments[storedParams.index].length > 0) {
            const fieldArray = methodArguments[storedParams.index];
            fieldArray.forEach((address: string) => {
              if (!utils.isAddress(address)) {
                throw new Error(
                  `Address: ${address} is not a valid ethereum Address`
                );
              }
            });
          } else {
            throw new Error("Addresses Array should not be empty");
          }
        }
      }
    });
  }
}

export function isEvmAddressOrEnsValidator(args: {
  target: any;
  propertyName: string;
  methodArguments: any;
  isParamOptional?: boolean[];
}): void {
  const { target, propertyName, methodArguments, isParamOptional } = args;
  const addressParameters: paramsType[] = Reflect.getOwnMetadata(
    isEvmAddressOrENSMetadataKey,
    target,
    propertyName
  );

  if (addressParameters) {
    addressParameters.forEach((storedParams) => {
      if (storedParams.field) {
        if (
          methodArguments[0][storedParams.field] &&
          !utils.isAddress(methodArguments[0][storedParams.field])
        ) {
          if (!canBeEnsAddress(methodArguments[0][storedParams.field])) {
            throw new Error(
              `Address ${
                methodArguments[0][storedParams.field]
              } is not valid ENS format or a valid ethereum Address`
            );
          }
        }
      } else {
        const isOptional = isParamOptional?.[storedParams.index];
        if (
          methodArguments[storedParams.index] &&
          !isOptional &&
          !utils.isAddress(methodArguments[storedParams.index])
        ) {
          if (!canBeEnsAddress(methodArguments[storedParams.index])) {
            throw new Error(
              `Address ${
                methodArguments[storedParams.index]
              } is not valid ENS format or a valid ethereum Address`
            );
          }
        }
      }
    });
  }
}

export function isAmountGtThan0Validator(args: {
  target: any;
  propertyName: string;
  methodArguments: any;
  isParamOptional?: boolean[];
}): void {
  const { target, propertyName, methodArguments, isParamOptional } = args;
  const amountParameters: paramsType[] = Reflect.getOwnMetadata(
    isPositiveMetadataKey,
    target,
    propertyName
  );

  if (amountParameters) {
    amountParameters.forEach((storedParams) => {
      if (storedParams.field) {
        if (
          methodArguments[0][storedParams.field] &&
          !(Number(methodArguments[0][storedParams.field]) > 0)
        ) {
          throw new Error(
            `Amount: ${
              methodArguments[0][storedParams.field]
            } needs to be greater than 0`
          );
        }
      } else {
        const isOptional = isParamOptional?.[storedParams.index];
        if (!isOptional && !(Number(methodArguments[storedParams.index]) > 0)) {
          throw new Error(
            `Amount: ${
              methodArguments[storedParams.index]
            } needs to be greater than 0`
          );
        }
      }
    });
  }
}

export function isAmount0OrPositiveValidator(args: {
  target: any;
  propertyName: string;
  methodArguments: any;
  isParamOptional?: boolean[];
}): void {
  const { target, propertyName, methodArguments, isParamOptional } = args;
  const amountParameters: paramsType[] = Reflect.getOwnMetadata(
    is0OrPositiveMetadataKey,
    target,
    propertyName
  );

  if (amountParameters) {
    amountParameters.forEach((storedParams) => {
      if (storedParams.field) {
        if (
          methodArguments[0][storedParams.field] &&
          !(Number(methodArguments[0][storedParams.field]) >= 0)
        ) {
          throw new Error(
            `Amount: ${
              methodArguments[0][storedParams.field]
            } needs to be greater or equal than 0`
          );
        }
      } else {
        const isOptional = isParamOptional?.[storedParams.index];
        if (
          !isOptional &&
          !(Number(methodArguments[storedParams.index]) >= 0)
        ) {
          throw new Error(
            `Amount: ${
              methodArguments[storedParams.index]
            } needs to be greater or equal than 0`
          );
        }
      }
    });
  }
}
