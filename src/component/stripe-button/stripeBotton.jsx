import StripeCheckout from "react-stripe-checkout";

const StripePaymentButton = ({amount,email}) => {
  console.log(import.meta.env)
  // console.log(import.meta.env.VITE_PUBLICKEY)
    const publishableKey = import.meta.env.VITE_PUBLICKEY;
  // const publishableKey = "pk_test_51Opjl3EWhDR14ahaNv1m209WoZU63aN44bL8eKWYGyACVDvIDqseSryoiRIKykTP9gHgzd7ZdtUfi26OcxCkraEo00iZMgSTuZ"
  console.log(publishableKey)
    const OnToken = token => {
        console.log(token)
    }
    const config = {
        label: "Pay Now",
        name: "CRWN CLothing Ltd",
        image:"https://svgshare.com/i/CUz.svg",
        email,
        description:`Your total is $${amount}`,
        panelLabel: "Pay Now",
        stripeKey: publishableKey,
        token: {OnToken},
    }

    return(
        <StripeCheckout
        billingAddress
        shippingAddress
          {...config} 
        />
    )
}
export default StripePaymentButton