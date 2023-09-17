const DLogger = (constructor: Function) => {
  console.log('Logging');
};

const DWithTemplate = (template: string, elemId: string) => {
  return (constructor: any) => {
    const element = document.getElementById(elemId)!;
    const person = new constructor();

    if (element) {
      element.innerHTML = template;
      element.querySelector('h1')!.textContent = person.name;
    }
  };
};

// @DLogger
@DWithTemplate('<h1>Hello!</h1>', 'decorators-hook')
class DecoratedPerson {
  name = 'User';
  constructor() {
    console.log('Class inited');
  }
}

const person = new DecoratedPerson();
console.log(person);

//Decorator Factory
const DWrapper = (logString: string) => {
  return (constructor: Function) => console.log(logString);
};

@DWrapper('LOGGING PERSON 2')
class DecoratedPerson2 {
  constructor() {
    console.log('Class inited');
  }
}

const person2 = new DecoratedPerson2();
console.log(person2);
