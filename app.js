const button = document.querySelector(".button");
const paragraph = document.querySelector(".text");
const affNumber = document.querySelector(".affNumber span");
const iconDice = document.querySelector(".fas");

button.addEventListener("click", () => {
  getRandomAdvice();
  iconDice.classList.add("rotate");
  setTimeout(() => {
    iconDice.classList.remove("rotate");
  }, "1000");
});

async function getRandomAdvice() {
  const resp = await fetch("https://api.adviceslip.com/advice");
  const data = await resp.json();

  paragraph.innerHTML = data.slip.advice;
  affNumber.innerHTML = data.slip.id;
}
