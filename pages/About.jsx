const { useState, useEffect } = React
const { Outlet, Link, NavLink } = ReactRouterDOM


export function About() {

    return (
        <section className="about">
            <h2>About My books..</h2>
            <p>Our story is to serve people that loves Books</p>
            <nav>
                <NavLink to="/about/team">About Team</NavLink>
                <NavLink to="/about/vision">About Goal</NavLink>
            </nav>
            <Outlet />
       </section>
       
    )
}

