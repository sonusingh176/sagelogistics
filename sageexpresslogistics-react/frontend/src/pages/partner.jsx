import Breadcrumbs from "../components/breadcrumbs"
import Partnerform from "../partials/partnerform"


const Partner = () => {
  return (
        <main id='main'>
             <Breadcrumbs bcontent={{page:'Partners' ,title : 'Partners', description : ''}}/>
        
             <section id="service" className="service pt-0 py-1">
                <div className="container aos-init aos-animate" data-aos="fade-up" >
                    <div className="section-header">
                        <span>Channel Partner Application Form</span>
                        <h2>Channel Partner Application Form </h2>
                    </div>
                </div>
             </section>


             {/* <!-- ======= channel partner forms ======= --> */}
            <div className="container " data-aos="fade-up">
                <div className="section-header pt-0 py-0">
                    <h3 style={{fontSize: "1.5rem !important"}}> “ Thank you for showing your interest in becoming a channel partner with Sage Express Logistics ” </h3>
                
                </div>

                
                <div className="row gy-4 p-5">
                
                    {/* <!--  Quote Form  --> */}
                    <div className="col-lg-12">
                        <Partnerform/>
                    </div>

                </div>

            </div>



        </main>
  )
}

export default Partner