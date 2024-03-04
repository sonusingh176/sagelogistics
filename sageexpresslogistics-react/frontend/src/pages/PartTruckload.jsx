import Breadcrumbs from "../components/breadcrumbs";
import AboutServicesBenefits from "../components/AboutServicesBenefits";
import Secretsuccess from "../components/secretsuccess";

const PartTruckload = () => {
  const keyPoints = [
    "Tracking of your consignments.",
    "Definite transit schedule towards just in time.",
    "Customized solution support for your freight.",
    "24/7 customer support.",
  ];

  const text1 =
    "Partial Load (LTL) shipping optimizes space by consolidating multiple shipments onto a single truck. These partial shipments are transported to a transshipment point or logistics center, where they are reloaded onto another truck for final delivery to the consignee's warehouse. This efficient process maximizes truck capacity and ensures cost-effective transportation for smaller loads";
  const text2 =
    "We understand the small intricacies of part load logistics and have designed our services which ensure that our customers get top quality, hassle-free service as affordable price.";

  return (
    <main id="main">
        
      <Breadcrumbs
        bcontent={{
          page: "Part Truck Load",
          title: "Part Truck Load",
          description:
            "we lead the way in Partial Truckload Freight services across India. Serving Corporate, SMEs, and retail segments, our focus is on delivering efficient logistics at competitive rates, ensuring reliability and affordability for your shipments.",
        }}
      />

      {/* <!-- ======= Service Details Section ======= --> */}

      <AboutServicesBenefits
        title="Our Part Truck Load Services Include"
        text1={text1}
        image1="/assets/img/parttruckload.jpg"
        text2={text2}
        image2="/assets/img/parttrucload2.jpg"
        servicesList={keyPoints}
      />

      {/* <!--======= Horizontal Screte Success Card Section =======  --> */}
      <Secretsuccess />
      
    </main>
  );
};

export default PartTruckload;
