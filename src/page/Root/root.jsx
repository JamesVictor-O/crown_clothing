import Header from "../../component/Header/header"
import { Outlet } from "react-router-dom"
export default function Root() {
    return (
        <div>
            <Header />
            <div>
                <Outlet/>
            </div>
        </div>
    )
}