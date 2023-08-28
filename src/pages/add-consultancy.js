import React from "react";
 const AddConsultancy = () => {
    return(
        <div className="row">
           <div className="col-md-12 col-lg-12 col-xl-12">
                        <div className="card m-b-30">
                            <div className="card-header">
                                <h5 className="card-title">Add Consuntancy infofmation</h5>
                            </div>
                            <div className="card-body">
                                <ul className="nav nav-tabs custom-tab-line mb-3" id="defaultTabLine" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="home-tab-line" data-toggle="tab" href="#home-line" role="tab" aria-controls="home-line" aria-selected="true"><i className="feather icon-home mr-2"></i>Basic info.</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="profile-tab-line" data-toggle="tab" href="#profile-line" role="tab" aria-controls="profile-line" aria-selected="false"><i className="feather icon-user mr-2"></i>Branch info.</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="contact-tab-line" data-toggle="tab" href="#contact-line" role="tab" aria-controls="contact-line" aria-selected="false"><i className="mdi mdi-airplane-takeoff"></i>Visa</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="media-tab-line" data-toggle="tab" href="#media-line" role="tab" aria-controls="media" aria-selected="false"><i className="feather icon-phone mr-2"></i>Media</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="contact-tab-line" data-toggle="tab" href="#contact-line" role="tab" aria-controls="contact-line" aria-selected="false"><i className="feather icon-phone mr-2"></i>Description</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="contact-tab-line" data-toggle="tab" href="#contact-line" role="tab" aria-controls="contact-line" aria-selected="false"><i className="feather icon-phone mr-2"></i>Social Media</a>
                                    </li>
                                </ul>
                                <div className="tab-content" id="defaultTabContentLine">
                                    <div className="tab-pane fade show active" id="home-line" role="tabpanel" aria-labelledby="home-tab-line">
                                        <div className="row">
                                    <div className="col-md-6 col-lg-6 col-xl-6">
                                    <div class="form-row">
                                    <div class="col-md-12 mb-12">
                                      <label >Consuntancy Name</label>
                                      <input type="text" class="form-control"  placeholder="Kanan Immigration"  required />
                                    </div>
                                    <div class="col-md-12 mb-12">
                                      <label >Authorised Person Name</label>
                                      <input type="text" class="form-control"  placeholder="Jony sins"  required />
                                    </div>
                                    <div class="col-md-12 mb-12">
                                      <label >Email</label>
                                      <input type="email" class="form-control"  placeholder="info@imegration.com"  required />
                                    </div>
                                    <div class="col-md-12 mb-12">
                                      <label >Whatsapp</label>
                                      <input type="email" class="form-control"  placeholder="+91 0000000000"  required />
                                    </div>
                                    </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6 col-xl-6">
                                    <div class="form-row">
                                    <div class="col-md-12 mb-12">
                                      <label >Alternative Number</label>
                                      <input type="text" class="form-control"  placeholder="0000000"  required />
                                    </div>
                                    <div class="col-md-12 mb-12">
                                      <label >Website</label>
                                      <input type="text" class="form-control"  placeholder="https://www.justvisa.com"  required />
                                    </div>
                                    <div class="col-md-12 mb-12">
                                      <label >GST No.</label>
                                      <input type="text" class="form-control"  placeholder="000 000 000 000"  required />
                                    </div>
                                    <div class="col-md-12 mb-12">
                                      <p> It is necessory to complete each steps with all fileds </p>
                                      <button class="btn btn-primary" type="submit">click to finish step 1</button>
                                      </div>
                                    
                                    </div>
                                    </div>
                                    </div>
                                    </div>
                                    <div className="tab-pane fade" id="profile-line" role="tabpanel" aria-labelledby="profile-tab-line">
                                    <div className="row">
                                    <div className="col-md-6 col-lg-6 col-xl-6">
                                    <div class="form-row">
                                    <div class="col-md-12 mb-12">
                                      <label >Branch Title</label>
                                      <input type="text" class="form-control"  placeholder="Kanan Immigration"  required />
                                    </div>
                                    <div class="col-md-12 mb-12">
                                      <label >Select country</label>
                                      <select class="select2-single form-control" name="state">
                                    <option>Select</option>
                                    <optgroup label="Alaskan/Hawaiian Time Zone">
                                        <option value="AK">Alaska</option>
                                        <option value="HI">Hawaii</option>
                                    </optgroup>
                                    <optgroup label="Pacific Time Zone">
                                        <option value="CA">California</option>
                                        <option value="NV">Nevada</option>
                                        <option value="OR">Oregon</option>
                                        <option value="WA">Washington</option>
                                    </optgroup>
                                    <optgroup label="Mountain Time Zone">
                                        <option value="AZ">Arizona</option>
                                        <option value="CO">Colorado</option>
                                        <option value="ID">Idaho</option>
                                        <option value="MT">Montana</option>
                                        <option value="NE">Nebraska</option>
                                        <option value="NM">New Mexico</option>
                                        <option value="ND">North Dakota</option>
                                        <option value="UT">Utah</option>
                                        <option value="WY">Wyoming</option>
                                    </optgroup>
                                    <optgroup label="Central Time Zone">
                                        <option value="AL">Alabama</option>
                                        <option value="AR">Arkansas</option>
                                        <option value="IL">Illinois</option>
                                        <option value="IA">Iowa</option>
                                        <option value="KS">Kansas</option>
                                        <option value="KY">Kentucky</option>
                                        <option value="LA">Louisiana</option>
                                        <option value="MN">Minnesota</option>
                                        <option value="MS">Mississippi</option>
                                        <option value="MO">Missouri</option>
                                        <option value="OK">Oklahoma</option>
                                        <option value="SD">South Dakota</option>
                                        <option value="TX">Texas</option>
                                        <option value="TN">Tennessee</option>
                                        <option value="WI">Wisconsin</option>
                                    </optgroup>
                                    <optgroup label="Eastern Time Zone">
                                        <option value="CT">Connecticut</option>
                                        <option value="DE">Delaware</option>
                                        <option value="FL">Florida</option>
                                        <option value="GA">Georgia</option>
                                        <option value="IN">Indiana</option>
                                        <option value="ME">Maine</option>
                                        <option value="MD">Maryland</option>
                                        <option value="MA">Massachusetts</option>
                                        <option value="MI">Michigan</option>
                                        <option value="NH">New Hampshire</option>
                                        <option value="NJ">New Jersey</option>
                                        <option value="NY">New York</option>
                                        <option value="NC">North Carolina</option>
                                        <option value="OH">Ohio</option>
                                        <option value="PA">Pennsylvania</option>
                                        <option value="RI">Rhode Island</option>
                                        <option value="SC">South Carolina</option>
                                        <option value="VT">Vermont</option>
                                        <option value="VA">Virginia</option>
                                        <option value="WV">West Virginia</option>
                                    </optgroup>
                                </select>
                                    </div>
                                    <div class="col-md-12 mb-12">
                                      <label >Select State</label>
                                      <select class="select2-single form-control" name="state">
                                    <option>Select</option>
                                    <optgroup label="Alaskan/Hawaiian Time Zone">
                                        <option value="AK">Alaska</option>
                                        <option value="HI">Hawaii</option>
                                    </optgroup>
                                    <optgroup label="Pacific Time Zone">
                                        <option value="CA">California</option>
                                        <option value="NV">Nevada</option>
                                        <option value="OR">Oregon</option>
                                        <option value="WA">Washington</option>
                                    </optgroup>
                                    <optgroup label="Mountain Time Zone">
                                        <option value="AZ">Arizona</option>
                                        <option value="CO">Colorado</option>
                                        <option value="ID">Idaho</option>
                                        <option value="MT">Montana</option>
                                        <option value="NE">Nebraska</option>
                                        <option value="NM">New Mexico</option>
                                        <option value="ND">North Dakota</option>
                                        <option value="UT">Utah</option>
                                        <option value="WY">Wyoming</option>
                                    </optgroup>
                                    <optgroup label="Central Time Zone">
                                        <option value="AL">Alabama</option>
                                        <option value="AR">Arkansas</option>
                                        <option value="IL">Illinois</option>
                                        <option value="IA">Iowa</option>
                                        <option value="KS">Kansas</option>
                                        <option value="KY">Kentucky</option>
                                        <option value="LA">Louisiana</option>
                                        <option value="MN">Minnesota</option>
                                        <option value="MS">Mississippi</option>
                                        <option value="MO">Missouri</option>
                                        <option value="OK">Oklahoma</option>
                                        <option value="SD">South Dakota</option>
                                        <option value="TX">Texas</option>
                                        <option value="TN">Tennessee</option>
                                        <option value="WI">Wisconsin</option>
                                    </optgroup>
                                    <optgroup label="Eastern Time Zone">
                                        <option value="CT">Connecticut</option>
                                        <option value="DE">Delaware</option>
                                        <option value="FL">Florida</option>
                                        <option value="GA">Georgia</option>
                                        <option value="IN">Indiana</option>
                                        <option value="ME">Maine</option>
                                        <option value="MD">Maryland</option>
                                        <option value="MA">Massachusetts</option>
                                        <option value="MI">Michigan</option>
                                        <option value="NH">New Hampshire</option>
                                        <option value="NJ">New Jersey</option>
                                        <option value="NY">New York</option>
                                        <option value="NC">North Carolina</option>
                                        <option value="OH">Ohio</option>
                                        <option value="PA">Pennsylvania</option>
                                        <option value="RI">Rhode Island</option>
                                        <option value="SC">South Carolina</option>
                                        <option value="VT">Vermont</option>
                                        <option value="VA">Virginia</option>
                                        <option value="WV">West Virginia</option>
                                    </optgroup>
                                </select>
                                    </div>
                                    <div class="col-md-12 mb-12">
                                      <label >Select City</label>
                                      <select class="select2-single form-control" name="state">
                                    <option>Select</option>
                                    <optgroup label="Alaskan/Hawaiian Time Zone">
                                        <option value="AK">Alaska</option>
                                        <option value="HI">Hawaii</option>
                                    </optgroup>
                                    <optgroup label="Pacific Time Zone">
                                        <option value="CA">California</option>
                                        <option value="NV">Nevada</option>
                                        <option value="OR">Oregon</option>
                                        <option value="WA">Washington</option>
                                    </optgroup>
                                    <optgroup label="Mountain Time Zone">
                                        <option value="AZ">Arizona</option>
                                        <option value="CO">Colorado</option>
                                        <option value="ID">Idaho</option>
                                        <option value="MT">Montana</option>
                                        <option value="NE">Nebraska</option>
                                        <option value="NM">New Mexico</option>
                                        <option value="ND">North Dakota</option>
                                        <option value="UT">Utah</option>
                                        <option value="WY">Wyoming</option>
                                    </optgroup>
                                    <optgroup label="Central Time Zone">
                                        <option value="AL">Alabama</option>
                                        <option value="AR">Arkansas</option>
                                        <option value="IL">Illinois</option>
                                        <option value="IA">Iowa</option>
                                        <option value="KS">Kansas</option>
                                        <option value="KY">Kentucky</option>
                                        <option value="LA">Louisiana</option>
                                        <option value="MN">Minnesota</option>
                                        <option value="MS">Mississippi</option>
                                        <option value="MO">Missouri</option>
                                        <option value="OK">Oklahoma</option>
                                        <option value="SD">South Dakota</option>
                                        <option value="TX">Texas</option>
                                        <option value="TN">Tennessee</option>
                                        <option value="WI">Wisconsin</option>
                                    </optgroup>
                                    <optgroup label="Eastern Time Zone">
                                        <option value="CT">Connecticut</option>
                                        <option value="DE">Delaware</option>
                                        <option value="FL">Florida</option>
                                        <option value="GA">Georgia</option>
                                        <option value="IN">Indiana</option>
                                        <option value="ME">Maine</option>
                                        <option value="MD">Maryland</option>
                                        <option value="MA">Massachusetts</option>
                                        <option value="MI">Michigan</option>
                                        <option value="NH">New Hampshire</option>
                                        <option value="NJ">New Jersey</option>
                                        <option value="NY">New York</option>
                                        <option value="NC">North Carolina</option>
                                        <option value="OH">Ohio</option>
                                        <option value="PA">Pennsylvania</option>
                                        <option value="RI">Rhode Island</option>
                                        <option value="SC">South Carolina</option>
                                        <option value="VT">Vermont</option>
                                        <option value="VA">Virginia</option>
                                        <option value="WV">West Virginia</option>
                                    </optgroup>
                                </select>
                                    </div>
                                    </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6 col-xl-6">
                                    <div class="form-row">
                                    <div class="col-md-12 mb-12">
                                      <label >Pincode / Zipcode / Postal code</label>
                                      <input type="text" class="form-control"  placeholder="390011"  required />
                                    </div>
                                    <div class="col-md-12 mb-12">
                                      <label >Website</label>
                                      <input type="text" class="form-control"  placeholder="https://www.justvisa.com"  required />
                                    </div>
                                    <div class="col-md-12 mb-12">
                                      <label >GST No.</label>
                                      <input type="text" class="form-control"  placeholder="000 000 000 000"  required />
                                    </div>
                                    <div class="col-md-12 mb-12">
                                      <p> It is necessory to complete each steps with all fileds </p>
                                      <button class="btn btn-primary" type="submit">click to finish step 2</button>
                                      </div>
                                    
                                    </div>
                                    </div>
                                    </div>
                                    </div>
                                    <div className="tab-pane fade" id="contact-line" role="tabpanel" aria-labelledby="contact-tab-line">
                                    <div className="row">
                                    <div className="col-md-6 col-lg-6 col-xl-6">
                                    <div className="form-row">
                                    <div className="col-md-12 mb-12">
                                    <div id="chartdiv"></div>
                                    </div>
                                    </div>
                                    </div>
                                    <div className="col-md-6 col-lg-6 col-xl-6">
                                    <div className="form-row">
                                    <div className="col-md-12 mb-12">
                                      <label >Alternative Number</label>
                                      <input type="text" className="form-control"  placeholder="0000000"  required />
                                    </div>
                                    <div className="col-md-12 mb-12">
                                      <p> It is necessory to complete each steps with all fileds </p>
                                      <button className="btn btn-primary" type="submit">click to finish step 1</button>
                                      </div>
                                    
                                    </div>
                                    </div>
                                    </div>
                                    </div>
                                    <div className="tab-pane fade" id="media-line" role="tabpanel" aria-labelledby="media-tab-line">
                                    <div className="row">
                    
                    <div className="col-md-12 col-lg-12 col-xl-12">
                        <div className="card m-b-30">
                            <div className="card-header">
                                <h5 className="card-title">File upload</h5>
                            </div>
                            <div className="card-body">
                                <form action="#" className="dropzone">
                                    <div className="fallback">
                                        <input name="file" type="file" multiple="multiple" />
                                    </div>
                                </form>
                                <div className="text-center m-t-15">
                                    <button type="button" className="btn btn-primary">Upload File</button>
                                </div>
                            </div>
                        </div>                        
                    </div>
                    
                </div> 
               
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>  
                      
        </div>
    );
 }

 export default AddConsultancy;