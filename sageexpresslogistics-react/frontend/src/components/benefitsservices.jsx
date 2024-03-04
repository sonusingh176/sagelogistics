import Getquotebtn from "./getquotebtn"

const Benefitsservices = () => {
  return (
   
    <div> 
    <img src="/assets/img/fulltruckload.jpg" alt="" className="img-fluid services-img"/>
    <h3>Benefits Of FTL Service</h3>

    <ul>
      <li><i className="bi bi-check-circle"></i> <span><strong>Cost Savings :</strong> FTL pricing is based on lanes and miles traveled, potentially saving costs for high-volume destinations.</span></li>
      <li><i className="bi bi-check-circle"></i> <span><strong>Convenience :</strong> Enjoy a single or customizable pickup/drop-off point, tailored to your specific requirements.</span></li>
      <li><i className="bi bi-check-circle"></i> <span><strong>Speed :</strong> FTL ensures swift deliveries, making it an ideal choice for time-sensitive shipments.</span></li>
      <li><i className="bi bi-check-circle"></i> <span><strong>Less Risk :</strong> FTL ensures your goods stay untouched, reducing the risk of mishandling or damage during transport.</span></li>   
    </ul>



     {/* <!--Second Section --> */}


  <h3>Our Full Truck Load Services Include</h3>

  <ul>
    <li><i className="fas fa-check-double"></i><span>Tracking of your consignments.</span></li>
    <li><i className="fas fa-check-double"></i><span>Definite transit schedule towards just in time.</span></li>
    <li><i className="fas fa-check-double"></i><span>Customized solution support for your freight.</span></li>
    <li><i className="fas fa-check-double"></i> <span>24/7 customer support.</span></li>
  </ul>

            
    {/* <!-- Button trigger Quote modal --> */}
   
    <Getquotebtn/>
   </div>
 
  )
}

export default Benefitsservices