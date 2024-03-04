

const whychooseus = () => {
  return (
    <section id="pricing" className="pricing pt-0">
    <div className="container aos-init aos-animate" data-aos="fade-up">
      <div className="section-header">
        <span>WHY CHOOSE US</span>
        <h2>WHY CHOOSE US</h2>
      </div>

      <div className="row gy-4">
        <div
          className="col-lg-4 aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div
            className="featured card text-center mb-2"
            style={{padding: "25px 20px"}}
          >
            <div className="card-body">
              <h5 className="card-title">
                <i className="fas fa-star"></i> &nbsp; 100% SATISFIED CUSTOMERS
              </h5>
              <p className="card-text">
                We have served more than 10,000 customers with a smile. We
                dedicate our success story to our satisfied customers across
                the country.
              </p>
            </div>
          </div>

          <div className="featured card text-center" style={{padding: "25px 20px"}}>
            <div className="card-body mt-2">
              <h5 className="card-title">
                <i className="fas fa-shipping-fast"></i> &nbsp; FAST & RELIABLE
              </h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to
                additional content.
              </p>
            </div>
          </div>
        </div>
       

        <div
          className="col-lg-4 aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="pricing-item featured">
            <img
              src="assets/img/load-img.jpg"
              alt=""
              style={{width: "90%", objectFit: "contain"}}
            />
          </div>
        </div>
       

        <div
          className="col-lg-4 aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div
            className="card text-center mb-2 featured"
            style={{padding: "20px 20px"}}
          >
            <div className="card-body">
              <h5 className="card-title">
                <i className="fas fa-headset"></i> &nbsp; 24/7 CUSTOMER SUPPORT
              </h5>
              <p className="card-text">
                Our team is available 24/7 to resolve customer queries and
                give them right suggestions.
              </p>
            </div>
          </div>

          <div
            className="card text-center mt-2 featured"
            style={{padding: "20px 20px"}}
          >
            <div className="card-body">
              <h5 className="card-title">
                <i className="fas fa-tools"></i> &nbsp;CUSTOMIZED LOGISTICS
                SOLUTIONS
              </h5>
              <p className="card-text">
                Sage Express Logistic: Crafting Custom Solutions, Saving
                Costs, Efforts, and Time Across Industries.
              </p>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  </section>
  )
}

export default whychooseus