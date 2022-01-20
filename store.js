(function(){
  console.log("Hello from the testing Store script");
  const quantitySelector = document.querySelector("div[data-component='line-item.quantity']");
  quantitySelector.remove();
  console.log(LS.cart)
})();
