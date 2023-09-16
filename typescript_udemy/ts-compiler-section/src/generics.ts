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
