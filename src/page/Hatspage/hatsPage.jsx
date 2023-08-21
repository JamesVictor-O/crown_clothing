import "./hatspage.scss";
import { Outlet,useNavigate } from "react-router-dom";

export default function HatsPage() {
    let navigate=useNavigate()
    return (
        <div>
            <h2 onClick={() => {
                navigate(`hataa`)
            }}>this is harts page</h2>
            <div>
                <Outlet/>
            </div>
        </div>
    )
}