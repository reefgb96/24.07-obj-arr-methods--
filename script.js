"use strict";

let animalArr = [
  {
    name: "dog",
    age: 2,
    numOfLegs: 4,
  },
  {
    name: "cat",
    age: 5,
    numOfLegs: 4,
  },
  {
    name: "snake",
    age: 12,
    numOfLegs: 0,
  },
  {
    name: "kangaroo",
    age: 8,
    numOfLegs: 2,
  },
];

//----- Task 1 (A) -----\\

let moreThenTwoLegsArr = [];
moreThenTwoLegsArr = animalArr.filter((item) => item.numOfLegs > 2);
console.log("moreThenTwoLegsArr: ", ...moreThenTwoLegsArr);

//----- Task 1 (B) -----\\

let findDog = animalArr.find((item) => item.name === "dog");
console.log("findDog: ", findDog);

//----- Task 1 (C) -----\\

let chernobylArr = animalArr.map((item) => (item.numOfLegs += 2));
console.log("chernobylArr: ", chernobylArr);

//----- Task 1 (D) -----\\
let sortedArrByLegs = animalArr.sort((item) => item.numOfLegs);
console.log("sortedArrByLegs: ", sortedArrByLegs); //Everyone has more legs then usual because of Task 1 (C).

//----- optional 2 -----\\

let container = document.querySelector("#container");

container.innerHTML = `<span class="index" id="index-row-col">x</span>`;

for (let i = 1; i < 11; i++) {
  container.innerHTML += `<span class="index" id="index-row-col-v${i}">${i}</span>`;
}

for (let i = 1; i < 11; i++) {
  container.innerHTML += `<span class="index" id="index-row-col-h${i}">${i}</span>`;
  for (let j = 1; j < 11; j++) {
    container.innerHTML += `<span id="span${i * j}">${i * j}</span>`;
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

const mouseOverFn = function (v, h) {};

// let numIndex = document.querySelectorAll(`#span`);

// numIndex.addEventListener("mouseenter", () => {
//   numIndex.style.backgroundColor = "red";
//   // mouseover === true ? (numIndex.style.backgroundColor = "red") : null;
// });

// numIndex.addEventListener("mouseleave", () => {
//   numIndex.style.backgroundColor = "";
//   // mouseover === true ? (numIndex.style.backgroundColor = "red") : null;
// });
