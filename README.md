# Typescript Common Pitfalls

## TOC

- [Typescript Common Pitfalls](#typescript-common-pitfalls)
  - [TOC](#toc)
  - [Contents](#contents)
    - [Substitutability](#substitutability)
    - [Structural Typing](#structural-typing)
      - [如何防止类型兼容](#如何防止类型兼容)
      - [类](#类)
    - [Enums](#enums)
      - [Number Enums](#number-enums)
      - [String Enums](#string-enums)
      - [Const Enums](#const-enums)
    - [Literal Types](#literal-types)
      - [类型“string”的参数不能赋给类型“"foo"”的参数。](#类型string的参数不能赋给类型foo的参数)
    - [Variance](#variance)
    - [Type Guard](#type-guard)
    - [Any, Unknown, Void and Never](#any-unknown-void-and-never)
    - [条件类型](#条件类型)
      - [分布条件类型](#分布条件类型)

## Contents

### Substitutability

[substitutability.ts](src/substitutability.ts)

[里氏替换原则][substitutability]:
如果一个对象 X 能够替换 Y，那么 X 就是 Y 的子类型。也就是说 X 能够赋值给 Y。

```typescript
const X: "abcd" = "abcd";
let Y: string;
// X is subtype of Y
Y = X;
// X = Y // ERROR
```

Q: 为什么有更少参数的函数能够赋值给具有更多参数的函数？/ 为什么一个返回值不是 void 的函数，可以赋值给一个返回值为 void 的函数？
A: 可以安全的忽略额外的参数

### Structural Typing

[structralTyping.ts](src/structralTyping.ts)

[结构化类型][structural-typing]
如果他们的成员类型是兼容的，则他们是兼容的.
类型具有不同名称的事实并不重要，因为它们具有相同类型的成员，所以它们是相同的（可以互换的）。

#### 如何防止类型兼容

添加成员，使用断言。

#### 类

也进行结构上的比较。列外: private, protected

### Enums

#### Number Enums

[enum.number.ts](src/enum.number.ts)

[enum.number.js](src/enum.number.js)


值默认从 0 开始, 注意会合并。
值也做键。

#### String Enums

[num.string.ts](src/enum.string.ts)

[num.string.js](src/enum.string.js)

值不做键。

#### Const Enums

[num.const.ts](src/enum.const.ts)

[num.const.js](src/enum.const.js)


enums 定义的时候不会生成 js。
禁用: `--preserveConstEnums`

### Literal Types

[literal.ts](src/literal.ts)

字面量类型

#### 类型“string”的参数不能赋给类型“"foo"”的参数。

3 种解决办法。

1. as const
2. as 'foo'
3. type annotation

### Variance

[bivariant.animal.ts](src/bivariant.animal.ts)

[bivariant.ts](src/bivariant.ts)

[变体][variance]

- 协变（Covariant）：只在同一个方向;
- 逆变（Contravariant）：只在相反的方向;
- 双向协变（Bivariant）：包括同一个方向和不同方向;
- 不变（Invariant）：如果类型不完全相同，则它们是不兼容的;

[解释][variance-explain]

在 TypeScript 中， 参数类型是双向协变的 ，也就是说既是协变又是逆变的，而这并不安全。
原因: 双向协变适用于大多数情况，在安全和便利中，做了妥协。

[config][strict-function-types]: `--strictFunctionTypes`

### Type Guard

[typeGuard.ts](src/typeGuard.ts)
[typeGuard.fail.ts](src/typeGuard.fail.ts)

类型保护
允许使用更小范围下的类型。

### Any, Unknown, Void and Never

[type.void.never.ts](src/type.void.never.ts)

[type.any.unknown.never.ts](src/type.any.unknown.never.ts)

unknown: 未知，可能为任何类型。Top Type. 但不是[集合][unknown-is-not-union]
any: 不对该变量类型检查。
never：所有类型的子类型。空集。可以看作不会返回值的函数的返回类型。Bottom Type.
void: 可以看作无返回值的函数的返回类型。

[diagram][types-diagram]

### 条件类型

[type.conditional.ts](src/type.conditional.ts)

#### 分布条件类型

重点 1：naked type parameter
重点 2：distributed over union types

[never in distributive conditional type][extends-never]

##

[variance]: https://basarat.gitbook.io/typescript/type-system/type-compatibility#variance
[variance-explain]: https://hub.fastgit.org/Dobiasd/articles/blob/master/covariance_and_contravariance_explained_without_code.md
[strict-function-types]: https://hub.fastgit.org/microsoft/TypeScript/pull/18654
[structural-typing]: https://hub.fastgit.org/Microsoft/TypeScript/wiki/FAQ#what-is-structural-typing
[substitutability]: https://hub.fastgit.org/Microsoft/TypeScript/wiki/FAQ#substitutability
[unknown-never]: https://blog.logrocket.com/when-to-use-never-and-unknown-in-typescript-5e4d6c5799ad/
[unknown-is-not-union]: https://hub.fastgit.org/microsoft/TypeScript/issues/27418
[extends-never]: https://hub.fastgit.org/microsoft/TypeScript/issues/31751
[types-diagram]: https://gist.github.com/laughinghan/31e02b3f3b79a4b1d58138beff1a2a89
