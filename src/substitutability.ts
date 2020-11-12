namespace Substitutability {
  const X: "abcd" = "abcd";
  let Y: string;
  // X is subtype of Y
  Y = X;
  // X = Y // ERROR

  /**
   * functions with fewer parameters assignable to functions that take more parameters
   */
  function handler(arg: string) {
    // ....
  }

  function doSomething1(callback: (arg1: string, arg2: number) => void) {
    callback("hello", 42);
  }

  // Expected error because 'doSomething' wants a callback of
  // 2 parameters, but 'handler' only accepts 1
  doSomething1(handler);

  /**
   * functions returning non-void assignable to function returning void
   */
  function doSomething2(): number {
    return 42;
  }

  function callMeMaybe(callback: () => void) {
    callback();
  }

  callMeMaybe(doSomething2);
}
