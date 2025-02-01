const numberButton = document.querySelector<HTMLButtonElement>("#number button");
const numberParagraph = document.querySelector<HTMLParagraphElement>("#number p");

const letterButton = document.querySelector<HTMLButtonElement>("#letter button");
const letterParagraph = document.querySelector<HTMLParagraphElement>("#letter p");

const getRandomNumber = (): number => Math.floor(Math.random() * 10);

const getRandomLetter = (): string => {
  const letters = "ABCDEFGHIJKLŁMNOPQRSTUVWXYZ";
  return letters[Math.floor(Math.random() * letters.length)];
};

numberButton?.addEventListener("click", () => {
  const randomNumber = getRandomNumber();
  if (numberParagraph) {
    numberParagraph.textContent = randomNumber.toString();
  }
});

letterButton?.addEventListener("click", () => {
  const randomLetter = getRandomLetter();
  if (letterParagraph) {
    letterParagraph.textContent = randomLetter;
  }
});
