"use strict";
//---- Optional 3 (A) ----\\
const addBtn = document.querySelector("#addBtn");
const findBtn = document.querySelector("#findBtn");
const emailInput = document.querySelector("#mailBox");
const mailList = document.querySelector(".mailList");

let emailArr = [];
let foundEmails = [];

//---- Optional 3 (B) ----\\

const validRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

addBtn.addEventListener("click", () => {
  if (emailInput.value.match(validRegex)) {
    emailArr.push(emailInput.value);
    mailList.innerHTML += `\n<span> ${emailInput.value}</span>`;
    console.log(emailArr);
  } else {
    alert("Invalid Email!");
  }
});

//---- Optional 3 (C) ----\\

findBtn.addEventListener("click", () => {
  if (emailInput.value.match(validRegex)) {
    if (emailArr.includes(emailInput.value)) {
      console.log("Email exist");
      foundEmails.push(emailInput.value);
      console.log(foundEmails);
    } else {
      console.log("Not found");
    }
  } else {
    alert("Invalid Email!");
  }
});
