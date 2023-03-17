import {
  isEvmAddressMetadataKey,
  isEvmAddressArrayMetadataKey,
  isEvmAddressArrayMetadataKeyNotEmpty,
  isEvmAddressOrENSMetadataKey,
  isPositiveMetadataKey,
} from "./params";
import {
  isEvmAddressValidator,
  isEvmAddressArrayValidator,
  isEvmAddressArrayValidatorNotEmpty,
  isAmountGtThan0Validator,
  isEvmAddressOrEnsValidator,
} from "./validations";

class Test {}

describe("Validators", () => {
  const target = Test;
  const propertyName = "claimNative";
  const propertyKey = "claimNative";
  describe("isEvmAddressValidator", () => {
    it("expects to run with correct address", () => {
      const methodArguments = ["0x0000000000000000000000000000000000000001"];
      const existingPossibleAddresses = [
        {
          index: 0,
        },
      ];
      Reflect.defineMetadata(
        isEvmAddressMetadataKey,
        existingPossibleAddresses,
        target,
        propertyKey
      );

      expect(() =>
        isEvmAddressValidator({
          target,
          propertyName,
          methodArguments,
        })
      ).not.toThrow();
    });

    it("Expects to run with no field: @isEvmAddress()", () => {
      const methodArguments = ["0x0000000000000000000000000000000000000001"];
      const existingPossibleAddresses = [
        {
          index: 0,
          field: undefined,
        },
      ];

      Reflect.defineMetadata(
        isEvmAddressMetadataKey,
        existingPossibleAddresses,
        target,
        propertyKey
      );

      expect(() => {
        isEvmAddressValidator({
          target,
          propertyName,
          methodArguments,
        });
      }).not.toThrow();
    });
    it("Expects to run with no params", () => {
      const methodArguments = ["0x0000000000000000000000000000000000000001"];

      Reflect.defineMetadata(
        isEvmAddressMetadataKey,
        undefined,
        target,
        propertyKey
      );
      expect(() => {
        isEvmAddressValidator({
          target,
          propertyName,
          methodArguments,
        });
      }).not.toThrow();
    });
    it("Expects to run with no address if optional", () => {
      const methodArguments = [undefined];
      const existingPossibleAddresses = [
        {
          index: 0,
          field: undefined,
        },
      ];
      const isParamOptional = [true];
      Reflect.defineMetadata(
        isEvmAddressMetadataKey,
        existingPossibleAddresses,
        target,
        propertyKey
      );

      expect(() => {
        isEvmAddressValidator({
          target,
          propertyName,
          methodArguments,
          isParamOptional,
        });
      }).not.toThrow();
    });
    it("Expects to not run with incorrect address", () => {
      const methodArguments = ["asfdasdf"];
      const existingPossibleAddresses = [
        {
          index: 0,
        },
      ];

      Reflect.defineMetadata(
        isEvmAddressMetadataKey,
        existingPossibleAddresses,
        target,
        propertyKey
      );

      expect(() => {
        isEvmAddressValidator({
          target,
          propertyName,
          methodArguments,
        });
      }).toThrowError(
        `Address: ${methodArguments[0]} is not a valid ethereum Address`
      );
    });
    it("Expects to throw when not an address and not optional", () => {
      const methodArguments = {
        "0": ["asdf"],
      };

      const existingPossibleAddresses = [
        {
          index: 0,
          field: undefined,
        },
      ];
      const isParamOptional = [false];
      Reflect.defineMetadata(
        isEvmAddressArrayMetadataKeyNotEmpty,
        existingPossibleAddresses,
        target,
        propertyKey
      );

      expect(() => {
        isEvmAddressArrayValidatorNotEmpty({
          target,
          propertyName,
          methodArguments,
          isParamOptional,
        });
      }).toThrowError(
        new Error(`Address: asdf is not a valid ethereum Address`)
      );
    });
    it("Expects to throw when no address and not optional passed", () => {
      const methodArguments = {
        "0": {
          to: ["asdf"],
        },
      };
      const existingPossibleAddresses = [
        {
          index: 0,
          field: undefined,
        },
      ];

      Reflect.defineMetadata(
        isEvmAddressArrayMetadataKeyNotEmpty,
        existingPossibleAddresses,
        target,
        propertyKey
      );

      expect(() => {
        isEvmAddressArrayValidatorNotEmpty({
          target,
          propertyName,
          methodArguments,
        });
      }).toThrowError(new Error(`Addresses Array should not be empty`));
    });
    it("Expects to throw when empty array", () => {
      const methodArguments = {
        "0": {
          to: [],
        },
      };
      const existingPossibleAddresses = [
        {
          index: 0,
          field: "to",
        },
      ];
      Reflect.defineMetadata(
        isEvmAddressArrayMetadataKeyNotEmpty,
        existingPossibleAddresses,
        target,
        propertyKey
      );

      expect(() => {
        isEvmAddressArrayValidatorNotEmpty({
          target,
          propertyName,
          methodArguments,
        });
      }).toThrowError(new Error(`Addresses Array should not be empty`));
    });
  });
  describe("isEvmAddressArrayValidator", () => {
    it("Expects to run with correct address", () => {
      const methodArguments = {
        "0": {
          to: ["0x0000000000000000000000000000000000000001"],
        },
      };
      const existingPossibleAddresses = [
        {
          index: 0,
          field: "to",
        },
      ];

      Reflect.defineMetadata(
        isEvmAddressArrayMetadataKey,
        existingPossibleAddresses,
        target,
        propertyKey
      );

      expect(() => {
        isEvmAddressArrayValidator({
          target,
          propertyName,
          methodArguments,
        });
      }).not.toThrow();
    });
    it("Expects to run when empty array", () => {
      const methodArguments = {
        "0": {
          to: [],
        },
      };
      const existingPossibleAddresses = [
        {
          index: 0,
          field: "to",
        },
      ];
      Reflect.defineMetadata(
        isEvmAddressArrayMetadataKey,
        existingPossibleAddresses,
        target,
        propertyKey
      );

      expect(() => {
        isEvmAddressArrayValidator({
          target,
          propertyName,
          methodArguments,
        });
      }).not.toThrow();
    });
    it("Expects to run when empty array and no field", () => {
      const methodArguments = {
        "0": [],
      };
      const existingPossibleAddresses = [
        {
          index: 0,
          field: undefined,
        },
      ];
      Reflect.defineMetadata(
        isEvmAddressArrayMetadataKey,
        existingPossibleAddresses,
        target,
        propertyKey
      );

      expect(() => {
        isEvmAddressArrayValidator({
          target,
          propertyName,
          methodArguments,
        });
      }).not.toThrow();
    });
    it("Expects to run with correct address when no field passed ()", () => {
      const methodArguments = {
        "0": ["0x0000000000000000000000000000000000000001"],
      };
      const existingPossibleAddresses = [
        {
          index: 0,
          field: undefined,
        },
      ];

      Reflect.defineMetadata(
        isEvmAddressArrayMetadataKey,
        existingPossibleAddresses,
        target,
        propertyKey
      );

      expect(() => {
        isEvmAddressArrayValidator({
          target,
          propertyName,
          methodArguments,
        });
      }).not.toThrow();
    });
    it("Expects to run with correct address but in other field", () => {
      const methodArguments = {
        "0": {
          from: ["0x0000000000000000000000000000000000000001"],
        },
      };
      const existingPossibleAddresses = [
        {
          index: 0,
          field: "to",
        },
      ];

      Reflect.defineMetadata(
        isEvmAddressArrayMetadataKey,
        existingPossibleAddresses,
        target,
        propertyKey
      );

      expect(() => {
        isEvmAddressArrayValidator({
          target,
          propertyName,
          methodArguments,
        });
      }).not.toThrow();
    });
    it("Expects to run with no params", () => {
      const methodArguments = {
        "0": {
          to: ["0x0000000000000000000000000000000000000001"],
        },
      };

      Reflect.defineMetadata(
        isEvmAddressArrayMetadataKey,
        undefined,
        target,
        propertyKey
      );

      expect(() => {
        isEvmAddressArrayValidator({
          target,
          propertyName,
          methodArguments,
        });
      }).not.toThrow();
    });
    it("Expects to run with no address if optional", () => {
      const methodArguments = {
        "0": [],
      };
      const existingPossibleAddresses = [
        {
          index: 0,
          field: undefined,
        },
      ];
      const isParamOptional = [true];
      Reflect.defineMetadata(
        isEvmAddressArrayMetadataKey,
        existingPossibleAddresses,
        target,
        propertyKey
      );

      expect(() => {
        isEvmAddressArrayValidator({
          target,
          propertyName,
          methodArguments,
          isParamOptional,
        });
      }).not.toThrow();
    });
    it("Expects to not run with incorrect address", () => {
      const methodArguments = {
        "0": {
          to: ["asdfasdf"],
        },
      };
      const existingPossibleAddresses = [
        {
          index: 0,
          field: "to",
        },
      ];

      Reflect.defineMetadata(
        isEvmAddressArrayMetadataKey,
        existingPossibleAddresses,
        target,
        propertyKey
      );

      expect(() => {
        isEvmAddressArrayValidator({
          target,
          propertyName,
          methodArguments,
        });
      }).toThrowError(
        `Address: ${methodArguments[0].to[0]} is not a valid ethereum Address`
      );
    });
    it("Expects to throw when no address and not optional", () => {
      const methodArguments = {
        "0": ["asdf"],
      };
      const existingPossibleAddresses = [
        {
          index: 0,
          field: undefined,
        },
      ];
      const isParamOptional = [false];
      Reflect.defineMetadata(
        isEvmAddressArrayMetadataKey,
        existingPossibleAddresses,
        target,
        propertyKey
      );

      expect(() => {
        isEvmAddressArrayValidator({
          target,
          propertyName,
          methodArguments,
          isParamOptional,
        });
      }).toThrowError(
        new Error(`Address: asdf is not a valid ethereum Address`)
      );
    });
  });
  describe("isEvmAddressOrEnsValidator", () => {
    it("should not throw for valid ens with isParaOptional omitted", () => {
      const methodArguments = {
        "0": "aave.eth",
      };
      const existingPossibleAddresses = [
        {
          index: 0,
          field: undefined,
        },
      ];

      Reflect.defineMetadata(
        isEvmAddressOrENSMetadataKey,
        existingPossibleAddresses,
        target,
        propertyKey
      );

      expect(() => {
        isEvmAddressOrEnsValidator({
          target,
          propertyName,
          methodArguments,
        });
      }).not.toThrow();
    });
    it("should not throw for valid ens with isParaOptional truthy", () => {
      const methodArguments = {
        "0": "aave.eth",
      };
      const existingPossibleAddresses = [
        {
          index: 0,
          field: undefined,
        },
      ];

      Reflect.defineMetadata(
        isEvmAddressOrENSMetadataKey,
        existingPossibleAddresses,
        target,
        propertyKey
      );

      expect(() => {
        isEvmAddressOrEnsValidator({
          target,
          propertyName,
          methodArguments,
          isParamOptional: [true],
        });
      }).not.toThrow();
    });
    it("should not throw for valid ens with isParaOptional falsy", () => {
      const methodArguments = {
        "0": "aave.eth",
      };
      const existingPossibleAddresses = [
        {
          index: 0,
          field: undefined,
        },
      ];

      Reflect.defineMetadata(
        isEvmAddressOrENSMetadataKey,
        existingPossibleAddresses,
        target,
        propertyKey
      );

      expect(() => {
        isEvmAddressOrEnsValidator({
          target,
          propertyName,
          methodArguments,
          isParamOptional: [false],
        });
      }).not.toThrow();
    });
    it("should throw for invalid address", () => {
      const methodArguments = {
        "0": "aave",
      };
      const existingPossibleAddresses = [
        {
          index: 0,
          field: undefined,
        },
      ];

      Reflect.defineMetadata(
        isEvmAddressOrENSMetadataKey,
        existingPossibleAddresses,
        target,
        propertyKey
      );

      expect(() => {
        isEvmAddressOrEnsValidator({
          target,
          propertyName,
          methodArguments,
          isParamOptional: [false],
        });
      }).toThrow();
    });
  });
  describe("isAmountGtThan0Validator", () => {
    it("Expects to run if all params correct", () => {
      const methodArguments = {
        "0": {
          amount: "1000000000000000000",
        },
      };
      const existingPossibleAddresses = [
        {
          index: 0,
          field: "amount",
        },
      ];

      Reflect.defineMetadata(
        isPositiveMetadataKey,
        existingPossibleAddresses,
        target,
        propertyKey
      );

      expect(() => {
        isAmountGtThan0Validator({
          target,
          propertyName,
          methodArguments,
        });
      }).not.toThrow();
    });
    it("Expects to run if all params correct and no field", () => {
      const methodArguments = {
        "0": "1000000000000000000",
      };
      const existingPossibleAddresses = [
        {
          index: 0,
          field: undefined,
        },
      ];

      Reflect.defineMetadata(
        isPositiveMetadataKey,
        existingPossibleAddresses,
        target,
        propertyKey
      );

      expect(() => {
        isAmountGtThan0Validator({
          target,
          propertyName,
          methodArguments,
        });
      }).not.toThrow();
    });
    it("Expects to run if no params and optional", () => {
      const methodArguments = {
        "0": {},
      };
      const existingPossibleAddresses = [
        {
          index: 0,
          field: "amount",
        },
      ];

      Reflect.defineMetadata(
        isPositiveMetadataKey,
        existingPossibleAddresses,
        target,
        propertyKey
      );
      const isOptional = [true];
      expect(() => {
        isAmountGtThan0Validator({
          target,
          propertyName,
          methodArguments,
          isParamOptional: isOptional,
        });
      }).not.toThrow();
    });
    it("Expects to run if no params and optional and no field", () => {
      const methodArguments = {};
      const existingPossibleAddresses = [
        {
          index: 0,
          field: undefined,
        },
      ];

      Reflect.defineMetadata(
        isPositiveMetadataKey,
        existingPossibleAddresses,
        target,
        propertyKey
      );
      const isOptional = [true];
      expect(() => {
        isAmountGtThan0Validator({
          target,
          propertyName,
          methodArguments,
          isParamOptional: isOptional,
        });
      }).not.toThrow();
    });
    it("Expects to fail when amount 0", () => {
      const methodArguments = {
        "0": {
          amount: "0",
        },
      };
      const existingPossibleAddresses = [
        {
          index: 0,
          field: "amount",
        },
      ];

      Reflect.defineMetadata(
        isPositiveMetadataKey,
        existingPossibleAddresses,
        target,
        propertyKey
      );

      expect(() => {
        isAmountGtThan0Validator({
          target,
          propertyName,
          methodArguments,
        });
      }).toThrowError(new Error(`Amount: 0 needs to be greater than 0`));
    });
    it("Expects to fail when amount not number", () => {
      const methodArguments = {
        "0": {
          amount: "asdf",
        },
      };
      const existingPossibleAddresses = [
        {
          index: 0,
          field: "amount",
        },
      ];

      Reflect.defineMetadata(
        isPositiveMetadataKey,
        existingPossibleAddresses,
        target,
        propertyKey
      );

      expect(() => {
        isAmountGtThan0Validator({
          target,
          propertyName,
          methodArguments,
        });
      }).toThrowError(new Error(`Amount: asdf needs to be greater than 0`));
    });
    it("Expects to fail when amount 0 and no field", () => {
      const methodArguments = {
        "0": "0",
      };
      const existingPossibleAddresses = [
        {
          index: 0,
          field: undefined,
        },
      ];

      Reflect.defineMetadata(
        isPositiveMetadataKey,
        existingPossibleAddresses,
        target,
        propertyKey
      );

      expect(() => {
        isAmountGtThan0Validator({
          target,
          propertyName,
          methodArguments,
        });
      }).toThrowError(new Error(`Amount: 0 needs to be greater than 0`));
    });
    it("Expects to fail when amount not number and no field", () => {
      const methodArguments = {
        "0": "asdf",
      };
      const existingPossibleAddresses = [
        {
          index: 0,
          field: undefined,
        },
      ];

      Reflect.defineMetadata(
        isPositiveMetadataKey,
        existingPossibleAddresses,
        target,
        propertyKey
      );

      expect(() => {
        isAmountGtThan0Validator({
          target,
          propertyName,
          methodArguments,
        });
      }).toThrowError(new Error(`Amount: asdf needs to be greater than 0`));
    });
  });
});
