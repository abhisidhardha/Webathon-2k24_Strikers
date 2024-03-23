import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.js";
import Footer from "./Footer.js"
import "./RootLayout.css"
function RootLayout(){
    return(
        <div className="">
            <div className="fixed-top vh-30">
                 <Navbar/>
            </div>
            <div className="vh-95">
                <Outlet/>
            </div>
            <div className="">
                <Footer/>
            </div>
        </div>
    )
}
export default RootLayout ;