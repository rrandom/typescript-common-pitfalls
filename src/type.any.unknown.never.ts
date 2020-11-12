namespace TsTypes {
  // again, Y = X, X is subtype of Y

  let nerverTypeValue: never;
  let undefinedTypeValue: undefined = undefined;
  let nullTypeValue: null = null;
  // primitive types: boolean, number, string etc.
  let primitiveTypeValue = "abcd";
  let anyTypeValue: any;
  let unknownTypeValue: unknown;
  let objectTypeValue: object = {};
  let voidTypeValue: void;

  // -- never --
  nerverTypeValue = nerverTypeValue;
  undefinedTypeValue = nerverTypeValue;
  nullTypeValue = nerverTypeValue;
  primitiveTypeValue = nerverTypeValue;
  anyTypeValue = nerverTypeValue;
  unknownTypeValue = nerverTypeValue;
  objectTypeValue = nerverTypeValue;
  voidTypeValue = nerverTypeValue;
  // ---- try assign to never
  nerverTypeValue = nerverTypeValue;
  nerverTypeValue = undefinedTypeValue;
  nerverTypeValue = nullTypeValue;
  nerverTypeValue = primitiveTypeValue;
  nerverTypeValue = anyTypeValue;
  nerverTypeValue = unknownTypeValue;
  nerverTypeValue = objectTypeValue;
  nerverTypeValue = voidTypeValue;
  // never is subtype of all subtype
  // Bottom type

  // -- unkown --
  unknownTypeValue = nerverTypeValue;
  unknownTypeValue = nullTypeValue;
  unknownTypeValue = primitiveTypeValue;
  unknownTypeValue = anyTypeValue;
  unknownTypeValue = unknownTypeValue;
  unknownTypeValue = objectTypeValue;
  unknownTypeValue = voidTypeValue;
  // --- assign unkown to ...
  nerverTypeValue = unknownTypeValue;
  nullTypeValue = unknownTypeValue;
  primitiveTypeValue = unknownTypeValue;
  anyTypeValue = unknownTypeValue;
  unknownTypeValue = unknownTypeValue;
  objectTypeValue = unknownTypeValue;
  voidTypeValue = unknownTypeValue;
  // all type are subtype of unkown
  // Top type

  // -- any --
  nerverTypeValue = anyTypeValue; // ERROR
  undefinedTypeValue = anyTypeValue; //
  nullTypeValue = anyTypeValue; //
  primitiveTypeValue = anyTypeValue;
  anyTypeValue = anyTypeValue;
  unknownTypeValue = anyTypeValue;
  objectTypeValue = anyTypeValue;
  voidTypeValue = anyTypeValue;
  // -
  anyTypeValue = nerverTypeValue;
  anyTypeValue = nullTypeValue;
  anyTypeValue = primitiveTypeValue;
  anyTypeValue = anyTypeValue;
  anyTypeValue = unknownTypeValue;
  anyTypeValue = objectTypeValue;
  anyTypeValue = voidTypeValue;
  // acts like a combination of never and unkown

  type UnkownIntersection = unknown & boolean; // boolean
  type UnkownUnion = unknown | boolean; // unkown

  type neverIntersection = never & boolean; // never
  type neverUnion = never | boolean; // boolean

  type AnyIntersection = any & boolean; // any
  type AnyUnion = any | boolean; // any



  // ---
  let c: {} = { abcd: "1" };
  let c1: object = { abcd: "1" };
  c = 1;
  c1 = 1;
}
