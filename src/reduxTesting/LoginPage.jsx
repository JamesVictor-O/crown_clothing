import { useState } from "react"
import { NavLink } from "react-router-dom"
import { loginAction, existAction } from "./redux/login.action"
import { useSelector, useDispatch } from "react-redux"
import { changeUser,logOut,addItems } from "./redux/slices/userSlice"


const LoginPage = ({ submit, exist, status }) => {

    const dispatch= useDispatch()
     const {email,items}=useSelector((state) => state.user)
     const {uid}=useSelector((state) => state.admin)
    const [user, setUser] = useState("")
    
     const handleChangeEmail = () => {
         dispatch(changeUser(user))
         setUser("")
         console.log(items)
     }
    const handleExist = () => {
         
         dispatch(logOut())
        setUser("")
        
    }
    const handleNameAdding = () => {
        dispatch(addItems(user))
        setUser("")
    }
    return (
        <div>
            <h2>{ email }</h2>
            <NavLink to={"/mainpage"} className="mr-2">main page</NavLink>
            <input type="text" value={user} onChange={(e) => {
                setUser(e.target.value)
            }}/>
            <button onClick={handleChangeEmail}>Login page</button>
            <button onClick={handleExist}>admin</button>
            <button onClick={handleNameAdding}>addUsers</button>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    submit: user => dispatch(loginAction(user)),
    exist:status => dispatch(existAction(status))
})
const mapStateToProps = state => ({
    status:state.user.status
})
export default LoginPage