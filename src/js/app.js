"use strict";
const numberButton = document.querySelector("#number button");
const numberParagraph = document.querySelector("#number p");
const letterButton = document.querySelector("#letter button");
const letterParagraph = document.querySelector("#letter p");
const getRandomNumber = () => Math.floor(Math.random() * 10);
const getRandomLetter = () => {
    const letters = "ABCDEFGHIJKLŁMNOPQRSTUVWXYZ";
    return letters[Math.floor(Math.random() * letters.length)];
};
numberButton === null || numberButton === void 0 ? void 0 : numberButton.addEventListener("click", () => {
    const randomNumber = getRandomNumber();
    if (numberParagraph) {
        numberParagraph.textContent = randomNumber.toString();
    }
});
letterButton === null || letterButton === void 0 ? void 0 : letterButton.addEventListener("click", () => {
    const randomLetter = getRandomLetter();
    if (letterParagraph) {
        letterParagraph.textContent = randomLetter;
    }
});
