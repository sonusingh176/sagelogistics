
import AboutServices from '../components/AboutServices'
// import AboutServicesBenefits from '../components/AboutServicesBenefits'
// import QuoteForm from '../components/QuoteForm'
import Breadcrumbs from '../components/breadcrumbs'
import Secretsuccess from '../components/secretsuccess'

const PackersMovers = () => {

  // const ketPoints = [
  //     "What is industrial logistics?",
      
 
  // ];
  const text1="Sage Express Logistics Indore one of the leading company providing packing, moving, unpacking, loading, unloading and transportation services. We are a team of highly dedicated and committed young professionals, who take care all the responsibility in handling the services mentioned above perfectly. We provide best and reliable movers packers in indore, Bhopal, Jabalpur and Gwalior car goods transportation services";

  const text2="Sage Express Logistics in Indore aims to provide maximum assistance in all forms to those seeking to effect a translocation their residences to another city or even to other parts of the same city."

  return (
    <main id="main">

        <Breadcrumbs 
             bcontent={{
                page: "Packers and Movers",
                title: "Packers and Movers",
                description:
                  "Effortless Moves, Exceptional Service! Choose our Packers and Movers for a stress-free relocation experience.",
         }}/>

        <AboutServices
          q1="What is packers & Movers Services?"
          text1={text1}
          q2="Our Vision & Mission"
          text2={text2}
          image1="/assets/img/packers1.jpg"
          image2="/assets/img/packers3.jpg"
        />

        <Secretsuccess/>




              
    </main>
  )
}

export default PackersMovers 