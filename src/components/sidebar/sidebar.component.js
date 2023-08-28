import React from "react";
import { Link } from 'react-router-dom';

const Sidebar = () =>{

    return(
        <div className="sidebar">
        
        <div className="logobar">
            <a href="index.html" className="logo logo-large"><img src="/assets/images/logo.svg" className="img-fluid" alt="logo" /></a>
            <a href="index.html" className="logo logo-small"><img src="/assets/images/small_logo.svg" className="img-fluid" alt="logo" /></a>
        </div>
        
        <div className="navigationbar">
            <ul className="vertical-menu">
                <li>
                    <Link to="/">
                      <img src="/assets/images/svg-icon/dashboard.svg" className="img-fluid" alt="dashboard" /><span>Dashboard</span>
                      </Link>
                </li>
                <li>
                    <a href="javaScript:void();">
                      <img src="/assets/images/svg-icon/dashboard.svg" className="img-fluid" alt="dashboard" /><span>Consuntancy</span>
                    </a>
                    <ul class="vertical-submenu">
                                <li>
                                <Link to="/consultancy/add">Add Info</Link>
                                    </li>
                                <li><a href="dashboard-ecommerce.html">View</a></li>
                            </ul>
                </li>
                <li>
                    <a href="javaScript:void();">
                      <img src="/assets/images/svg-icon/dashboard.svg" className="img-fluid" alt="dashboard" /><span>Settings</span>
                    </a>
                </li>
                <li>
                    <a href="javaScript:void();">
                      <img src="/assets/images/svg-icon/dashboard.svg" className="img-fluid" alt="dashboard" /><span>Privacy Policies</span>
                    </a>
                </li>
                                                          
            </ul>
        </div>     
    </div>
    );
}

export default Sidebar;