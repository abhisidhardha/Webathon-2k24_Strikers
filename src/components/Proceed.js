import React from "react";
import { NavLink, Outlet } from "react-router-dom"
import Register from "./Register";
function Proceed(){
    return(
        <div className="vh-100 d-flex w-100 flex-column ">
            <div className="d-flex  text-center mx-auto justify-content-center w-50">
                <NavLink className="nav-link mx-3 text-white bg-success rounded-2 w-25 p-3 mt-5"  to='register'>
                        Sign-In
                </NavLink>
                <NavLink className="nav-link mx-3 text-white bg-success rounded-2 w-25 p-3 mt-5"  to='login'>
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