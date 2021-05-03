const name = "LeeJiSeok",
      age = 22,
      gender = "male";

const SayHi = (name:string,age:number,gender:string):string =>{
  return (`HI ${name}, you are ${age} year old, you are ${gender}!`);
};

console.log(SayHi(name,age,gender));

export {};