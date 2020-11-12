import { Animal, Dog } from "./bivariant.animal";

namespace Conditional {
  // conditional types
  // `T extends U ? X : Y`
  // T is assignable to U the type is X, otherwise the type is Y.
  // ie. T is subtype of U, type is X, otherwise the type is Y.
  type IsDog<T> = T extends Dog ? "yes" : "no";
  type AnimalIsDog = IsDog<Animal>;
}

namespace DistributiveConditional {
  // distributive conditional types
  // T extends U ? X : Y
  // with T = A | B | C
  // equals (A extends U ? X : Y) | (B extends U ? X : Y) | (C extends U ? X : Y).

  type TypeName<T> = T extends number
    ? "number"
    : T extends string
    ? "string"
    : "unknown";
  type type1 = TypeName<"1" | 2>;

  type ExtendsTrue<T> = T extends true ? "yes" : "no";
  type BooleanExtendsTrue = ExtendsTrue<boolean>; // ??  "yes" | "no"
  // boolean is union of `true` and `false`

  type Extends1<T> = T extends 1 ? "yes" : "no";
  type NumberExtends1 = Extends1<number>; // ?? "no"
  // number is not a union in typescript
}

namespace NeverOnDistributiveConditional {
  type NeverMakesSense = never extends never ? "yes" : "no"; // 'yes'
  type ExtendsNever<T> = T extends never ? "yes" : "no";
  type MakesSenseToo = ExtendsNever<{}>; // Resolves to 'no'
  type WhatIsNever = ExtendsNever<never>; // ?? never

  // never is empty set, no members in this union, so ExtendsNever never applys
  // disable distributive conditional types
  type ExtendsNever2<T> = [T] extends [never] ? "yes" : "no";
  type WhatIsNever2 = ExtendsNever2<never>; // ?? "yes"


  // a use case
  type ArrayLengthLessThanThree<T> = ExtendsNever2<Extract<'2', keyof T>>
  let yes: ArrayLengthLessThanThree<[1, 2]>
  let no: ArrayLengthLessThanThree<[1, 2, 3]>

  // work with template literal types
  type ArrayLengthLessThan<U extends number, T> = ExtendsNever2<Extract<ToString<U>, keyof T>>
  type ToString<T extends number> = `${T}`;
  let lessThan3: ArrayLengthLessThan<2, [1, 2, 3]>
  
  type ArrayGreaterThan<U extends number, T> = ExtendsNever2<Exclude<ToString<U>, keyof T>>
  let notGreaterThan3: ArrayGreaterThan<2, [1, 2]>
  let doGreaterThan3: ArrayGreaterThan<2, [1, 2, 3]>
}