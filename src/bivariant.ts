// Dog and Cat are subtype of Animal
import { Animal, Dog, Cat } from "./bivariant.animal";

/**
 * ====== Contravariance explain ======
 */
const washAnimalMachine = (x: Animal) => {};
const washDogMachine = (dog: Dog) => {
  dog.woof();
};
const washCatMachine = (cat: Cat) => {
  cat.meow();
};

function washDog(machine: (x: Dog) => void) {}

// washDog(washCatMachine) // ERROR
washDog(washAnimalMachine);
washDog(washDogMachine);

function washAnimal(machine: (x: Animal) => void) {}

washAnimal(washCatMachine); // NOT safe, runtime error when wash dog
washAnimal(washAnimalMachine);
washAnimal(washDogMachine); // NOT safe, runtime error when wash cat

// conclusion: Contravariance
// washAnimalMachine is subtype of washDog

// but in ts, bivariance
// washDog is subtypeof washAnimalMachine

/**
 * ====== Covariance explain ======
 */

const AnimalFactory: () => Animal = () => {
  return {
    walk: () => {},
  };
};

const DogFactory: () => Dog = () => {
  return {
    walk: () => {},
    woof: () => {},
  };
};

const CatFactory: () => Cat = () => {
  return {
    walk: () => {},
    meow: () => {},
  };
};

function wantDog(factory: () => Dog) {}

wantDog(DogFactory);
// wantDog(AnimalFactory) // Obvious ERROR

function wantAnimal(factory: () => Animal) {}

wantAnimal(DogFactory);
wantAnimal(AnimalFactory);
wantAnimal(CatFactory);

// conclusion: Covariance
// DogFactory is subtype of AnimalFactory
