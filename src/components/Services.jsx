import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import AOS from "aos";
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import Seo from "./Seo.jsx";

import client1 from "../assets/images/clients/ABL.png";
import client2 from "../assets/images/clients/Arihant.jpg";
import client3 from "../assets/images/clients/Dabur.jpg";
import client4 from "../assets/images/clients/Hindustan.png";
import client5 from "../assets/images/clients/IMA-PG.jpg";
import client6 from "../assets/images/clients/MEIL.jpg";
import client7 from "../assets/images/clients/NNI.jpg";
import client8 from "../assets/images/clients/Parle-G.png";
import client9 from "../assets/images/clients/PGP.jpg";
import client10 from "../assets/images/clients/PMKSY.jpg";
import client11 from "../assets/images/clients/SUF.jpg";
import client12 from "../assets/images/clients/ultra-tech-cement.png";

import customer1 from "../assets/images/clients/Parle-G.png";
import customer2 from "../assets/images/clients/Parle-G.png";
import customer3 from "../assets/images/clients/Parle-G.png";
import customer4 from "../assets/images/clients/Parle-G.png";
import customer5 from "../assets/images/clients/Parle-G.png";
import customer6 from "../assets/images/clients/Parle-G.png";
import customer7 from "../assets/images/clients/Parle-G.png";
import customer8 from "../assets/images/clients/Parle-G.png";
import customer9 from "../assets/images/clients/Parle-G.png";
import customer10 from "../assets/images/clients/Parle-G.png";
import customer11 from "../assets/images/clients/Parle-G.png";
import customer12 from "../assets/images/clients/Parle-G.png";
import customer13 from "../assets/images/clients/Parle-G.png";
import customer14 from "../assets/images/clients/Parle-G.png";
import customer15 from "../assets/images/clients/Parle-G.png";
import customer16 from "../assets/images/clients/Parle-G.png";
import customer17 from "../assets/images/clients/Parle-G.png";
import customer18 from "../assets/images/clients/Parle-G.png";
import { div } from "framer-motion/m";
console.log("Marquee:", Marquee);
console.log("Seo:", Seo);
console.log("Link:", Link);
// import Footer from "../components/Footer";
// import NavigationBar from "../components/Navbar";
// import TopBar from "../components/TopBar";

const ServicesPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [showAllClients, setShowAllClients] = useState(false);
  const [showAllPortfolio, setShowAllPortfolio] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [videoDismissed, setVideoDismissed] = useState(false);

  const handleShowClients = () => {
    setShowAllClients(true);
    setTimeout(() => setShowAllClients(false), 4000);
  };

  const handleShowPortfolio = () => {
    setShowAllPortfolio(true);
    setTimeout(() => setShowAllPortfolio(false), 4000);
  };

  const handleCloseVideo = () => {
    setShowVideo(false);
    setVideoDismissed(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400 && !showVideo && !videoDismissed) {
        setShowVideo(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showVideo, videoDismissed]);

const servicesData = [
  [
    "1",
    "Domestic RO Water Purifier Installation",
    "Installation",
    "Professional installation of RO, UV, and UF water purifiers for homes.",
    "Residential"
  ],
  [
    "2",
    "Commercial Water Purifier Installation",
    "Commercial Solutions",
    "Installation of high-capacity water purification systems for offices, schools, hospitals, and restaurants.",
    "Commercial"
  ],
  [
    "3",
    "RO Water Purifier Repair",
    "Repair & Maintenance",
    "Quick diagnosis and repair of all major RO water purifier brands.",
    "Residential, Commercial"
  ],
  [
    "4",
    "Annual Maintenance Contract (AMC)",
    "Maintenance",
    "Affordable yearly maintenance plans including regular servicing and filter replacement.",
    "Residential, Commercial"
  ],
  [
    "5",
    "RO Filter Replacement",
    "Filter Services",
    "Replacement of Sediment, Carbon, UF, UV, and RO membranes using genuine spare parts.",
    "Residential"
  ],
  [
    "6",
    "RO Membrane Replacement",
    "Filter Services",
    "High-quality membrane replacement to maintain excellent water purification performance.",
    "Residential, Commercial"
  ],
  [
    "7",
    "UV & UF System Servicing",
    "Maintenance",
    "Complete cleaning and servicing of UV and UF purification systems.",
    "Residential"
  ],
  [
    "8",
    "Water Quality Testing",
    "Testing",
    "Testing TDS, pH, hardness, and other water quality parameters before installation.",
    "Residential, Commercial"
  ],
  [
    "9",
    "TDS Controller Adjustment",
    "Water Optimization",
    "Optimize purified water taste by adjusting the TDS controller according to water quality.",
    "Residential"
  ],
  [
    "10",
    "Complete RO System Sanitization",
    "Health & Hygiene",
    "Deep cleaning and sanitization of water purifier tanks and pipelines.",
    "Residential, Commercial"
  ],
  [
    "11",
    "Industrial RO Plant Installation",
    "Industrial Solutions",
    "Design and installation of industrial reverse osmosis plants for factories and industries.",
    "Industrial"
  ],
  [
    "12",
    "Water Softener Installation",
    "Water Treatment",
    "Installation of water softening systems for hard water removal.",
    "Residential, Commercial"
  ],
  [
    "13",
    "Whole House Water Filtration",
    "Water Treatment",
    "Complete filtration systems providing purified water to the entire home.",
    "Residential"
  ],
  [
    "14",
    "RO Spare Parts Supply",
    "Accessories",
    "Supply of genuine filters, pumps, membranes, SMPS, faucets, and other spare parts.",
    "Residential, Commercial"
  ],
  [
    "15",
    "Emergency RO Repair Service",
    "Repair",
    "Same-day emergency repair service by experienced technicians.",
    "Residential, Commercial"
  ],
  [
    "16",
    "New Water Purifier Sales",
    "Sales",
    "Wide range of domestic and commercial water purifiers with warranty.",
    "Residential, Commercial"
  ],
  [
    "17",
    "Free Water Consultation",
    "Consultation",
    "Expert guidance to choose the right water purifier based on your water source and TDS level.",
    "Residential"
  ],
  [
    "18",
    "RO System Upgrade",
    "Upgrade",
    "Upgrade existing water purifiers with advanced purification technologies and smart features.",
    "Residential, Commercial"
  ],
  [
    "19",
    "AMC Renewal & Customer Support",
    "Customer Care",
    "Dedicated after-sales support with timely AMC renewals and doorstep service.",
    "Residential, Commercial"
  ]
];

  const portfolioItems = [
    { image: customer1, title: "Happy Customer 1" },
    { image: customer2, title: "Happy Customer 2" },
    { image: customer3, title: "Happy Customer 3" },
    { image: customer4, title: "Happy Customer 4" },
    { image: customer5, title: "Happy Customer 5" },
    { image: customer6, title: "Happy Customer 6" },
    { image: customer7, title: "Happy Customer 7" },
    { image: customer8, title: "Happy Customer 8" },
    { image: customer9, title: "Happy Customer 9" },
    { image: customer10, title: "Happy Customer 10" },
    { image: customer11, title: "Happy Customer 11" },
    { image: customer12, title: "Happy Customer 12" },
    { image: customer13, title: "Happy Customer 13" },
    { image: customer14, title: "Happy Customer 14" },
    { image: customer15, title: "Happy Customer 15" },
    { image: customer16, title: "Happy Customer 16" },
    { image: customer17, title: "Happy Customer 17" },
    { image: customer18, title: "Happy Customer 18" },
  ];

  const logoStyle = {
    height: "110px",
    margin: "0 30px",
    objectFit: "contain",
    borderRadius: "15px",
    transition: "transform 0.5s ease",
    boxShadow: "0 4px 15px rgba(0,0,0,0.2)"
  };

  const portfolioItemStyle = {
    width: "280px",
    margin: "0 20px",
    textAlign: "center",
    transition: "transform 0.4s ease"
  };

  const imageStyle = {
    width: "100%",
    height: "180px",
    objectFit: "cover",
    borderRadius: "12px",
    boxShadow: "0 6px 25px rgba(0,0,0,0.2)",
    transition: "transform 0.4s ease, box-shadow 0.4s ease"
  };

  const portfolioRows = [
    portfolioItems.slice(0, Math.ceil(portfolioItems.length / 2)),
    portfolioItems.slice(Math.ceil(portfolioItems.length / 2))
  ];

  return (
    <>
      <Seo 
        title="Geocon Services | Geotechnical & Geophysical Experts"
        description="Comprehensive environmental and geoscience services including groundwater management, geophysical surveys, and environmental consulting. Expert solutions for sustainable development."
        keywords="Geocon, Services, Geocon Services, geotechnical experts, geophysical specialists, environmental engineering, groundwater management, geophysical surveys, water conservation, environmental consulting, geotechnical services, geophysical consulting, groundwater specialists, environmental specialists, water management experts, geological services, hydrogeological experts, resistivity surveys, electromagnetic surveys, aquifer mapping, borewell services"
        path="/services"
      />
      
      {/* TopBar */}
      {/* <div style={{ position: 'relative', zIndex: 1030 }}>
        <TopBar />
      </div> */}

      {/* NavigationBar */}
      {/* <div style={{ position: 'relative', zIndex: 1040, paddingBottom: '30px' }}>
        <NavigationBar />
      </div> */}

      <div className="container my-5">
        <style>{`
          .client-heading {
            font-size: 2.6rem;
            font-weight: 700;
            color: #ffffff;
            text-align: center;
            margin-bottom: 3rem;
            text-shadow: 1px 1px 3px rgba(0,0,0,0.5);
            transition: all 0.4s ease;
          }
          .client-heading:hover {
            color: #ffeb3b;
            font-size: 2.8rem;
          }
          .portfolio-caption {
            margin-top: 10px;
            font-weight: 600;
            color: #d4edda;
            transition: color 0.3s ease;
          }
          .portfolio-image:hover {
            transform: scale(1.08);
            box-shadow: 0 10px 35px rgba(0,0,0,0.4);
          }
          .marquee-logo:hover {
            transform: scale(1.12);
            filter: brightness(1.1);
          }
          .floating-video {
            position: fixed;
            bottom: 80px;
            right: 20px;
            z-index: 9999;
            width: 320px;
            height: 180px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.3);
            border-radius: 10px;
            overflow: hidden;
            animation: fadeIn 0.5s ease-in-out;
            background: black;
          }
          .close-btn {
            position: absolute;
            top: 5px;
            right: 10px;
            font-size: 22px;
            color: white;
            cursor: pointer;
            z-index: 10;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>

        {/* Clients Section */}
      {/* Clients Section */}
<div
  className="my-5 py-5 px-3 rounded"
  style={{
    backgroundColor: "rgba(255,255,255,0.05)",
    cursor: "pointer",
    overflow: "hidden",
  }}
  data-aos="zoom-in"
  onClick={handleShowClients}
>
  <h3 className="client-heading">Our Clients (Click to Expand)</h3>

  {showAllClients ? (
    <div className="d-flex flex-wrap justify-content-center gap-4">
      {[client1, client2, client3, client4, client5, client6, client7, client8, client9, client10, client11, client12].map((logo, i) => (
        <img
          key={i}
          src={logo}
          alt={`Client ${i + 1}`}
          className="marquee-logo"
          style={logoStyle}
        />
      ))}
    </div>
  ) : (
    <>
      <div className="logo-slider">
        <div className="logo-track">
          {[client1, client2, client3, client4, client5, client6, client7, client8, client9, client10, client11, client12,
            client1, client2, client3, client4, client5, client6, client7, client8, client9, client10, client11, client12].map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt={`Client ${i + 1}`}
              className="marquee-logo"
              style={logoStyle}
            />
          ))}
        </div>
      </div>

    <style>{`
  .logo-slider{
    overflow:hidden;
    width:100%;
    position:relative;
  }

  .logo-track{
    display:flex;
    width:max-content;
    animation:scrollLogos 30s linear infinite;
    gap:30px;
  }

  @keyframes scrollLogos{
    from{
      transform:translateX(0);
    }
    to{
      transform:translateX(-50%);
    }
  }
`}</style>
    </>
  )}
</div>

       {/* Services Table */}
<div className="table-responsive mb-5" data-aos="fade-up">
  <h3 className="client-heading mb-4">Our Services</h3>

  <table className="table custom-service-table align-middle">
    <thead>
      <tr>
        <th style={{ width: "6%" }}>#</th>
        <th style={{ width: "34%" }}>Service</th>
        <th style={{ width: "18%" }}>Category</th>
        <th style={{ width: "27%" }}>Purpose</th>
        <th style={{ width: "15%" }}>Sector</th>
      </tr>
    </thead>

    <tbody>
      {servicesData.map((service, index) => (
        <tr key={index}>
          {service.map((field, i) => (
            <td key={i}>{field}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>

  <style>{`

    .custom-service-table{
      background:rgba(12, 20, 35, 0.5);
      backdrop-filter:blur(15px);
      -webkit-backdrop-filter:blur(15px);

      border:1px solid rgba(77,214,255,.15);
      border-radius:18px;

      overflow:hidden;
      color:#E2E8F0;

      margin-bottom:0;
    }

    .custom-service-table thead th{

      background:#0B1F3A !important;

      color:#4DD6FF !important;

      font-size:15px;

      font-weight:700;

      text-transform:uppercase;

      letter-spacing:.6px;

      text-align:center;

      border-color:rgba(77,214,255,.15) !important;

      padding:18px;

    }

    .custom-service-table tbody td{

      background:rgba(12, 20, 35, 0.68) !important;

      color:#E2E8F0 !important;

      border-color:rgba(255,255,255,.06) !important;

      padding:18px;

      vertical-align:middle;

      transition:.35s;

    }

    .custom-service-table tbody tr:hover td{

      background:rgba(29,161,255,.12) !important;

      color:#fff !important;

    }

    .custom-service-table tbody tr{

      transition:.35s;

    }

    .custom-service-table tbody tr td:first-child{

      text-align:center;

      font-weight:700;

      color:#4DD6FF !important;

    }

    @media(max-width:768px){

      .custom-service-table thead th,
      .custom-service-table tbody td{

        padding:12px;
        font-size:13px;

      }

    }

  `}</style>
</div>
       {/* Portfolio Section */}
<div
  className="mb-5"
  data-aos="fade-up"
  style={{
    backgroundColor: "rgba(255,255,255,0.05)",
    cursor: "pointer",
    overflow: "hidden",
  }}
  onClick={handleShowPortfolio}
>
  <h3 className="client-heading">Happy Customers (Click to Expand)</h3>

  {showAllPortfolio ? (
    <div className="d-flex flex-wrap justify-content-center gap-4">
      {portfolioItems.map((item, index) => (
        <div key={index} style={portfolioItemStyle}>
          <Link to={`/customers/${index + 1}`}>
            <img
              src={item.image}
              alt={`Customer ${index + 1}`}
              className="portfolio-image"
              style={imageStyle}
            />
          </Link>

          <div className="portfolio-caption">
            {index + 1}. {item.title}
          </div>
        </div>
      ))}
    </div>
  ) : (
    <>
      {/* First Row */}
      <div className="customer-slider">
        <div className="customer-track-right">
          {[...portfolioRows[0], ...portfolioRows[0]].map((item, index) => (
            <div key={index} style={portfolioItemStyle}>
              <Link to={`/customers/${(index % portfolioRows[0].length) + 1}`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="portfolio-image"
                  style={imageStyle}
                />
              </Link>

              <div className="portfolio-caption">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Second Row */}
      <div className="customer-slider mt-4">
        <div className="customer-track-left">
          {[...portfolioRows[1], ...portfolioRows[1]].map((item, index) => (
            <div key={index} style={portfolioItemStyle}>
              <Link to={`/customers/${(index % portfolioRows[1].length) + portfolioRows[0].length + 1}`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="portfolio-image"
                  style={imageStyle}
                />
              </Link>

              <div className="portfolio-caption">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .customer-slider{
          width:100%;
          overflow:hidden;
        }

        .customer-track-right,
        .customer-track-left{
          display:flex;
          width:max-content;
          gap:20px;
        }

        .customer-track-right{
          animation:scrollRight 35s linear infinite;
        }

        .customer-track-left{
          animation:scrollLeft 35s linear infinite;
        }

        @keyframes scrollRight{
          from{
            transform:translateX(-50%);
          }
          to{
            transform:translateX(0);
          }
        }

        @keyframes scrollLeft{
          from{
            transform:translateX(0);
          }
          to{
            transform:translateX(-50%);
          }
        }
      `}</style>
    </>
  )}
</div>

        {/* Floating YouTube Video */}
        {showVideo && (
          <div className="floating-video">
            <div className="close-btn" onClick={handleCloseVideo}>×</div>
            <iframe
              src="https://www.youtube.com/embed/C9bVHOAgPWE?si=gHcma4FeuDciIi9L"
              title="YouTube video"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default ServicesPage; 