function typeOfFn(x: number | string) {
  if (typeof x === "string") {
    // Within the block TypeScript knows that `x` must be a string
    console.log(x.subtr(1)); // Error, 'subtr' does not exist on `string`
    console.log(x.substr(1)); // OK
  }
  x.substr(1); // Error: There is no guarantee that `x` is a `string`
}

// ---- instanceof

class Foo {
  foo = 123;
  common = "123";
}

class Bar {
  bar = 123;
  common = "123";
}

function instanceOfFn(arg: Foo | Bar) {
  if (arg instanceof Foo) {
    console.log(arg.foo); // OK
    console.log(arg.bar); // Error!
  } else {
    console.log(arg.foo); // Error!
    console.log(arg.bar); // OK
  }

  console.log(arg.common); // OK
  console.log(arg.foo); // Error!
  console.log(arg.bar); // Error!
}

instanceOfFn(new Foo());
instanceOfFn(new Bar());

// ---- in

interface A {
  a: number;
  aa: 1;
}
interface B {
  b: string;
  bb: 1;
}

function inFn(q: A | B) {
  if ("a" in q) {
    // q: A
    console.log(q.aa);
  } else {
    // q: B
    console.log(q.bb);
  }
}

// --- literal
namespace LiteralGuard {
  type Foo = {
    kind: "foo"; // Literal type
    foo: number;
  };
  type Bar = {
    kind: "bar"; // Literal type
    bar: number;
  };

  function doStuff(arg: Foo | Bar) {
    if (arg.kind === "foo") {
      console.log(arg.foo); // OK
      console.log(arg.bar); // Error!
    } else {
      // MUST BE Bar!
      console.log(arg.foo); // Error!
      console.log(arg.bar); // OK
    }
  }
}

// -- custom

namespace UserGuard {
  interface Foo {
    foo: number;
    common: string;
  }

  interface Bar {
    bar: number;
    common: string;
  }

  function isFoo(arg: any): arg is Foo {
    return arg.foo !== undefined;
  }
  function doStuff(arg: Foo | Bar) {
    if (isFoo(arg)) {
      console.log(arg.foo); // OK
      console.log(arg.bar); // Error!
    } else {
      console.log(arg.foo); // Error!
      console.log(arg.bar); // OK
    }
  }

  doStuff({ foo: 123, common: "123" });
  doStuff({ bar: 123, common: "123" });
}

// --
