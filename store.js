(function(){
  console.log("Hello from the testing Store script");
  console.log(LS);

  // const subscribeableVariantsIds = [423043645, 423043646, 423043647];
  // const cartVariantsIds = LS.cart.items.map(item => item.variant_id)

  // subscribeableVariantsIds.some(subscribeableVariantsId => cartVariantsIds.includes(subscribeableVariantsId))

  // const productFormSubmits = document.querySelectorAll("form[data-store^='product-form-'] input[type='submit']");

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
