import React from "react";
import Sidebar from "../sidebar/sidebar.component";

const Layout = ({ children }) => {
    return(
  <body className="vertical-layout">
        <div id="containerbar">
             <div className="leftbar">
                <Sidebar />
             </div>
             <div className="rightbar">
             {children}
             </div>
        </div>
</body>
 
);
}
export default Layout;