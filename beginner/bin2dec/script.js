const decimal = document.getElementById("box");
const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault;
  if (!decimal.value == 1 && 0) return;
  decimal.value = parseInt(decimal.value, 2);
});
