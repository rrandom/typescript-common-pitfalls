export interface Animal {
  walk(): void;
}
export interface Dog extends Animal {
  woof: () => void;
}
export interface Cat extends Animal {
  meow: () => void;
}

function trainDog(dog: Dog) {
  dog.woof();
}

function cloneAnimal(source: Animal, done: (result: Animal) => void): void {
  const clone = (source) =>
    Object.entries(source).reduce((p, [key, val]) => {
      p[key] = val;
      return p;
    }, {} as Animal);

  done(clone(source));
}

const cat: Cat = {
  walk: () => {},
  meow: () => {
    "meow";
  },
};

const dog: Dog = {
  walk: () => {},
  woof: () => {
    "wang wang wang";
  },
};

// runtime ERROR, complie time OK
cloneAnimal(cat, trainDog)

// OK
cloneAnimal(dog, trainDog);
