const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

input.addEventListener("input", handleInputRange);

function handleInputRange() {
  text.style.fontSize = `${input.value}px`;
}