
interface Human {
    name : string;
    age : number;
    gender : string;
}

const person =  {
      name : "LeeJiSeok",
      age : 22,
      gender : "male"
};

const SayHi = (person : Human) :string =>{
  return (`HI ${person.name}, you are ${person.age} year old, you are ${person.gender}!`);
};

console.log(SayHi(person));

export {};