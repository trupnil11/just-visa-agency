import React from "react";
const Breadcrumbbar = () => {

    return(
        <div className="breadcrumbbar">
        <div className="row align-items-center">
            <div className="col-md-8 col-lg-8">
                <h4 className="page-title">Dashboard</h4>
                <div className="breadcrumb-list">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Analytics</li>
                    </ol>
                </div>
            </div>
            <div className="col-md-4 col-lg-4">
                <div className="widgetbar">
                    <button className="btn btn-primary-rgba"><i className="feather icon-plus mr-2"></i>Actions</button>
                </div>                        
            </div>
        </div>          
    </div>
    );
}
export default Breadcrumbbar;