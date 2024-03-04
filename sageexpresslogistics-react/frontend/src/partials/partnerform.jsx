

const Partnerform = () => {
  return (
    <div className="quat-form" style={{backgroundColor: "#222f4d" , borderRadius: "6px" , boxShadow: "0 0 20px 3px rgba(0, 0, 0, 0.05)"}}>
  
    <div className="tab" style={{padding: "2rem"}}>
      <h5 style={{color:"white"}}>Please provide a few important details required to process your application.</h5>
      <div className="tab_content">
        <div className="tabs_item">
         
          <form action="forms/contact.php" method="post" role="form" className="php-email-form">

            <div style={{height: "auto"}}>
                
                <div className="row">
                   
                    <div className="col-lg-4 mb-3 py-3 pb-2">                      
                        <input type="text" name="name" className="form-control p-3" id="name" placeholder="Full Name *" required/>
                    </div>

                    <div className="col-lg-4 mb-3 py-3 pb-2">                      
                        <input type="email" className="form-control p-3" name="email" id="email" placeholder="Email Address *" required/>
                    </div>

                    <div className="col-lg-4 mb-3 py-3 pb-2">                      
                        <input type="text" name="phone" className="form-control p-3" id="phone" placeholder="Mobile Number *" required/>
                    </div>


                </div>
               
                <div className="mb-3 py-2 pb-2">                      
                    <input type="city" className="form-control p-3" name="city" id="city" placeholder="Current address for correspondence *" required/>
                </div>

                <div className="row">

                    <div className="col-lg-6  mb-2">
                        <div className="card">
                            <div className="card-body">
                                <p className="card-text">Have you ever worked in a logistics company or in the supply chain function of an enterprise?<span style={{color: "red"}}>*</span></p>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="partnerStatus" id="flexRadioDefault1"/>
                                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                                        Yes
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="partnerStatus" id="flexRadioDefault2" checked/>
                                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                                        No
                                        </label>
                                    </div>
                            </div>

                        </div>
                    </div>
                   
                    <div className="col-lg-6 mb-2">
                        <div className="card">
                            <div className="card-body">
                                <p className="card-text">Do you have a location from where you can run your operating activity?<span style={{color: "red"}}>*</span></p>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="partnerStatus" id="flexRadioDefault1"/>
                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                     Yes
                                    </label>
                                  </div>
                                  <div className="form-check">
                                    <input className="form-check-input" type="radio" name="partnerStatus" id="flexRadioDefault2" checked/>
                                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                                      No
                                    </label>
                                  </div>
                            </div>

                        </div>
                    </div>

                    <div className="col-lg-6 mb-2">
                        <div className="card">
                            <div className="card-body">
                                <p className="card-text">Do you have any vehicles for Pick Up / Delivery of Goods ? <span style={{color: "red"}}>*</span></p>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="partnerStatus" id="flexRadioDefault1"/>
                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                     Yes
                                    </label>
                                  </div>
                                  <div className="form-check">
                                    <input className="form-check-input" type="radio" name="partnerStatus" id="flexRadioDefault2" checked/>
                                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                                      No
                                    </label>
                                  </div>
                            </div>

                        </div>
                    </div>

                    <div className="col-lg-6 mb-2">
                        <div className="card">
                            <div className="card-body">
                                <p className="card-text"> Do you have access to commercial vehicles? <span style={{color: "red"}}>*</span> </p>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="partnerStatus" id="flexRadioDefault1"/>
                                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                                     Yes
                                    </label>
                                  </div>
                                  <div className="form-check">
                                    <input className="form-check-input" type="radio" name="partnerStatus" id="flexRadioDefault2" checked/>
                                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                                      No
                                    </label>
                                  </div>
                            </div>

                        </div>
                    </div>

                </div>
  
                <div className="row">
                    <div className="form-group col-md-12 ">

                        <div className="form-check bordercss p-3">
                            <label className="form-check-label" style={{paddingLeft:"5px"}}>
                                <input className="form-check-input" name="acceptchk" id="acceptchk" type="checkbox" data-msg-required="Please select at least one option." value="accept"/>
                                <span style={{color:"wheat"}}> By filling up this form I agree that I am authorising Sage Express Logistics and its associates to contact me through call or email </span><span style={{color: "red"}}>*</span>
                            </label>
                        </div>

                    </div>

                </div>
  
                <div className="text-center d-flex justify-content-evenly">
                        <div className="row">
                            <div className="col-lg-12">
                                <button type="submit" className="btn btn-primary modal-submit-btn fs-5 rounded-0 m-2" style={{minWidth: "15.2rem", width:"auto"}}>SUBMIT</button>
                                <button type="submit" className="btn btn-danger modal-submit-btn fs-5 rounded-0 m-2" style={{minWidth:"15.2rem", width:"auto"}}>RESET</button>
                            </div>
                        </div>
                  
                </div>
            </div>

          </form>
          
        </div>
      </div>
    </div>
    
</div>
  )
}

export default Partnerform