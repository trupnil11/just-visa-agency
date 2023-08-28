import React from "react";
import { useLocation } from 'react-router-dom';
import Sidebar from "../sidebar/sidebar.component";
import Topbar from "../topbar/Topbar.component"
import Breadcrumbbar from "../breadcrumbbar/Breadcrumbbar.component";
import Contentbar from "../contentbar/contenetbar.component";
import Footer from "../footer/Footer.component";

const Layout = ({ children }) => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  const isRegistrationPage = location.pathname === "/registration";

  if (isLoginPage || isRegistrationPage) {
    return (
      <body className="vertical-layout">
         <div id="containerbar" className="containerbar authenticate-bg">
        {children}
        </div>
      </body>
    );
  }

  return (
    <body className="vertical-layout">
      <div id="containerbar">
        <div className="leftbar">
          <Sidebar />
        </div>
        <div className="rightbar">
          <Topbar />
          <Breadcrumbbar />
          <div className="contentbar">
            {children}
          </div>
          <Footer />
        </div>
      </div>
    </body>
  );
}

export default Layout;
