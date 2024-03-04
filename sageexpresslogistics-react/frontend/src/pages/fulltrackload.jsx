import BenefitServices from "../components/benefitsservices";
import Breadcrumbs from "../components/breadcrumbs";
import ServicesList from "../components/servicelist";
import Secretsuccess from "../components/secretsuccess";

const Fulltrackload = () => {
  return (
    <main id="main">
      <Breadcrumbs
        bcontent={{
          page: "Full Truck Load",
          title: "Full Truck Load",
          description:
            "Elevate your shipping experience with our Full Truck Load (FTL) services. Enjoy exclusive use of an entire truck for your shipment, ensuring swift, secure, and efficient transportation.",
        }}
      />

      {/* <!-- ======= Service Details Section ======= --> */}
      <section id="service-details" className="service-details">
        <div className="container" data-aos="fade-up">
          <div className="row gy-4">
            <div className="col-lg-4">
              {/* <!-- ======= Service List ======= --> */}
              <ServicesList service={'Full Truck Load'} />
            </div>

            <div className="col-lg-8">
              {/* @include('components.benefits_services') */}
              <BenefitServices />
            </div>
          </div>
        </div>
      </section>

      {/* <!--======= Horizontal Screte Success Card Section =======  --> */}

      <Secretsuccess />
    </main>
  );
};

export default Fulltrackload;
