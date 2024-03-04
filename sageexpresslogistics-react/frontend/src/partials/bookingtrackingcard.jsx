

const bookingtrackingcard = () => {
  return (
    <section id="featured-services" className="featured-services">
    <div className="container">
      <div className="row gy-4">
        <div
          className="col-lg-4 col-md-6 service-item d-flex card mx-2 p-3"
          data-aos="fade-up"
          data-aos-delay="100"
          style={{ width: "26rem" }}
        >
          <div className="icon flex-shrink-0">
            <i className="fas fa-mobile-alt"></i>
          </div>
          <div>
            <h4 className="title">Book Your Shipment</h4>
            <p className="description">Find the right service</p>
            <a
              href="#"
              className="readmore btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <span>Get A Quote</span>
            </a>
          </div>
        </div>

        <div
          className="col-lg-4 col-md-6 service-item d-flex card mx-2 p-3"
          data-aos="fade-up"
          data-aos-delay="100"
          style={{ width: "26rem" }}
        >
          <div className="icon flex-shrink-0">
            <i className="fa-solid fa-truck"></i>
          </div>
          <div>
            <h4 className="title">Track Your Shipment</h4>
            <p className="description">Check where is your parcel</p>
            <button
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#trackshipmentModal"
              className="readmore btn btn-primary w-100"
            >
              <span>Track a Shipment</span>
            </button>
          </div>
        </div>

        <div
          className="col-lg-4 col-md-6 service-item d-flex card mx-2 p-3"
          data-aos="fade-up"
          data-aos-delay="100"
          style={{ width: "26rem" }}
        >
          <div className="icon flex-shrink-0">
            <i className="fas fa-people-arrows"></i>
          </div>
          <div>
            <h4 className="title">Become a Delivery Partner</h4>
            <p className="description">
              Join Sage Express Logistic: Make Delivery Easy
            </p>
            <a
              href="#"
              className="readmore stretched-link btn btn-primary"
            >
              <span>Join Network</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default bookingtrackingcard