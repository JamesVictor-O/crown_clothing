import { useState } from "react";
import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import { createUserWithEmailAndPassword } from "firebase/auth";
export const SignUp = () => { 
    const [state, setState] = useState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword:"",
    })

    async function handleSubmit(event) {
        event.preventDefault();
        if (password != confirmPassword) {
            alert("password dont match")
            return
        }
        const newUser=createUserWithEmailAndPassword(auth,email,password)
        try {
            const { user } = await newUser;
            createUserProfileDocument(user,{displayName})
            console.log(user)
        } catch (err) {
            console.log(err)
        }
    }

   const handleChange = (event) => {
       const { name, value } = event.target;
       setState({...state,[name]:value})
    }
    const { displayName, email, password, confirmPassword } = state;
    return (
        <div className="sign-up">
            <h2 className="title">I do not have account</h2>
            <span>Sign up with email and password</span>
            <form  className="sign-up-form" onSubmit={handleSubmit}>
                <FormInput
                    name="displayName"
                    type="text"
                    handleChange={handleChange}
                    label="Display Name"
                    value={state.displayName}
                    required
                />
                <FormInput
                    name="email"
                    type="email"
                    handleChange={handleChange}
                    label="email"
                    value={state.email}
                    required
                />
                <FormInput
                    name="password"
                    type="password"
                    handleChange={handleChange}
                    label="Password"
                    value={state.password}
                    required 
                />
                <FormInput
                    name="confirmPassword"
                    type="password"
                    handleChange={handleChange}
                    label="Confirm Password"
                    value={state.confirmPassword}
                    required
                />

                <CustomButton type="submit">SIGN UP</CustomButton>
            </form>
       </div> 
    )
}