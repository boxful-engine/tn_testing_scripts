(function(){
  console.log("Hello from the testing Checkout script!");
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

  const checkoutSubmit = document.querySelector("form [type='submit']")
  if (!validCart) {
    checkoutSubmit.disabled = true
    checkoutSubmit.insertAdjacentHTML("beforebegin", "<p>Este carrito no es válido. Por favor asegúrese de que contenga solo un producto suscribible o uno o más productos no suscribibles.</p>")
  }
})();
