import { NavLink } from "react-router-dom"
import { connect } from "react-redux"

const MainPage = ({ currentUser, status }) => {
    console.log(status)
     
    return (
        <div>
            <NavLink to="/" className="mr-2">login</NavLink>
            
                {status ? <p>Hey welcome to the main page {currentUser}</p> : <p>Good buy from the main page {currentUser}</p>  }

        </div>
    )
}
const mapStateToProps = (state) => ({
    currentUser: state.user.current,
    status:state.user.status
})
export default connect(mapStateToProps,null)(MainPage)