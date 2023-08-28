import React from "react";

const Homepage = () => {

    return (
        <section>
             <div className="row">
                    <div className="col-lg-12 col-xl-6">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card m-b-30">
                                    <div className="card-header">                                
                                        <div className="row align-items-center">
                                            <div className="col-9">
                                                <h5 className="card-title mb-0">Revenue Statistics</h5>
                                            </div>
                                            <div className="col-3">
                                                <div className="dropdown">
                                                    <button className="btn btn-link p-0 font-18 float-right" type="button" id="widgetRevenue" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="feather icon-more-horizontal-"></i></button>
                                                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="widgetRevenue">
                                                        <a className="dropdown-item font-13" href="#">Refresh</a>
                                                        <a className="dropdown-item font-13" href="#">Export</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body py-0">
                                        <div className="row align-items-center">
                                            <div className="col-lg-3">
                                                <div className="revenue-box border-bottom mb-2">
                                                    <h4>+ 4598</h4>
                                                    <p>Inward Amount</p>
                                                </div>
                                                <div className="revenue-box">
                                                    <h4>- 296</h4>
                                                    <p>Outward Amount</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-9">
                                                <div id="apex-line-chart"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-xl-6">
                                <div className="card m-b-30">
                                    <div className="card-body">
                                        <div className="media">
                                            <span className="align-self-center mr-3 action-icon badge badge-secondary-inverse"><i className="feather icon-folder"></i></span>
                                            <div className="media-body">
                                                <p className="mb-0">Projects</p>
                                                <h5 className="mb-0">85</h5>                      
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-xl-6">
                                <div className="card m-b-30">
                                    <div className="card-body">
                                        <div className="media">
                                            <span className="align-self-center mr-3 action-icon badge badge-secondary-inverse"><i className="feather icon-clipboard"></i></span>
                                            <div className="media-body">
                                                <p className="mb-0">Tasks</p>
                                                <h5 className="mb-0">259</h5>                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-12 col-xl-6">
            <div className="card m-b-30">
                <div className="card-header">                                
                    <div className="row align-items-center">
                        <div className="col-9">
                            <h5 className="card-title mb-0">Generated Leads</h5>
                        </div>
                        <div className="col-3">
                            <div className="dropdown">
                                <button className="btn btn-link p-0 font-18 float-right" type="button" id="widgetPatientStatus" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="feather icon-more-horizontal-"></i></button>
                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="widgetPatientStatus">
                                    <a className="dropdown-item font-13" href="#">Refresh</a>
                                    <a className="dropdown-item font-13" href="#">Export</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-body py-0">
                    <div className="table-responsive">
                        <table className="table table-borderless">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Name</th>
                                    <th>Admitted On</th>
                                    <th>Disease</th>
                                    <th>Assigned Doctor</th>
                                    <th>Recovery Stats</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Amy Ahuja</td>
                                    <td>23-Oct-19</td>
                                    <td><span className="badge badge-secondary-inverse">Joandice</span></td>
                                    <td>Dr. Andrew Garfield</td>
                                    <td>
                                        <div className="progress" 
                                        style={{height: '4px'}}>
                                          <div className="progress-bar" role="progressbar" style={{width: '75%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </td>
                                    <td>
                                        <a href="#" className="text-primary mr-2"><i className="feather icon-edit-2"></i></a>
                                        <a href="#" className="text-danger"><i className="feather icon-trash"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Amy Ahuja</td>
                                    <td>23-Oct-19</td>
                                    <td><span className="badge badge-secondary-inverse">Joandice</span></td>
                                    <td>Dr. Andrew Garfield</td>
                                    <td>
                                        <div className="progress" 
                                        style={{height: '4px'}}>
                                          <div className="progress-bar" role="progressbar" style={{width: '75%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </td>
                                    <td>
                                        <a href="#" className="text-primary mr-2"><i className="feather icon-edit-2"></i></a>
                                        <a href="#" className="text-danger"><i className="feather icon-trash"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Amy Ahuja</td>
                                    <td>23-Oct-19</td>
                                    <td><span className="badge badge-secondary-inverse">Joandice</span></td>
                                    <td>Dr. Andrew Garfield</td>
                                    <td>
                                        <div className="progress" 
                                        style={{height: '4px'}}>
                                          <div className="progress-bar" role="progressbar" style={{width: '75%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </td>
                                    <td>
                                        <a href="#" className="text-primary mr-2"><i className="feather icon-edit-2"></i></a>
                                        <a href="#" className="text-danger"><i className="feather icon-trash"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Amy Ahuja</td>
                                    <td>23-Oct-19</td>
                                    <td><span className="badge badge-secondary-inverse">Joandice</span></td>
                                    <td>Dr. Andrew Garfield</td>
                                    <td>
                                        <div className="progress" 
                                        style={{height: '4px'}}>
                                          <div className="progress-bar" role="progressbar" style={{width: '75%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </td>
                                    <td>
                                        <a href="#" className="text-primary mr-2"><i className="feather icon-edit-2"></i></a>
                                        <a href="#" className="text-danger"><i className="feather icon-trash"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Amy Ahuja</td>
                                    <td>23-Oct-19</td>
                                    <td><span className="badge badge-secondary-inverse">Joandice</span></td>
                                    <td>Dr. Andrew Garfield</td>
                                    <td>
                                        <div className="progress" 
                                        style={{height: '4px'}}>
                                          <div className="progress-bar" role="progressbar" style={{width: '75%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </td>
                                    <td>
                                        <a href="#" className="text-primary mr-2"><i className="feather icon-edit-2"></i></a>
                                        <a href="#" className="text-danger"><i className="feather icon-trash"></i></a>
                                    </td>
                                </tr>
                                
                              
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>      
        </div>
                      </div>
                        
       
    </section>
    );
}
export default Homepage;