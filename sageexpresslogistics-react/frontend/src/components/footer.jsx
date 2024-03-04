const footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-5 col-md-12 footer-info">
            <a href="index.html" className="logo d-flex align-items-center">
              <span>Sage Express Logistic</span>
            </a>
            <p>
              Sage Express Logistic: Redefining Logistics with Precision,
              Innovation, and Customer Focus.
            </p>
            <div className="social-links d-flex mt-4">
              <a href="#" className="twitter">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="instagram">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="linkedin">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-2 col-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Get Quote</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Terms of service</a>
              </li>
              <li>
                <a href="#">Privacy policy</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li>
                <a href="">Full Truckload</a>
              </li>
              <li>
                <a href="">Part Truckload</a>
              </li>
              <li>
                <a href="">Mini Vehical Loads</a>
              </li>
              <li>
                <a href="">Personal courier</a>
              </li>
              <li>
                <a href="">Industrial Logistic</a>
              </li>

              <li>
                <a href="">Packers & Movers</a>
              </li>
              <li>
                <a href="">eCommerce Logistics</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
            <h4>Contact Us</h4>
            <p>
              Plot 75 NO, Vyapar Vikas Parishad <br />
              Indore, 452016
              <br />
              Madhya Pradesh
              <br />
              <br />
              <strong>Phone:</strong> +91 9302889535
              <br />
              <strong>Email: </strong> sageexpresslogistic@gmail.com
              <br />
            </p>
          </div>
        </div>
      </div>

      <div className="container mt-4">
        <div className="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>SageExpressLogistic</span>
          </strong>
          . All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default footer;
