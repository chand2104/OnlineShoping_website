import React from "react";
import "./Navbar.css";
import Sign from "./Sign";

const Navbar = ({size , setShow}) => {
    return(
        <>
        
           <nav className="main-nav">
           {/* 1st part navbar */}
                <div className="logo">
                    <h2 onClick={()=>setShow(true)}>
                    <span>O</span>nline
                    <span>S</span>hoppping
                    </h2>
                </div>
        
            {/* 2st part navbar */}
            <div className="menu-side">
                <ul>
                    <li className="bag"  onClick={()=>setShow(false)}>
                        <i className="bag-icon"> 🧺</i> 
                        <span className="icon_bedgs">{size}</span>
                    </li>
                    <li className="btn"><a href=<Sign/> target="_blank" >Sign in</a></li>  
                </ul>
            </div>

           </nav>
        </>
    );
};

export default Navbar;