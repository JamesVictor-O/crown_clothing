import SignIn from "../../component/SignIn/sign_In"
import { SignUp } from "../../component/SignUp/signUp"
import "./signIn_out.scss"
const SignInandOut = () => (
    <div className="sign-in-out">
        <SignIn />
        <SignUp/>
    </div>
)

export default SignInandOut