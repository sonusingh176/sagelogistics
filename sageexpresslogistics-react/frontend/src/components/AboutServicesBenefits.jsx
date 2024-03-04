
import ServicesList from "../components/servicelist"
import Getquotebtn from "../components/getquotebtn"



const AboutServicesBenefits = ({ page ,title, text1, image1, text2, image2, servicesList }) => {
  return (
   
    <section id="service-details" className="service-details">

    <div className="container" data-aos="fade-up">

        <div className="row gy-4">

            <div className="col-lg-4">
            {/* <!-- ======= Service List ======= --> */}
                <ServicesList service={page}/>
            </div>

            <div className="col-lg-8">

                <div className="row gy-4 align-items-center features-item aos-init aos-animate" data-aos="fade-up">
        
                    <div className="col-md-6">
                    
                        <p className="">
                            {text1}
                        </p>
                    
                    </div>

                    <div className="col-md-6">
                        <img src={image1} className="img-fluid" alt=""/>
                    </div>

                </div>

                <div className="row gy-4 my-4  align-items-center features-item aos-init aos-animate" data-aos="fade-up">

                    <div className="col-md-6">
                        <img src={image2} className="img-fluid" alt=""/>
                    </div>

                    <div className="col-md-6">
                    
                        <p className="">
                          {text2}
                        </p>
                
                    </div>

                </div>

                <div className="row gy-4 my-4  align-items-center features-item aos-init aos-animate" data-aos="fade-up">

                    <div className="col-lg-12">
                    
                        <div> 
                    
                        
                        <h3 className="text-center">{title}</h3>

                        <ul>
                        {servicesList.length > 0 &&  servicesList.map((item, index) => (
                            <li key={index}>
                                <i className="bi bi-check-circle"></i> <span>{item}</span>
                            </li>
                        ))}

                        </ul>
                    
                            
                        {/* <!-- Button trigger Quote modal --> */}
                        
                        <Getquotebtn/>

                        </div>

                    <div> 


                    </div>

                    </div>
                
                </div>

            </div>

        </div>

    </div>

    </section> 
  )
}

export default AboutServicesBenefits