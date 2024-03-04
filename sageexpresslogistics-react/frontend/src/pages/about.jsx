import Breadcrumbs from "../components/breadcrumbs"

const About = () => {
  return (
   
    <main id="main">
         <Breadcrumbs bcontent={{page:'About' ,title : 'About', description : 'Sage Express  is a leading courier and logistics service committed to delivering seamless and reliable shipping solutions.'}}/>
            {/* ======= About Us Section ====== */}
          <section id="about" className="about">
              <div className="container" data-aos="fade-up">
        
                <div className="row gy-4">
                  <div className="col-lg-6 position-relative align-self-start order-lg-last order-first">
                    <img src="assets/img/about.jpg" className="img-fluid" alt=""/>
                    <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="glightbox play-btn"></a>
                  </div>
                  <div className="col-lg-6 content order-last  order-lg-first">
                    <h3>About Us</h3>
                    <p>
                      From the modest beginnings of Sage Express Logistics, our trajectory has been nothing short of extraordinary, illuminating countless smiles along the way. However, our hunger for spreading joy remains insatiable. Day in and day out, we continue to toil with the same fervor and zeal that marked our inception, dedicated to inspiring that precious smile on your face.
                    </p>
                    <ul>
                      <li data-aos="fade-up" data-aos-delay="100">
                        <i className="bi bi-diagram-3"></i>
                        <div>
                          <h5>Innovation</h5>
                          <p>Embracing creativity and forward thinking to stay ahead in an ever-evolving landscape.</p>
                        </div>
                      </li>
                      <li data-aos="fade-up" data-aos-delay="200">
                        <i className="bi bi-fullscreen-exit"></i>
                        <div>
                          <h5>Performance</h5>
                          <p>Consistently delivering excellence, setting benchmarks for ourselves and the industry.</p>
                        </div>
                      </li>
                      <li data-aos="fade-up" data-aos-delay="300">
                        <i className="bi bi-broadcast"></i>
                        <div>
                          <h5>Trust and Sincerity</h5>
                          <p>Upholding unwavering integrity and building enduring relationships based on trust.</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
        
              </div>
          </section>

        {/* ======= Testimonials Section ======= */}
        <section style={{padding: '60px 0', backgroundColor:'#0d42ff', backgroundPosition:'center', backgroundSize: 'cover', position: 'relative'}}>
          <div className="container">
              <div className="watertank  d-flex justify-content-around">
              <h3 className="text-light"> Embracing Excellence in Service – Call Us Today!</h3>
              <a href="" className="btn btn-outline-light" style={{padding:'1% 6%'}}><span>Call Us Today</span></a>
              </div>
          </div>
        </section>

        {/* <!-- ======= Frequently Asked Questions Section ======= --> */}
        <section id="faq" className="faq">
          <div className="container" data-aos="fade-up">

              <div className="section-header">
              <span>Frequently Asked Questions</span>
              <h2>Frequently Asked Questions</h2>

              </div>

              <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="200">
              <div className="col-lg-10">

                  <div className="accordion accordion-flush" id="faqlist">

                  <div className="accordion-item">
                      <h3 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-1">
                          <i className="bi bi-question-circle question-icon"></i>
                          What services does Sage Express Logistic offer?
                      </button>
                      </h3>
                      <div id="faq-content-1" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                      <div className="accordion-body">
                          Sage Express Logistic provides a range of courier and logistics services, including B2B (Business-to-Business) shipping, Industrial Logistic Services ,Express deliveries, and more
                      </div>
                      </div>
                  </div>

                  <div className="accordion-item">
                      <h3 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-2">
                          <i className="bi bi-question-circle question-icon"></i>
                          How can I track my shipment?
                      </button>
                      </h3>
                      <div id="faq-content-2" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                      <div className="accordion-body">
                          You can easily track your shipment by using the tracking number provided at the time of booking. Simply enter the tracking number on our website or contact our customer support for assistance.
                      </div>
                      </div>
                  </div>

                  <div className="accordion-item">
                      <h3 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-3">
                          <i className="bi bi-question-circle question-icon"></i>
                          What is the estimated delivery time for Sage Express Logistic services?
                      </button>
                      </h3>
                      <div id="faq-content-3" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                      <div className="accordion-body">
                          Delivery times vary based on the type of service selected. Express shipments generally have shorter delivery windows, while standard services may take longer. For specific delivery timeframes, please refer to our service details or contact us for a personalized estimate.
                      </div>
                      </div>
                  </div>

                  <div className="accordion-item">
                      <h3 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-4">
                          <i className="bi bi-question-circle question-icon"></i>
                          How do I book a shipment with Sage Express Logistic?
                      </button>
                      </h3>
                      <div id="faq-content-4" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                      <div className="accordion-body">
                          <i className="bi bi-question-circle question-icon"></i>
                          Booking a shipment is easy! You can visit our website Submit a simple Form, our customer service will contact to you and  schedule a pickup and choose the desired service. Our team will guide you through the process
                      </div>
                      </div>
                  </div>
                  <div className="accordion-item">
                      <h3 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-5">
                          <i className="bi bi-question-circle question-icon"></i>
                          Does Sage Express Logistic provide insurance for shipped items?
                      </button>
                      </h3>
                      <div id="faq-content-5" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                      <div className="accordion-body">
                          Yes, Sage Express Logistic offers insurance options to provide coverage for your shipments. We recommend discussing insurance details with our team during the booking process.
                      </div>
                      </div>
                  </div>
                  </div>

              </div>
              </div>

          </div>
        </section>

    </main>
  )
}

export default About