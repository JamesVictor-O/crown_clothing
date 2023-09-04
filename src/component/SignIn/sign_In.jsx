import React from "react"
import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";
import "./sign_in.scss"
import { ReactDOM } from "react"
import { signInWithGoogle } from "../../firebase/firebase.utils";
class SignIn extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password:""
        }
    }
   
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ email: "", password: "" })
        
        console.log(this.state)
     }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({[name]:value})
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email"
                        type="email"
                        handleChange={this.handleChange}
                        label='email'
                        value={this.state.email}
                        required
                    />
                    <FormInput
                        name="password"
                        type="password"
                        handleChange={this.handleChange}
                        label='password'
                        value={this.state.password}
                        required
                    />

                    <div className="buttons">
                         <CustomButton type='submit'>sign in</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>sign in with google</CustomButton>
                   </div>
                </form> 
            </div>
        )
    }
}

export default SignIn