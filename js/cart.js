const qtyInput = document.getElementById("cart-item1__qty");
const qtyInput_2 = document.getElementById("cart-item2__qty");

const incrementButton = document.getElementById("increment_1");
const decrementButton = document.getElementById("decrement_1");
const incrementButton_2 = document.getElementById("increment_2");
const decrementButton_2 = document.getElementById("decrement_2");

const summaryQty = document.getElementById("summary__qty")


incrementButton.addEventListener("click", function (event) {
  event.preventDefault();
  incrementQuantity(qtyInput);
  updateCart();
});

decrementButton.addEventListener("click", function (event) {
  event.preventDefault();
  decrementQuantity(qtyInput);
  updateCart();
});

incrementButton_2.addEventListener("click", function (event) {
  event.preventDefault();
  incrementQuantity(qtyInput_2);
  updateCart();
});

decrementButton_2.addEventListener("click", function (event) {
  event.preventDefault();
  decrementQuantity(qtyInput_2);
  updateCart();
});

function incrementQuantity(inputElement) {
  const currentValue = parseInt(inputElement.value, 10);
  inputElement.value = currentValue + 1;
}

function decrementQuantity(inputElement) {
  const currentValue = parseInt(inputElement.value, 10);
  if (currentValue > 1) {
    inputElement.value = currentValue - 1;
  }
}

function updateCart() {
    const qtyValue1 = parseInt(qtyInput.value, 10);
    const qtyValue2 = parseInt(qtyInput_2.value, 10);
    const totalQty = qtyValue1 + qtyValue2;
    summaryQty.textContent = totalQty;
  }
  