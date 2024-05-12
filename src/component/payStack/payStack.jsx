import { useState } from "react";
import { PaystackButton } from "react-paystack";
import "./payStack.scss"

const PayButton = ({ amount, email }) => {
    const publicKey = "pk_test_2c62de9a0e51de68f2421479b851e75f71efd0d7"
    const [paymentStatus,setPaymentStatus]=useState(null)

    const handlePaystackSuccessAction = (reference) => {
        setPaymentStatus("successful")

        console.log(paymentStatus)
        console.log(reference)
    }

    const componentProps = {
        reference:(new Date()).getTime().toString,
        email,
        amount,
        publicKey,
        text: "Place Order",
        onSuccess: (paymentStatus,) => handlePaystackSuccessAction(),
        onClose: ()=> alert("Payment canceled")
    }

    return <PaystackButton
        className="payButton"
        {...componentProps}
    />
}

export default PayButton