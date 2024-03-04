import AboutServices from "../components/AboutServices"
import Breadcrumbs from "../components/breadcrumbs"
import Secretsuccess from '../components/secretsuccess'



const EcommerceCourier = () => {

    const text1="Logistics are being affected by e-commerce, particularly by its business-to-consumer segment. Usually, customers are responsible for purchasing their goods at the retailer’s location. Sage Express Logistics is a one stop solution for all logistics needs. We have a history of providing orders on schedule. Sage Express Logistics is one of the best e-commerce logistics providers in India. We have modern technologies aiding our e-commerce logistics process. Our customers are the testament of our express delivery and service.";
  const text2="In the fast-paced world of e-commerce and retail, logistics plays a crucial role in shaping customer experiences and operational efficiency. This blog unveils the strategic approach of Sage Express Logistics in navigating the dynamic landscape of e-commerce and retail logistics."

  return (
   <main id="main">
        <Breadcrumbs 
             bcontent={{
                page: "eCommerce Logistic",
                title: "eCommerce Logistic",
                description:
                  "Sage Express  is a leading courier and logistics service committed to delivering seamless and reliable shipping solutions.",
         }}/>

         <AboutServices
             q1="E-commerce Logistics Providers in India"
             text1={text1}
             q2="Our Approach of E-commerce & Retail Logistics"
             text2={text2}
             image1="/assets/img/ecom1.jpg"
             image2="/assets/img/ecom2.jpg"
         />

<Secretsuccess/>

   </main>
  )
}

export default EcommerceCourier