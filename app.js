const button = document.querySelector(".button");
const paragraph = document.querySelector(".text");
const affNumber = document.querySelector(".affNumber span");

button.addEventListener("click", () => {
  getRandomAdvice();
});

async function getRandomAdvice() {
  const resp = await fetch("https://api.adviceslip.com/advice");
  const data = await resp.json();

  paragraph.innerHTML = data.slip.advice;
  affNumber.innerHTML = data.slip.id;
  console.log(data);
}
