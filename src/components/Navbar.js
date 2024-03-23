import "./Navbar.css"
import { NavLink, Outlet } from "react-router-dom"
function Navbar(){
    return(
            <div className="navbar h-100">
                <h1 className="p-2">
                    <NavLink className="nav-link"  to=''>
                            DevHive
                    </NavLink>
                    </h1>
                <ul className="d-flex list-unstyled">
                    <li className="p-3 rounded">
                        Gallery</li>
                    <li className="p-3 rounded">Resources</li>
                    <li className="p-3 rounded">Mentorship</li>
                    <li className="p-3 rounded" >
                    <NavLink className="nav-link"  to='proceed'>
                            Sign-In/Login
                    </NavLink>
                        </li>
                </ul>
            </div>
    )
}
    
export default Navbar ;