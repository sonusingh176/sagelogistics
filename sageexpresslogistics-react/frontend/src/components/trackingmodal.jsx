import React from 'react'

const trackingmodal = () => {
  return (
    <>
    <div className="modal fade" id="trackshipmentModal" tabIndex="-1" aria-labelledby="trackshipmentModalLabel" aria-hidden="true">
    <div className="modal-dialog">

        <div className="modal-content">

            <div className="modal-header"> 
                <button type="button" className="btn btn-close btn-light" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
        
            <div className="modal-body">

                <div className="text-wrap d-flex justify-content-center">
                   
                    <h2 className="text-center fw-bold text-light">Track your shipment</h2>
                   
                </div>

                <div style={{height: "430px"}} className="mt-5">

                    <form action="" method="post" role="form" className="php-email-form">   
                        <div className="mb-3 py-2 pb-2">                      
                            <input type="text" name="track" className="form-control p-4" id="phone" placeholder="Enter your tracking number(s)" required/>
                        </div>

                    
        
                        <div className="text-center mt-5">
                            <button type="submit" className="btn btn-danger modal-submit-btn fs-5 rounded-0" style={{minWidth: "15.2rem", width:"auto"}}>Track</button>
                        </div>
                    </form>


                </div>      
        
            </div>

            <div className="copyright text-center text-light">
                © Copyright <strong><span>SageExpressLogistic</span></strong>. All Rights Reserved
              </div>

        </div>
    
    </div>
</div>

    </>
  )
}

export default trackingmodal