const inputEl = document.querySelector("#validation-input");
const requiredLength = Number(inputEl.dataset.length);

inputEl.addEventListener("blur", () => {
  const inputValue = inputEl.value;
  const currentLength = inputValue.length;

  if (currentLength === requiredLength) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
});