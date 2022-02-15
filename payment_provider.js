LoadCheckoutPaymentContext(function(Checkout, PaymentOptions) {
  console.log("hello from LoadCheckoutPaymentContext")
  console.log(Checkout);
  console.log(LS);

  if (typeof(Checkout) !== "undefined") {
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

	// Create a new instance of external Payment Option and set its properties.
	var TestAppBoxfulExternalPaymentOption = PaymentOptions.ExternalPayment({
		// Set the option"s unique id as it is configured on the Payment Provider so Checkout can relate them.
		id: "test_app_boxful_redirect",

    // This parameter renders the billing information form and requires the information to the consumer.
		fields: {
			billing_address: false
		},

		// This function handles the order submission event.
		onSubmit: function(callback) {

			// Gather the minimum required information. You should include all the relevant data here.
			let testAppBoxfulRelevantData = {
        storeId: Checkout.getData("storeId"),
				lineItems: Checkout.getData("order.cart.lineItems"),
				shippingAddress: Checkout.getData("order.shippingAddress"),
				contact: Checkout.getData("order.contact")
			};

			// Use the Checkout HTTP library to post a request to our server and fetch the redirect URL.
			Checkout.http
				.post("http://app.lvh.me:5000/tiendanube/checkouts", {
					data: testAppBoxfulRelevantData
				})
				.then(function(responseBody) {
					// Once you get the redirect URL, invoke the callback by passing it as argument.
					if (responseBody.data.success) {
						callback({
							success: true,
							redirect: responseBody.data.redirect_url,
							extraAuthorize: true // Legacy paameter, but currently required with `true` value. Will be deprecrated soon.
						});
					} else {
						callback({
							success: false,
							error_code: responseBody.data.error_code
						});
					}
				})
				.catch(function(error) {
					// Handle a potential error in the HTTP request.

					callback({
						success: false,
						error_code: "unknown_error"
					});
				});
		}
	});

	// Finally, add the Payment Option to the Checkout object so it can be render according to the configuration set on the Payment Provider.
	Checkout.addPaymentOption(TestAppBoxfulExternalPaymentOption);
});
