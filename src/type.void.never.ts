function voidFn() {
  console.log("This is my warning message");
}

type Void = ReturnType<typeof voidFn>;

function infiniteLoop(): never {
  while (true) {}
}

function error(message: string): never {
  throw new Error(message);
}

function fail() {
  return error("Something failed");
}

type Never = ReturnType<typeof fail>;
