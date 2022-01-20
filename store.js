(function(){
  console.log("Hello from the testing Store script");
  console.log(LS);

  const quantitySelectors = document.querySelectorAll("div[data-component='line-item.quantity']");
  if (quantitySelectors.length > 0) {
    quantitySelectors.forEach((quantitySelector) => {
      quantitySelector.remove();
    })
  }


  const productShowQuantitySelector = document.querySelector("div[data-component='product.adding-amount']");
  if (productShowQuantitySelector) {
    productShowQuantitySelector.parentElement.remove();
  }
})();
