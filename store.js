(function(){
  console.log("Hello from the testing Store script");
  console.log(LS);

  // TODO we should not hardcode this
  const subscribeableVariantsIds = [423043645, 423043646, 423043647]

  // This one is about hiding the `Agregar al carrito` button at the product show
  const cartVariants = LS.cart.items.map((item) => {
    return {
      "id": item.variant_id,
      "quantity": item.quantity
    }
  })

  const subscribeableVariantsInCart = cartVariants.filter((variant) => {
    return subscribeableVariantsIds.includes(variant.id)
  })
  const nonSubscribeableVariantsInCart = cartVariants.filter((variant) => {
    return !subscribeableVariantsIds.includes(variant.id)
  })


  const validBoxfulCart = subscribeableVariantsInCart.length === 1 &&
    nonSubscribeableVariantsInCart.length === 0 &&
    subscribeableVariantsInCart[0].quantity === 1
  const validNonBoxfulCart = subscribeableVariantsInCart.length === 0
  const validCart = validBoxfulCart || validNonBoxfulCart

  const cartSubmit = document.querySelector("form[data-store='cart-form'] input[type='submit']")
  if (!validCart) {
    cartSubmit.disabled = true
    cartSubmit.insertAdjacentHTML("beforebegin", "<span>Este carrito no es válido. Por favor asegúrese de que contenga solo un producto suscribible o uno o más productos no suscribibles.</span>")
  }

  // TODO Scenarios to handle
  // cart is empty
  // cart has a subscribeable
  // cart has a non subscribeable
  // cart is mixed
  // cart has more than one subscribeable
  // if (subscribeableVariantsInCart.length === 0 && ) {
  //   const productFormSubmits = document.querySelectorAll("form[data-store^='product-form-'] input[type='submit']");
  //   if (productFormSubmits.length > 0) {
  //     productFormSubmits.forEach((productFormSubmit) => {
  //       productFormSubmit.remove();
  //     })
  //   }
  // }

  // This one corresponds to the selectors on the `Carrito de compras` side
  // panel
  // TODO we have to handle the removal of this selectors when a subscribeable variant is added
  // TODO This should only happen for subscribeable variants.
  // const quantitySelectors = document.querySelectorAll("div[data-component='line-item.quantity']");
  // if (quantitySelectors.length > 0) {
  //   quantitySelectors.forEach((quantitySelector) => {
  //     quantitySelector.remove();
  //   })
  // }
  // const productShowQuantitySelector = document.querySelector("div[data-component='product.adding-amount']");
  // if (productShowQuantitySelector) {
  //   productShowQuantitySelector.parentElement.remove();
  // }
})();
