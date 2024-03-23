import React from "react";
import { NavLink, Outlet } from "react-router-dom"
import Register from "./Register";
function Proceed(){
    return(
        <div className="h-100 d-flex flex-column justify-content-center">
            <div className="d-flex text-center text-white justify-content-center ">
                <NavLink className="nav-link mx-3"  to='register'>
                        Sign-In
                </NavLink>
                <NavLink className="nav-link mx-3"  to='login'>
                        Login
                </NavLink>
            </div>
            <div className="w-50 mx-auto">
                <Outlet/>
            </div>
        </div>
    )
}
export default Proceed ;