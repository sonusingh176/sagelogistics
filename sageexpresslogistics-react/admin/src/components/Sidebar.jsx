import React from 'react'

const Sidebar = () => {
  return (
    <>
         {/* <!-- ======= Sidebar ======= --> */}
 <aside id="sidebar" className="sidebar">

    <ul className="sidebar-nav" id="sidebar-nav">

      <li className="nav-item">
        <a className="nav-link collapsed" href="index.html">
          <i className="bi bi-grid"></i>
          <span>Dashboard</span>
        </a>
      </li>
      {/* <!-- End Dashboard Nav --> */}

      {/* Create components  */}
      <li className="nav-item">
        <a className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#" aria-expanded="false">
          <i className="bi bi-menu-button-wide"></i><span>Components</span><i className="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul id="components-nav" className="nav-content collapse" data-bs-parent="#sidebar-nav">
          <li>
            <a href="">
              <i className="bi bi-circle"></i><span>View Courier Type</span>
            </a>
          </li>
        
      
        </ul>
      </li>

      <li className="nav-item">
        <a className="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="#">
          <i className="bi bi-layout-text-window-reverse"></i><span>Tables</span><i className="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul id="tables-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
            <a href="">
              <i className="bi bi-circle"></i><span>Quote Tables</span>
            </a>
          </li>

          <li>
            <a href="">
              <i className="bi bi-circle"></i><span>Contact</span>
            </a>
          </li>
          
        </ul>
      </li>
      {/* <!-- End Tables Nav --> */}


      <li className="nav-heading">Pages</li>

      <li className="nav-item">
        <a className="nav-link collapsed" href="">
          <i className="bi bi-person"></i>
          <span>Booking</span>
        </a>
      </li>
      {/* <!-- End Profile Page Nav --> */}

      <li className="nav-item">
        <a className="nav-link collapsed" href="pages-faq.html">
          <i className="bi bi-question-circle"></i>
          <span>F.A.Q</span>
        </a>
      </li>
      {/* <!-- End F.A.Q Page Nav --> */}

      <li className="nav-item">
        <a className="nav-link collapsed" href="pages-contact.html">
          <i className="bi bi-envelope"></i>
          <span>Contact</span>
        </a>
      </li>
      {/* <!-- End Contact Page Nav --> */}

      <li className="nav-item">
        
      
            <a className="nav-link collapsed" href="{{route('register')}}">
              <i className="bi bi-card-list"></i>
              <span>Register</span>
            </a>
      
      </li>
      {/* <!-- End Register Page Nav --> */}

      <li className="nav-item">
        <a className="nav-link collapsed" href="pages-login.html">
          <i className="bi bi-box-arrow-in-right"></i>
          <span>Login</span>
        </a>
      </li>
      {/* <!-- End Login Page Nav --> */}

    </ul>

  </aside>
  {/* <!-- End Sidebar--> */}
    </>
  )
}

export default Sidebar