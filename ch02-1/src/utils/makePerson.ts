let MAX_AGE = 100;

interface IPerson {
  name: string;
  age: number;
}

class Persion implements IPerson {
  constructor(public name: string, public age: number) {}
}

function makeRandomNumber(max: number = MAX_AGE): number {
  return Math.ceil(Math.random() * max);
}

const makePerson = (name: string, age: number = makeRandomNumber()) => ({
  name,
  age,
});
