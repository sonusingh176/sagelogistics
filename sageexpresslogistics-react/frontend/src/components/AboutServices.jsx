import ServicesList from "../components/servicelist"
import QuoteForm from "./QuoteForm"

const AboutServices = ({q1,text1,q2,text2,image1,image2}) => {
  return (
    <>
    
    <section id="service-details" className="service-details">

        <div className="container" data-aos="fade-up">

            <div className="row gy-4">

                <div className="col-lg-4">
                {/* <!-- ======= Service List ======= --> */}
                    <ServicesList/>
                </div>

                <div className="col-lg-8">
                    <QuoteForm/>

                </div> 

            </div>

        </div>

    </section> 
   
  {/* <!-- ======= vision & mission Section ======= --> */}
    <section id="features" className="features">
      <div className="container">
    
     
        <div className="row gy-4 align-items-center features-item aos-init aos-animate" data-aos="fade-up">
          <div className="col-md-5">
            <img src={image2} className="img-fluid" alt=""/>
          </div>
          <div className="col-md-7">
            <h3>{q1}</h3>
            <p style={{fontSize: "large", fontWeight:"600"}}>{text1}</p>
            
          </div>
        </div>
    
        <div className="row gy-4 align-items-center features-item aos-init mt-0" data-aos="fade-up">
          <div className="col-md-5 order-1 order-md-2">
            <img src={image1} className="img-fluid" alt=""/>
          </div>
          <div className="col-md-7 order-2 order-md-1">
            <h3>{q2}</h3>
            <p style={{fontSize: "large" , fontWeight:"600"}}>
              {text2}
            </p>
            <p style={{fontSize:"large", fontWeight:"600"}}>
              Sage Express Logistics  Services in indore have been in the business of moving around households and offices for quite some time. Our services are simply the best in the best in the country, and you can never find an equal. There have been repeat customers and there have been several of them. People have even recommended our services to their relatives and friends in need for help at this end.
            </p>
          </div>
        </div>
            
      </div>
    </section>


    </>
    
  )
}

export default AboutServices