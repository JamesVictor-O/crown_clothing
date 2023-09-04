
import Header from "../../component/Header/header"
import { Outlet } from "react-router-dom"


export default function Root({currentUser}) {
    

    return (
        <div>
            <Header currentUser={ currentUser} />
            <div>
                <Outlet/>
            </div>
        </div>
    )
} 