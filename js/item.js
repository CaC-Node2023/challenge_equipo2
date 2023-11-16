const itemQtyValue = document.getElementById("itemQtyValue");
const increaseItemButton = document.getElementById("increaseItem");
const decreaseItemButton = document.getElementById("decreaseItem");
const add2CartBtn = document.getElementById("addCart");

let itemCount = 1;

increaseItemButton.addEventListener("click", function (event) {
  event.preventDefault();
  incrementItemQuantity();
});

decreaseItemButton.addEventListener("click", function (event) {
  event.preventDefault();
  decrementItemQuantity();
});

add2CartBtn.addEventListener("click", function (event) {
  event.preventDefault();
});

function incrementItemQuantity() {
  itemCount++;
  itemQtyValue.textContent = itemCount;
}

function decrementItemQuantity() {
  if (itemCount > 1) {
    itemCount--;
    itemQtyValue.textContent = itemCount;
  }
}




