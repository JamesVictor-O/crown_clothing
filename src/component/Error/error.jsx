import { useRouteError,Link } from "react-router-dom";
export default function ErrorPage() {
    const error = useRouteError();
    console.log(error)
    return (
        <div id="error-page">
            <h1>Oops</h1>
            <p>sorry, an unexpected error has occurred</p> 

            <p>GO back to <Link to="/">Home</Link></p>
        </div>
    )
}    