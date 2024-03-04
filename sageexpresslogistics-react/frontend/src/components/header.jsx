import {Link} from "react-router-dom";

const Header = () => {


  return (
    
  <header id="header" className="header d-flex align-items-center fixed-top">
      <div
        className="container-fluid container-xl d-flex align-items-center justify-content-between"
      >
        <Link to="" className="logo d-flex align-items-center">
          {/* Uncomment the line below if you also wish to use an image logo  */}
          <img src="/assets/img/logo.png" alt="" />
          <h1 className="companyname">Sage Express Logistics</h1>
        </Link>

        <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
        <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
        <nav id="navbar" className="navbar">
          <ul>
            <li><Link to="get-quote">Get Quote</Link></li>
            <li className="dropdown">
              <Link to="#"><span>Services</span>
                <i className="bi bi-chevron-down dropdown-indicator"></i></Link>

              <ul>
                <li className="dropdown">
                  <Link to=""><span>Domestic Logistics</span> <i className="bi bi-chevron-down dropdown-indicator"></i></Link>
                  <ul>
                    <li><Link to="/services/full-truck-load">Full Truck Load</Link></li>
                    <li><Link to="/services/part-truck-load">Part Truck Load</Link></li>

                    <li><Link to="/services/mini-truck-load">Mini Truck Load</Link></li>
                    <li><Link to="/services/personal-courier">Personal Courier</Link></li>
                    
                  </ul>
                </li>

                <li><Link to="">Internationl Logistics</Link></li>
                <li><Link to="/services/ecommerce-courier">eCommerce Logistics</Link></li>
                <li><Link to="/services/industrial-courier">Industrial Logistics</Link></li>
                <li><Link to="/services/packers-and-movers">Packers and Movers</Link></li>
                   
                
              </ul>

            </li>   
            <li><Link to="/partner">Partner</Link></li>
            <li><Link to="/about">About</Link></li>          
            <li><Link to="/contact">Contact Us</Link></li>
            <li><button type="button" data-bs-toggle="modal" data-bs-target="#trackshipmentModal" className=" get-a-quote btn btn-primary ">Tracking</button></li>
          </ul>
        </nav>
        
      </div>
  </header>
  
  )
}

export default Header