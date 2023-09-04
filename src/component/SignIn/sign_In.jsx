import React from "react"
import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";
import "./sign_in.scss"
import { ReactDOM } from "react"
import { signInWithGoogle, auth} from "../../firebase/firebase.utils";
import { signInWithEmailAndPassword } from "firebase/auth";
class SignIn extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password:""
        }
    }
   
    handleSubmit = async event => {
        event.preventDefault();
         const {email, password}= this.state;
        try {
            await signInWithEmailAndPassword(auth,email,password)
            this.setState({ email: "", password: "" })
        } catch (error) {
            console.log(error)
        }
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