import { NavLink } from "react-router-dom"

export function AppHeader() {

    return (
        <header className="app-header full main-layout">
            <section className="wrapper">
                <div className="logo">METFLIX</div>
                <nav>
                    <NavLink exact to="/" >Home</NavLink>
                    <NavLink to="/watcher" >Watcher</NavLink>
                    <NavLink to="/animal" >Animal</NavLink>
                    <NavLink to="/clock" >Clock</NavLink>
                </nav>
            </section>
        </header>
    )
}