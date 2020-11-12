namespace Literal {
  let foo: "Hello"
  // foo = "bar" // ERROR

  type Direction = "North" | "East" | "South" | "West"

  type OneToFive = 1 | 2 | 3 | 4 | 5
  type Bools = true | false

  namespace LiteralError {
    function iTakeFoo(foo: "foo") {}

    const test = {
      someProp: "foo",
    }
    iTakeFoo(test.someProp) // ERROR
    // How To Solve?
  }

  // ---

  const a = "aaa"

  type A = typeof a // ???

  let b = "bbb"

  type B = typeof b // ???


  let as = ['a', 'b', 'c']

  type AS = typeof as[number] // ???

  const bs = ['a', 'b', 'c'] as const

  type BS = typeof bs // ???
}
