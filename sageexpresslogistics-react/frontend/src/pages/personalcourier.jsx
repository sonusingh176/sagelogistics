import AboutServicesBenefits from "../components/AboutServicesBenefits"
import Breadcrumbs from "../components/breadcrumbs"
import Secretsuccess from "../components/secretsuccess";


const Personalcourier = () => {
    const keyPoints = [
        "Our top priority is to get your package to its destination on time. Our speedy courier services make sure you never have to worry about delays.",
        "We handle every parcel with the utmost care. Your package is safe with us, making us a trustworthy courrier company you can rely on.",
        "Our courier booking services are so simple, anyone can do it! Just a few clicks, and your courier is ready to go..",
        "Sending a parcel shouldn't break the bank. Our courier services offer great value for the money, making us a cost-effective courier company.",
        "Want to know where your parcel is? Our courier services include real-time tracking, so you're never left wondering.",
        "Got questions? Need help? Our customer service is always ready to assist you, proving we're not just any courier company; we're a courier company that cares."
      ];
    const text1=" At Sega Express, we're more than just a courier company; we're a commitment to swift and secure deliveries. Trusted by individuals and businesses alike, our services guarantee punctuality and the safety of your goods, alleviating concerns about late deliveries or damages.";
    const text2=" At Sega Express, we're more than just a courier company; we're a commitment to swift and secure deliveries. Trusted by individuals and businesses alike, our services guarantee punctuality and the safety of your goods, alleviating concerns about late deliveries or damages.";
   
  return (
    <main id="main">
        <Breadcrumbs bcontent={{
             page: "Personal Courier",
             title: "Personal Courier",
             description:
               "At Sega Express, we bring you budget-friendly personal delivery services. Our dedicated drivers prioritize safety, ensuring the best personal courier experience for you.",
           
        }}/>
    {/* <!-- ======= Service Details Section ======= --> */}

    <AboutServicesBenefits
     title=" When it comes to sending parcels, the choice of a courier company is crucial. Sega Express alleviates the overwhelm by offering top-notch personal courier and parcel services that cater to all your needs."
     text1={text1}
     image1="/assets/img/personalcourier.jpg"
     text2={text2}
     image2="/assets/img/personalcourier_2.jpg"
     servicesList={keyPoints}
    />

      {/* <!--======= Horizontal Screte Success Card Section =======  --> */}
      <Secretsuccess />
    </main>
  )
}

export default Personalcourier