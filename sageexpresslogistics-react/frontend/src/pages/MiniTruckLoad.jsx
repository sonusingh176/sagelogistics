import Breadcrumbs from "../components/breadcrumbs";
import AboutServicesBenefits from "../components/AboutServicesBenefits";
import Secretsuccess from "../components/secretsuccess";

const Minitruckload = () => {

    const keyPoints = [
        "Our Tata Ace for rent in Indore service features high-quality trucks that cater to diverse needs.",
        "Beyond Tata Ace rent per km, we offer complete moving solutions, including packaging, loading, transportation, and unloading at your destination.",
        "Whether you need a Chota Hathi or a mini truck for rent in Indore, find your solution at sage express logistics Packers and Movers.",
        "Choose from various trucks, trailers, containers, hyva, and lcvs, covering both intercity and intracity transportation requirements.",
        "Simplify your move with our user-friendly platform for online mini truck booking in Indore and transparent pricing, free from hidden costs."
      ];
    
      const text1 =
        "Ease your move with our comprehensive truck and mini-truck rental services, facilitating smooth shifting across major cities and towns in India. For reliable and cost-effective transportation, the 'Chota Hathi' is your top choice. If you're in Indore, renting a 'Chota Hathi' is now hassle-free with our dedicated services.";
      const text2 =
        "At The SageExpressLogistic, we offer affordable and secure chota hathi vehicle services in Indore. From furniture to household items, our services ensure safe transportation. Choose us for dependable chota hathi and mini truck rentals with a simplified online booking process.";

        
  return (
    
    <main id="main">
         <Breadcrumbs
        bcontent={{
          page: "Mini Truck Load",
          title: "Mini Truck Load",
          description:
            "We can help you avail truck and mini truck rental service for shifting in almost all the major cities and towns of India.",
        }}
      />

       {/* <!-- ======= Service Details Section ======= --> */}

       <AboutServicesBenefits
        page= "Mini Truck Load"
        title="Your Ultimate Solution for Chota Hathi on Rent and Mini Truck Booking"
        text1={text1}
        image1="/assets/img/miniv-vehical-load2.jpg"
        text2={text2}
        image2="/assets/img/miniv-vehical-load.jpg"
        servicesList={keyPoints}
      />

      {/* <!--======= Horizontal Screte Success Card Section =======  --> */}
      <Secretsuccess />
    </main>

  )
}

export default Minitruckload