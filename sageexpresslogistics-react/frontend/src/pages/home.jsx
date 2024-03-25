import { useEffect } from "react";
import Servicecard from "../partials/servicecard";
import Bookingtrackingcard from "../partials/bookingtrackingcard";
import Heroslider from "../partials/heroslider";
import Whychooseus from "../components/whychooseus";
import usePageTitle from "../Helper/usePageTitle";

const Home = () => {

    //title helper
 usePageTitle("Sage Express Logistic |  Mini trucks | Packers & Movers | Book and transport easily!");

  return (
    <>
      <main id="main">
        <Heroslider />

        {/* 3 cards which is "Get a Quote" , " Track Your Shipment "  , " Become a Delivery Partner "*/}
        
        <Bookingtrackingcard />
        

        <Servicecard />

        {/* channel partner Section */}
        <section id="horizontal-pricing" className="horizontal-pricing pt-0">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <span>channel partner</span>
              <h2>channel partner</h2>
            </div>

            <div
              className="row gy-4 pricing-item featured mt-4 p-2"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="col-lg-12">
                <ul className="d-flex justify-content-center">
                  <li>
                    <strong>
                      Join the Delivery Partner Channel and experience the
                      benefit of a better earning potential, faster payments,
                      and flexible timings
                    </strong>
                  </li>
                </ul>

                <div className="d-flex align-items-center justify-content-center">
                  <div className="text-center">
                    <a href="{{route('partner')}}" className="buy-btn">
                      JOIN
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Whychooseus/>

      </main>
    </>
  );
};

export default Home;
