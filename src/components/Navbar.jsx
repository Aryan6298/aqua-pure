import React, { useEffect, useState } from 'react';
import {
  Navbar,
  Nav,
  Container,
  Offcanvas,
  Button,
  Collapse,
} from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/images/final-main-logo.png';

const NavigationBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [topOffset, setTopOffset] = useState(50);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 10);
      setTopOffset(scrollY <= 5 ? 50 : 0);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  
  return (
    <>
      <style>{`
     .navbar-custom {
  position: fixed;
  left: 0;
  width: 100%;
  z-index: 9998;

  background: rgba(4, 20, 42, 0.78);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);

  transition: top .4s ease, background .4s ease, box-shadow .4s ease;
}
       .navbar-fixed {
  background: rgba(4, 20, 42, 0.78);
  box-shadow: 0 8px 20px rgba(0,0,0,.25);
}
        .nav-link {
          color: white !important;
          margin-left: 1rem;
          position: relative;
          opacity: 1;
          transition: transform 1.5s ease, opacity 1.5s ease;
          text-decoration: none !important;
          white-space: nowrap;
        }
        .active-link {
          font-weight: bold;
          color: #26c4bf !important;
        }
        .brand-box {
          display: flex;
          align-items: center;
          opacity: 0;
          transform: translateX(-40px);
          transition: all 0.8s ease;
        }
        .brand-box.scrolled {
          opacity: 1;
          transform: translateX(0);
        }
        .brand-box span {
             color:white;
        }
        .nav-initial-container {
          position: absolute;
          left: 0;
          display: flex;
          gap: 1rem;
        }
        .nav-shifted-container {
          position: static;
          margin-left: auto;
          display: flex;
          gap: 1rem;
        }
        .nav-shifted-container .nav-link {
          opacity: 0;
          transform: translateX(-20px);
        }
        .nav-shifted-container .nav-link:nth-child(1) { opacity: 1; transform: translateX(0); transition-delay: 0.4s; }
        .nav-shifted-container .nav-link:nth-child(2) { opacity: 1; transform: translateX(0); transition-delay: 0.8s; }
        .nav-shifted-container .nav-link:nth-child(3) { opacity: 1; transform: translateX(0); transition-delay: 1.2s; }
        .nav-shifted-container .nav-link:nth-child(4) { opacity: 1; transform: translateX(0); transition-delay: 1.6s; }
        .nav-shifted-container .nav-link:nth-child(5) { opacity: 1; transform: translateX(0); transition-delay: 2s; }
        .nav-shifted-container .nav-link:nth-child(6) { opacity: 1; transform: translateX(0); transition-delay: 2.4s; }
        .nav-shifted-container .nav-link:nth-child(7) { opacity: 1; transform: translateX(0); transition-delay: 2.8s; }
        .nav-link::after {
          content: "";
          position: absolute;
          width: 0%;
          height: 2px;
          bottom: -4px;
          left: 0;
          background: #ffffff;
          transition: width 0.3s ease-in-out;
        }
        .nav-link:hover::after {
          width: 100%;
        }
        .active-link::after {
          width: 100%;
          background: #26c4bf;
        }
        .dropdown-item-custom {
          color: #000;
          text-decoration: none;
          font-weight: 500;
          padding: 5px 10px;
          border-radius: 6px;
          transition: background 0.3s;
          display: inline-block;
        }
        .dropdown-item-custom:hover {
          background-color: #e0f7fa;
          color: #0D5D5B;
          transform: translateX(5px);
        }
        .services-hover {
          position: relative;
          display: inline-block;
        }
        .services-dropdown-menu {
          position: absolute;
          background: white;
          top: 100%;
          left: 0;
          z-index: 1050;
          min-width: 300px;
          padding: 15px;
          border-radius: 8px;
          box-shadow: 0px 4px 12px rgba(0,0,0,0.2);
          display: none;
          margin-top: 5px;
        }
        .services-hover:hover .services-dropdown-menu {
          display: block;
        }
        /* Bullet list styling */
        .services-list {
          list-style-type: disc;
          padding-left: 20px;
          margin: 0;
        }
        .services-list li {
          margin-bottom: 6px;
        }
        .services-list li::marker {
          color: #26c4bf;
          font-size: 1.2em;
        }
        @media (max-width: 991px) {
          .services-dropdown-menu {
            display: none !important;
          }
        }
        .navbar-toggler {
          border: none;
        }
        .navbar-toggler-icon {
          background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='white' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
        }
      `}</style>

      <Navbar expand="lg" className={`navbar-custom py-2 ${scrolled ? 'navbar-fixed' : ''}`} style={{ top: `${topOffset}px` }}>
        <Container fluid className="d-flex justify-content-between align-items-center position-relative">
          <Link to="/" style={{ textDecoration: 'none' }} className={`brand-box ${scrolled ? 'scrolled' : ''}`}>
            <img 
              src={logo} 
              alt="Logo" 
              height="50" 
              className="me-2" 
              style={{
                objectFit: 'contain',
                background: 'transparent'
              }}
            />
            <span className="fw-bold fs-3 ms-2" style={{marginTop:'-15px'}}>DYNAMIC RESOLUTION</span>
            <span style={{ color: 'white', fontSize: '0.9rem', marginTop: '40px', fontStyle: 'italic', marginLeft:'-185px' }}>
             Precision Purification...
            </span>
          </Link>

          <Navbar.Toggle
            aria-controls="offcanvas-navbar"
            className="ms-auto"
            onClick={() => setShowOffcanvas(true)}
          />

          {/* Desktop Menu Only */}
          <Navbar.Collapse id="basic-navbar-nav" className="d-none d-lg-block">
            <Nav className={scrolled ? 'nav-shifted-container' : 'nav-initial-container'}>
              <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''}`}>Home</NavLink>
              {/* <div className="services-hover">
                <NavLink to="/services" className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''}`}>
                  Services ▾
                </NavLink>
                <div className="services-dropdown-menu">
                  <ul className="services-list">
                    <li><Link to="/services/resistivity-surveys" className="dropdown-item-custom">Resistivity Surveys</Link></li>
                    <li><Link to="/services/electromagnetic-surveys" className="dropdown-item-custom">Electromagnetic Surveys</Link></li>
                    <li><Link to="/services/geophysical-investigations" className="dropdown-item-custom">Geophysical Investigations</Link></li>
                    <li><Link to="/services/hydrogeological-studies" className="dropdown-item-custom">Hydrogeological Studies</Link></li>
                    <li><Link to="/services/lithological-modeling" className="dropdown-item-custom">3D Lithological Modeling</Link></li>
                    <li><Link to="/services/groundwater-surveys" className="dropdown-item-custom">Groundwater Surveys</Link></li>
                    <li><Link to="/services/aquifer-recharge" className="dropdown-item-custom">Aquifer Recharge Services</Link></li>
                    <li><Link to="/services/rainwater-harvesting" className="dropdown-item-custom">Rainwater Harvesting</Link></li>
                    <li><Link to="/services/etp-stp-consulting" className="dropdown-item-custom">ETP & STP Consulting</Link></li>
                    <li><Link to="/services/gr-detector-surveys" className="dropdown-item-custom">GR Detector Surveys</Link></li>
                    <li><Link to="/services/borewell-services" className="dropdown-item-custom">Borewell Services</Link></li>
                  </ul>
                </div>
              </div> */}
              {/* <NavLink to="/instruments" className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''}`}>Instruments</NavLink> */}
              <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''}`}>About Us</NavLink>
              <NavLink to="/projects" className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''}`}>Projects</NavLink>
              <NavLink to="/clients" className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''}`}>Clients</NavLink>
              <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''}`}>Contact</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Mobile Offcanvas Menu */}
      <Offcanvas
        show={showOffcanvas}
        onHide={() => setShowOffcanvas(false)}
        placement="end"
        style={{ width: '60%', background: '#0e3d59', color: 'white' }}
      >
        <Offcanvas.Header closeButton closeVariant="white">
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <NavLink to="/" className="nav-link" onClick={() => setShowOffcanvas(false)}>Home</NavLink>
            <Button
              variant="link"
              className="nav-link text-start"
              onClick={() => setServicesOpen(!servicesOpen)}
              style={{ color: 'white', textDecoration: 'none' }}
            >
              Services {servicesOpen ? '⯅' : '⯆'}
            </Button>
            {/* <Collapse in={servicesOpen}>
              <div className="ps-3">
                <ul className="services-list">
                  <li><Link to="/services/resistivity-surveys" className="dropdown-item-custom">Resistivity Surveys</Link></li>
                  <li><Link to="/services/electromagnetic-surveys" className="dropdown-item-custom">Electromagnetic Surveys</Link></li>
                  <li><Link to="/services/geophysical-investigations" className="dropdown-item-custom">Geophysical Investigations</Link></li>
                  <li><Link to="/services/hydrogeological-studies" className="dropdown-item-custom">Hydrogeological Studies</Link></li>
                  <li><Link to="/services/lithological-modeling" className="dropdown-item-custom">3D Lithological Modeling</Link></li>
                  <li><Link to="/services/groundwater-surveys" className="dropdown-item-custom">Groundwater Surveys</Link></li>
                  <li><Link to="/services/aquifer-recharge" className="dropdown-item-custom">Aquifer Recharge Services</Link></li>
                  <li><Link to="/services/rainwater-harvesting" className="dropdown-item-custom">Rainwater Harvesting</Link></li>
                  <li><Link to="/services/etp-stp-consulting" className="dropdown-item-custom">ETP & STP Consulting</Link></li>
                  <li><Link to="/services/gr-detector-surveys" className="dropdown-item-custom">GR Detector Surveys</Link></li>
                  <li><Link to="/services/borewell-services" className="dropdown-item-custom">Borewell Services</Link></li>
                </ul>
              </div>
            </Collapse> */}
            {/* <NavLink to="/instruments" className="nav-link" onClick={() => setShowOffcanvas(false)}>Instruments</NavLink> */}
            <NavLink to="/about" className="nav-link" onClick={() => setShowOffcanvas(false)}>About Us</NavLink>
            <NavLink to="/projects" className="nav-link" onClick={() => setShowOffcanvas(false)}>Projects</NavLink>
            <NavLink to="/clients" className="nav-link" onClick={() => setShowOffcanvas(false)}>Clients</NavLink>
            <NavLink to="/contact" className="nav-link" onClick={() => setShowOffcanvas(false)}>Contact</NavLink>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default NavigationBar;
