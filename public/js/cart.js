const qtyInput = document.getElementById("cart-item1__qty");
const qtyInput_2 = document.getElementById("cart-item2__qty");

const incrementButton = document.getElementById("increment_1");
const decrementButton = document.getElementById("decrement_1");
const incrementButton_2 = document.getElementById("increment_2");
const decrementButton_2 = document.getElementById("decrement_2");

const summaryQty = document.getElementById("summary__qty");
const cartItem1QtyPrice = document.getElementById("cart-item1__qty-price");
const cartItem2QtyPrice = document.getElementById("cart-item2__qty-price");
const summarySubtotal = document.getElementById("summary__subtotal");

const summaryShipmentElement = document.getElementById('summary__shipment');
const summaryShipmentText = summaryShipmentElement.textContent;
const summaryShipment = parseFloat(summaryShipmentText.replace('$', ''));

const summaryTotal = document.getElementById("summary__total");

const ItemPrice = 1799.99;

incrementButton.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("se ejecuta el evento")
  incrementQuantity(qtyInput, cartItem1QtyPrice);
  updateCart();
});

decrementButton.addEventListener("click", function (event) {
  event.preventDefault();
  decrementQuantity(qtyInput, cartItem1QtyPrice);
  updateCart();
});

incrementButton_2.addEventListener("click", function (event) {
  event.preventDefault();
  incrementQuantity(qtyInput_2, cartItem2QtyPrice);
  updateCart();
});

decrementButton_2.addEventListener("click", function (event) {
  event.preventDefault();
  decrementQuantity(qtyInput_2, cartItem2QtyPrice);
  updateCart();
});

function incrementQuantity(inputElement, qtyPriceElement) {
  const currentValue = parseInt(inputElement.value, 10);
  inputElement.value = currentValue + 1;
  updateQtyPrice(inputElement, qtyPriceElement);
}

function decrementQuantity(inputElement, qtyPriceElement) {
  const currentValue = parseInt(inputElement.value, 10);
  if (currentValue > 1) {
    inputElement.value = currentValue - 1;
    updateQtyPrice(inputElement, qtyPriceElement);
  }
}

function updateQtyPrice(inputElement, qtyPriceElement) {
  const qtyValue = parseInt(inputElement.value, 10);
  const newQtyPrice = qtyValue * ItemPrice;
  qtyPriceElement.textContent = `$ ${newQtyPrice.toFixed(2)}`;
}

function updateCart() {
  const qtyValue1 = parseInt(qtyInput.value, 10);
  const qtyValue2 = parseInt(qtyInput_2.value, 10);
  const subtotal1 = qtyValue1 * ItemPrice;
  const subtotal2 = qtyValue2 * ItemPrice;
  const totalQty = qtyValue1 + qtyValue2;
  const totalSubtotal = subtotal1 + subtotal2;
  const totalTotal = totalSubtotal + summaryShipment;

  if (summaryQty) {
    summaryQty.textContent = totalQty;
  }

  if (summarySubtotal) {
    summarySubtotal.textContent = `$ ${totalSubtotal.toFixed(2)}`;
  }

  if (summaryTotal) {
    summaryTotal.textContent = `$ ${totalTotal.toFixed(2)}`;
  }
}
