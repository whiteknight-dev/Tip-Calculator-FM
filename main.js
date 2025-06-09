const form = document.querySelector(".tip__calculator");
const inputBill = document.querySelector(".input__bill");
const inputPeople = document.querySelector(".input__people");
const tipInputs = document.querySelectorAll(".tip");
const inputCustom = document.querySelector(".tip__custom");
const resetButton = document.querySelector(".reset__button");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const bill = parseFloat(inputBill.value);
  const people = parseInt(inputPeople.value);
  let tipPercent = null;

  tipInputs.forEach((input) => {
    if (input.checked) {
      tipPercent = parseFloat(input.dataset.value);
    }
  });

  if (inputCustom.value.trim() !== "") {
    tipPercent = parseFloat(inputCustom.value.trim());
  }

  if (isNaN(bill) || bill <= 0 || isNaN(people) || people <= 0) {
    alert("Please enter valid values for bill and number of people.");
    return;
  }

  if (isNaN(tipPercent) || tipPercent < 0) {
    alert("Please select a tip percentage or enter a custom tip.");
    return;
  }

  const tipAmount = (bill * (tipPercent / 100)) / people;
  const totalAmount = bill / people + tipAmount;

  tipAmountDisplay.textContent = `$${tipAmount.toFixed(2)}`;
  totalDisplay.textContent = `$${totalAmount.toFixed(2)}`;
  resetButton.disabled = false;
});

resetButton.addEventListener("click", function () {
  form.reset();
  tipAmountDisplay.textContent = "$0.00";
  totalDisplay.textContent = "$0.00";
  resetButton.disabled = true;
});
