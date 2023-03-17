import "reflect-metadata";

export const isEvmAddressMetadataKey = Symbol("evmAddress");
export const isEvmAddressArrayMetadataKey = Symbol("evmAddressArray");
export const isEvmAddressOrENSMetadataKey = Symbol("evmOrENSAddress");
export const isPositiveMetadataKey = Symbol("isPositive");
export const is0OrPositiveMetadataKey = Symbol("is0OrPositiveMetadataKey");
export const optionalMetadataKey = Symbol("Optional");
export const isEvmAddressArrayMetadataKeyNotEmpty = Symbol(
  "isEvmAddressArrayMetadataKeyNotEmpty"
);

export type paramsType = {
  index: number;
  field: string | undefined;
};

export function isEvmAddress(field?: string) {
  return function (
    target: any,
    propertyKey: string | symbol,
    parameterIndex: number
  ): void {
    const existingPossibleAddresses: paramsType[] =
      Reflect.getOwnMetadata(isEvmAddressMetadataKey, target, propertyKey) ||
      [];

    existingPossibleAddresses.push({
      index: parameterIndex,
      field,
    });

    Reflect.defineMetadata(
      isEvmAddressMetadataKey,
      existingPossibleAddresses,
      target,
      propertyKey
    );
  };
}

export function isEvmAddressArray(field?: string) {
  return function (
    target: any,
    propertyKey: string | symbol,
    parameterIndex: number
  ): void {
    const existingPossibleAddresses: paramsType[] =
      Reflect.getOwnMetadata(
        isEvmAddressArrayMetadataKey,
        target,
        propertyKey
      ) || [];

    existingPossibleAddresses.push({
      index: parameterIndex,
      field,
    });

    Reflect.defineMetadata(
      isEvmAddressArrayMetadataKey,
      existingPossibleAddresses,
      target,
      propertyKey
    );
  };
}

export function isEvmAddressOrENS(field?: string) {
  return function (
    target: any,
    propertyKey: string | symbol,
    parameterIndex: number
  ): void {
    const existingPossibleAddresses: paramsType[] =
      Reflect.getOwnMetadata(
        isEvmAddressOrENSMetadataKey,
        target,
        propertyKey
      ) || [];

    existingPossibleAddresses.push({
      index: parameterIndex,
      field,
    });

    Reflect.defineMetadata(
      isEvmAddressOrENSMetadataKey,
      existingPossibleAddresses,
      target,
      propertyKey
    );
  };
}

export function isPositiveAmount(field?: string) {
  return function (
    target: any,
    propertyKey: string | symbol,
    parameterIndex: number
  ): void {
    const params: paramsType[] =
      Reflect.getOwnMetadata(isPositiveMetadataKey, target, propertyKey) || [];

    params.push({ index: parameterIndex, field });

    Reflect.defineMetadata(isPositiveMetadataKey, params, target, propertyKey);
  };
}

export function is0OrPositiveAmount(field?: string) {
  return function (
    target: any,
    propertyKey: string | symbol,
    parameterIndex: number
  ): void {
    const params: paramsType[] =
      Reflect.getOwnMetadata(is0OrPositiveMetadataKey, target, propertyKey) ||
      [];

    params.push({ index: parameterIndex, field });

    Reflect.defineMetadata(
      is0OrPositiveMetadataKey,
      params,
      target,
      propertyKey
    );
  };
}
