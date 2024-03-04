import QuoteForm from "../components/QuoteForm"
import Breadcrumbs from "../components/breadcrumbs"
import Secretsuccess from "../components/secretsuccess"


const Quote = () => {
  return (
   
    <main id="main">

        <Breadcrumbs
            bcontent={{
                page: "Get Quote",
                title: "Get Quote",
                description:
                "Feel Free to Get Quote.",
            }}
        />

        <section id="service-details" className="service-details">

        <div className="container" data-aos="fade-up">

            <div className="row gy-4">

            <div className="col-lg-4 content order-last  order-lg-first">
                    <h3 style={{fontSize: "1.5rem !important"}}>Your One-Stop Solution for Courier and Parcel Services</h3>
                    <p>
                        Choosing a suitable courier or parcel company can be overwhelming when sending a parcel. Thankfully, Sage Express Logistics offer top-notch courier and parcel services that meet all your needs
                    </p>
                    <ul>
                        <li data-aos="fade-up" data-aos-delay="100">
                        <i className="bi bi-diagram-3"></i>
                        <div>
                            <h5>Easy Booking</h5>
                            <p>Seamless courier booking services .</p>
                        </div>
                        </li>
                        <li data-aos="fade-up" data-aos-delay="200">
                        <i className="bi bi-fullscreen-exit"></i>
                        <div>
                            <h5>Fast Deliveries</h5>
                            <p>Our top priority is to get your package to its destination on time.</p>
                        </div>
                        </li>
                        <li data-aos="fade-up" data-aos-delay="300">
                        <i className="bi bi-broadcast"></i>
                        <div>
                            <h5>Customer Support</h5>
                            <p>Got questions? Need help? Our customer service is always ready to assist you.</p>
                        </div>
                        </li>
                    </ul>
                    </div>

                <div className="col-lg-8">
                    <QuoteForm/>

                </div> 

            </div>

        </div>

        </section> 

        <Secretsuccess/>

    </main>
  )
}

export default Quote