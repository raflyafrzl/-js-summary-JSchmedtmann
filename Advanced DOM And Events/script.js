"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

//Select, Create, And Delete Element with JS

//Selecting Elements

const header = document.querySelector(".header");
const allSection = document.querySelectorAll(".section");

//mengembalikan NodeList
console.log(allSection);

const allButtons = document.getElementsByTagName("button");
//mengembalikan HTMLCollections similar to (getelementbyclassname)
console.log(allButtons);

//Creating and inserting element

// .insertAdjacentHTML (easy way to create an element) //accept 2 parameter

const message = document.createElement("div");

//classList is used to manipulate class in DOM elements
message.classList.add("cookie-message");
message.innerHTML = `We use cookied for improved functionality and analytics.
 <button class="btn btn--close--cookie">Got it!</button>' 
`;
header.append(message); // there's another method called append() similar to prepend()

//delete elements

document
  .querySelector(".btn--close--cookie")
  .addEventListener("click", function () {
    message.remove();
  });
/*
//-----styles Lecturer

message.style.backgroundColor = "#37383d";
message.style.width = "105%";

// At default, we can't take out/log the out of non-inline styles. but we can overcome that problem
//Using getComputedStyle Function

// console.log(message.style.height); //nothing will happen/ the output will log nothing

//it's different when we use getComputedStyle

// console.log(getComputedStyle(message).height); // it will log the output, even if we do not specify its style.

message.style.height =
  Number.parseFloat(getComputedStyle(message).height) + 30 + "px";

//mengubah style property pada CSS(element :root)

// document.documentElement.style.setProperty("--color-primary", "orangered");

//----- Attributes
//getAttribute
//setAttribute
const logo = document.querySelector(".nav__logo");

// console.log(logo.className);
// console.log(logo.src);

*/

/////////////////////////////

const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.getElementById("section--1");

btnScrollTo.addEventListener("click", function (e) {
  //getBoundingClientRect() digunakan untuk mendapatkan penjelasan seperti letak, panjang, lebar dll
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);
  // window.scrollTo(s1coords.left, s1coords.top); // akan berantakan jika tidak mengclick dari view port paling atas, karena ini relative

  //easy way

  section1.scrollIntoView({ behavior: "smooth" });
});



//------ types of events and event handler


