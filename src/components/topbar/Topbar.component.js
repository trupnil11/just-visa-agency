import React from "react";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="row align-items-center">
        <div className="col-md-12 align-self-center">
          <div className="togglebar">
            <ul className="list-inline mb-0">
            <li className="list-inline-item">
                                    <div className="menubar">
                                        <a className="menu-hamburger" href="javascript:void();">
                                           <img src="/assets/images/svg-icon/collapse.svg" className="img-fluid menu-hamburger-collapse" alt="collapse" />
                                           <img src="/assets/images/svg-icon/close.svg" className="img-fluid menu-hamburger-close" alt="close" />
                                         </a>
                                     </div>
                                </li>
                                <li className="list-inline-item">
                                    <div className="searchbar">
                                        <form>
                                            <div className="input-group">
                                              <input type="search" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
                                              <div className="input-group-append">
                                                <button className="btn" type="submit" id="button-addon2"><img src="/assets/images/svg-icon/search.svg" className="img-fluid" alt="search" /></button>
                                              </div>
                                            </div>
                                        </form>
                                    </div>
                                </li>
            </ul>
          </div>
          <div className="infobar">
            <ul className="list-inline mb-0">
          
                                                      
                                
                                <li className="list-inline-item">
                                    <div className="profilebar">
                                        <div className="dropdown">
                                          <a className="dropdown-toggle" href="#" role="button" id="profilelink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src="/assets/images/users/profile.svg" className="img-fluid" alt="profile" /><span className="feather icon-chevron-down live-icon"></span></a>
                                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="profilelink">
                                                <div className="dropdown-item">
                                                    <div className="profilename">
                                                      <h5>John Doe</h5>
                                                    </div>
                                                </div>
                                                <div className="userbox">
                                                    <ul className="list-unstyled mb-0">
                                                        <li className="media dropdown-item">
                                                            <a href="#" className="profile-icon"><img src="/assets/images/svg-icon/user.svg" className="img-fluid" alt="user" />My Profile</a>
                                                        </li>
                                                        <li className="media dropdown-item">
                                                            <a href="#" className="profile-icon"><img src="/assets/images/svg-icon/logout.svg" className="img-fluid" alt="logout" />Logout</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>                                   
                                </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;