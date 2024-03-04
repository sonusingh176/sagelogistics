import { Link } from "react-router-dom";


const ServicesList = ({ service }) => {

  const services = [
    { name: 'Full Truck Load', route: 'full-truck-load' },
    { name: 'Part Truck Load', route: 'part-truck-load' },
    { name: 'Mini Truck Load', route: 'mini-truck-load' },
    { name: 'Personal courier', route: 'personal-courier' },
    { name: 'International Courier & Logistics', route: 'international-courier' },
    { name: 'Industrial Logistics', route: 'industrial-courier' },
    { name: 'eCommerce Logistics', route: 'ecommerce-courier'},
    { name: 'Packers and Movers', route: 'packers-and-movers' },
  ];

  return (
    <div className="services-list">
      <h3>Explore other Services</h3>
      {services.map((s) => (
        <Link
          key={s.route}
          to={`/services/${s.route}`}
          className={service === s.name ? 'active' : ''}
          
        >
          {s.name}
        </Link>
      ))}
    </div>
  );
};

export default ServicesList;
