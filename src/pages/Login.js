import React from "react";

const LoginPage = () => {
    return(
        <section>
        <div className="container">
        <div className="auth-box login-box">
            
            <div className="row no-gutters align-items-center justify-content-center">
                
                <div className="col-md-6 col-lg-5">
                   
                    <div className="auth-box-right">
                        <div className="card">
                            <div className="card-body">
                                <form action="#">
                                    <div className="form-head">
                                        <a href="index.html" className="logo"><img src="assets/images/logo.svg" className="img-fluid" alt="logo" /></a>
                                    </div>                                        
                                    <h4 className="text-primary my-4">Log in !</h4>
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="username" placeholder="Enter Username here" required />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control" id="password" placeholder="Enter Password here" required />
                                    </div>
                                    <div className="form-row mb-3">
                                        <div className="col-sm-6">
                                            <div className="custom-control custom-checkbox text-left">
                                              <input type="checkbox" className="custom-control-input" id="rememberme" />
                                              <label className="custom-control-label font-14" for="rememberme">Remember Me</label>
                                            </div>                                
                                        </div>
                                        <div className="col-sm-6">
                                          <div className="forgot-psw"> 
                                            <a id="forgot-psw" href="user-forgotpsw.html" className="font-14">Forgot Password?</a>
                                          </div>
                                        </div>
                                    </div>                          
                                  <button type="submit" className="btn btn-success btn-lg btn-block font-18">Log in</button>
                                </form>
                                <div className="login-or">
                                    <h6 className="text-muted">OR</h6>
                                </div>
                                <div className="social-login text-center">
                                    <button type="submit" className="btn btn-primary-rgba font-18"><i className="mdi mdi-facebook mr-2"></i>Facebook</button>
                                    <button type="submit" className="btn btn-danger-rgba font-18"><i className="mdi mdi-google mr-2"></i>Google</button>
                                </div>
                                <p className="mb-0 mt-3">Don't have a account? <a href="user-register.html">Sign up</a></p>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
            </div>
            
        </div>
    </div>
    </section>
    );
}
export default LoginPage;