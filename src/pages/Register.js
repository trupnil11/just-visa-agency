import React from "react";

const RegisterPage = () => {
    return (
        <div id="containerbar" className="containerbar authenticate-bg">
            {/* Start Container */}
            <div className="container">
                <div className="auth-box register-box">
                    {/* Start row */}
                    <div className="row no-gutters align-items-center justify-content-center">
                        {/* Start col */}
                        <div className="col-md-6 col-lg-5">
                            {/* Start Auth Box */}
                            <div className="auth-box-right">
                                <div className="card">
                                    <div className="card-body">
                                        <form action="#">
                                            <div className="form-head">
                                                <a href="index.html" className="logo">
                                                    <img src="assets/images/logo.svg" className="img-fluid" alt="logo" />
                                                </a>
                                            </div>
                                            <h4 className="text-primary my-4">Sign Up !</h4>
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="username"
                                                    placeholder="Enter Username here"
                                                    required
                                                />
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="email"
                                                    placeholder="Enter Email here"
                                                    required
                                                />
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    id="password"
                                                    placeholder="Enter Password here"
                                                    required
                                                />
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    id="re-password"
                                                    placeholder="Re-Type Password"
                                                    required
                                                />
                                            </div>
                                            <div className="form-row mb-3">
                                                <div className="col-sm-12">
                                                    <div className="custom-control custom-checkbox text-left">
                                                        <input
                                                            type="checkbox"
                                                            className="custom-control-input"
                                                            id="terms"
                                                        />
                                                        <label
                                                            className="custom-control-label font-14"
                                                            htmlFor="terms"
                                                        >
                                                            I Agree to Terms & Conditions of Orbiter
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <button
                                                type="submit"
                                                className="btn btn-success btn-lg btn-block font-18"
                                            >
                                                Register
                                            </button>
                                        </form>
                                        <p className="mb-0 mt-3">
                                            Already have an account? <a href="user-login.html">Log in</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* End Auth Box */}
                        </div>
                        {/* End col */}
                    </div>
                    {/* End row */}
                </div>
            </div>
            {/* End Container */}
        </div>
    );
};

export default RegisterPage;
