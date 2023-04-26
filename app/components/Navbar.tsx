import { NavLink } from "@remix-run/react"

function Navbar() {
    return (
        <div className="navbar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/notes">Notes</NavLink>
        </div>
    )
}

export default Navbar