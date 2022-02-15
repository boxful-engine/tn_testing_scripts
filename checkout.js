(function(){
  console.log("Hello from the testing Checkout script!");
  console.log(Checkout);

  if (type_of(Checkout) !== undefined) {
    console.log(Checkout.getData("order.cart.lineItems"));

    const subscribeableVariantsIds = [423043645, 423043646, 423043647];
    const cartVariantsIds = LS.cart.items.map(item => item.variant_id)

    const boxfulCart = subscribeableVariantsIds.some(subscribeableVariantsId => cartVariantsIds.includes(subscribeableVariantsId))
    console.log(boxfulCart)

  }

  // const productFormSubmits = document.querySelectorAll("form[data-store^='product-form-'] input[type='submit']");

  // const paymentProvidersInterval = setInterval(() => {
  //   if (typeof(MP_DEVICE_SESSION_ID) !== "undefined") {
  //     this.setState({ sessionId: MP_DEVICE_SESSION_ID })
  //     if (this.state.identificationRequired) {
  //       MercadopagoHandler.getIdentificationTypes();
  //     }
  //     clearInterval(timer)
  //   }
  // }, 3000);
})();
