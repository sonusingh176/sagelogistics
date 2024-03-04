

const heroslider = () => {
  return (
    <section id="hero" className="hero d-flex align-items-center">
        <div className="container">
          <div className="row gy-4 d-flex justify-content-between">
            <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <h3 data-aos="fade-up">Track Your Shipment</h3>

              <form
                action="#"
                className="form-search d-flex align-items-stretch mb-3"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Tracking Number"
                />
                <button type="submit" className="btn btn-primary">
                  Track
                </button>
              </form>
            </div>

            <div
              className="col-lg-5 order-1 order-lg-2 hero-img"
              data-aos="zoom-out"
            >
              <img
                src="/assets/img/hero-img.png"
                className="img-fluid mb-3 mb-lg-0"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
  )
}

export default heroslider