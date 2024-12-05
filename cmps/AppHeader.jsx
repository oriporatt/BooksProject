const { Link, NavLink } = ReactRouterDOM

export function AppHeader() {

    return (
        <header className="app-header full main-layout">
            <section className="header-container">
                
                <NavLink to="/home"><h1>MyBooks App</h1></NavLink>
                
                <nav className="app-nav app-header-link">
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/book" >Books</NavLink>
                </nav>
            </section>
        </header>
    )
}
