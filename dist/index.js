"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const person = {
    name: "LeeJiSeok",
    age: 22,
    gender: "male"
};
const SayHi = (person) => {
    return (`HI ${person.name}, you are ${person.age} year old, you are ${person.gender}!`);
};
console.log(SayHi(person));
//# sourceMappingURL=index.js.map