import { Link } from "react-router-dom"
import Quotemodal from "../components/quotemodal"
import Trackingmodal from "../components/trackingmodal"

const bookingtrackingcard = () => {
  return (
    <>
    
    <section id="featured-services" className="featured-services">
    <div className="container">
      <div className="row gy-4 d-flex justify-content-around">

            <div
              className="col-lg-4 col-md-6 service-item d-flex card mx-2 p-3"
              data-aos="fade-up"
              data-aos-delay="100" 
              style={{width: "21rem" ,
                      borderRadius:"3%",
                      boxShadow: "rgba(66, 113, 221, 0.4) 5px 5px, rgba(46, 46, 240, 0.3) 10px 10px"}}>

              
              <div className="icon flex-shrink-0 text-center m-3">
                <i className="fa-solid fa-file-pen"></i>
              </div>
              <div>
                <h4 className="title text-center">Get a Quote</h4>
                <p className="description text-center">Find the right service</p>
                <a href="#" className="readmore btn btn-primary rounded" data-bs-toggle="modal" data-bs-target="#exampleModal"><span>Get A Quote</span></a>
              </div>

            </div>

            {/* <!-- End Get a Quote Card --> */}

            <div className="col-lg-4 col-md-6 service-item d-flex card mx-2 p-3"
              data-aos="fade-up"
              data-aos-delay="100"
              style={{width: "21rem",
                borderRadius:"3%",
                boxShadow: "rgba(66, 113, 221, 0.4) 5px 5px, rgba(46, 46, 240, 0.3) 10px 10px"}}>

              <div className="icon flex-shrink-0 text-center  m-3">
                <i className="fa-solid fa-truck"></i>
              </div>
              <div>
                <h4 className="title text-center">Track Your Shipment</h4>
                <p className="description text-center">Check where is your parcel</p>
                <button type="button"  data-bs-toggle="modal"  data-bs-target="#trackshipmentModal" class="readmore btn btn-primary w-100"><span>Track a Shipment</span></button>
              </div>
            </div>


            {/* <!-- End Track Your Shipment Card--> */}

            <div
              className="col-lg-4 col-md-6 service-item d-flex card mx-2 p-3"
              data-aos="fade-up"
              data-aos-delay="100"
              style={{width:"21rem",
                      borderRadius:"3%",
                      boxShadow: "rgba(66, 113, 221, 0.4) 5px 5px, rgba(46, 46, 240, 0.3) 10px 10px"}}>
                
              <div className="icon flex-shrink-0 text-center  m-3">
                <i className="fas fa-people-arrows"></i>
              </div>
              <div>
                <h4 className="title text-center">Become a Delivery Partner</h4>
                <p className="description text-center">
                  Join Us : Make Delivery Easy
                </p>
                <Link to="/partner" className="readmore stretched-link btn btn-primary" ><span>Join Network</span></Link>
              </div>
            </div>

            {/* <!-- End Delivery Partner Card --> */}




      </div>
    </div>
    </section>


    <Quotemodal/>

    <Trackingmodal/>



    </>
  )
}

export default bookingtrackingcard