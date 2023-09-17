interface IObj1 {
  name: string;
  age: number;
}

interface IObj2 {
  hobbies: string[];
}

const merge = <T extends object, U extends object>(obj1: T, obj2: U) => {
  return Object.assign(obj1, obj2);
};

const obj1: IObj1 = { name: 'User', age: 20 };
const obj2: IObj2 = { hobbies: ['Guitar', 'Eating'] };

//Result will be IObj1 & IObj2
console.log(merge(obj1, obj2));

//keyof
const extractAndConvert = <T extends object, U extends keyof T>(obj: T, key: U) => {
  return obj[key];
};

console.log(extractAndConvert({ name: 'User' }, 'name'));

//Classes
class DataStorage<T> {
  private data: T[];

  set setData(value: T[]) {
    this.data = value;
  }

  get getData() {
    return this.data;
  }
}

const stringOrNumberStorage = new DataStorage<string | number>();
const booleanStorage = new DataStorage<boolean>();

stringOrNumberStorage.setData = ['User', 20];
console.log(stringOrNumberStorage.getData);

booleanStorage.setData = [true, false];
console.log(booleanStorage.getData);

//Partial
interface IGoal {
  title: string;
  description: string;
  date: string;
}
const createGoal = (title: string, description: string, date: string): IGoal => {
  let result: Partial<IGoal> = {};
  result.title = title;
  result.date = date;
  result.description = description;
  return result as IGoal;
};

//Readonly
const names: Readonly<string[]> = ['User', 'User0'];
// names.push('User1');
