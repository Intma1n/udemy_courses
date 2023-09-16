//TODO: CLASSES
class Department {
  constructor(private name: string, private id?: string) {}

  public sayHello(this: Department) {
    return `Hello, ${this.name}`;
  }
}

const department = new Department('Obiznanyi');

interface IOptional {
  footSize?: string;
}

interface IPerson extends IOptional {
  name: string;
  readonly favoriteColor: string;
  greet(phrase: string): string;
}

class Person implements IPerson {
  private static instance: Person;
  public name: string;
  public readonly favoriteColor: string;

  footSize?: string;
  private constructor(name: string, favoriteColor: string, footSize?: string) {
    this.name = name;
    this.favoriteColor = favoriteColor;
    this.footSize = footSize;
  }

  get getFootSize() {
    if (this.footSize) return this.footSize;
    else return 'No legs :(';
  }

  set setFootSize(value: string) {
    this.footSize = value;
  }

  static getInstance() {
    if (!this.instance) return new Person('User', 'Blue');
    return this.instance;
  }

  greet(phrase: string): string {
    return `Hi, ${this.name}`;
  }
}

const personInstance = Person.getInstance();

personInstance.setFootSize = '900';
console.log(personInstance);
console.log(personInstance.greet('Hi'));
console.log(department.sayHello());

//TODO: FUNCTIONS
interface ICompareFunction {
  (v1: number, v2: number): boolean;
}

//Using interface
const compareFunction: ICompareFunction = (value1: number, value2: number) =>
  value1 === value2;

//Using type
type TAddFunction = (v1: number, v2: number) => number;

const addFunction: TAddFunction = (value1: number, value2: number) => value1 + value2;

//TODO: Type guards

interface IBird {
  type: 'bird';
  flyingSpeed: string;
}

interface IHorse {
  type: 'horse';
  runningSpeed: string;
}

type TAnimal = IBird | IHorse;

const getSpeed = (animal: TAnimal) => {
  switch (animal.type) {
    case 'bird':
      return animal.flyingSpeed;
    case 'horse':
      return animal.runningSpeed;
  }
};

const animal: IBird = { type: 'bird', flyingSpeed: '10000' };

console.log(getSpeed(animal));

//Classes type guards

class Ship {
  getShipSize() {
    return 'Ship size';
  }
}

class Airplane {
  getAirplaneSize() {
    return 'Airplane size';
  }
}

type TTransport = Ship | Airplane;

const getSizeOfTransport = (transport: TTransport) => {
  if (transport instanceof Ship) return transport.getShipSize();
  else return transport.getAirplaneSize();
};

const transport = new Ship();

console.log(getSizeOfTransport(transport));

//Type Casting
const userInputElement = <HTMLInputElement>document.getElementById('input-user')!;

userInputElement.value = 'User';
console.log(userInputElement);

//or

if (userInputElement) {
  (userInputElement as HTMLInputElement).value = 'Hi, User!';
}

//Functions Overload
type TCombinable = string | number;
type TAdd = (v1: TCombinable, v2: TCombinable) => TCombinable;

function add(v1: number, v2: number): number;
function add(v1: string, v2: string): string;
function add(v1: TCombinable, v2: TCombinable): TCombinable {
  if (typeof v1 === 'string' || typeof v2 === 'string') {
    return v1.toString() + v2.toString();
  }
  return v1 + v2;
}

const result = add('User', 'Name');
result.split(' ');

//Optional Chaining
const data = {
  id: '1',
  name: 'User',
  job: { position: 'developer', salary: 10000 },
};

console.log(data?.job?.salary);
