import { NavLink,Outlet } from "react-router-dom"
export default function RootLayout() {
    return (
        <div className="root-layout">
             <header>
                    <nav>
                        <h1>jobarouter</h1>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="about">About</NavLink>
                        <NavLink to="contact">Contact</NavLink>
                        <NavLink to="contact/:contactId">Contact SubLink</NavLink>
                    </nav>
            </header>
            <main>
                <Outlet/> 
            </main>
        </div>
    )
}