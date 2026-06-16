import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/images/final-main-logo.png";

const TopBar = () => {
  const [showTopBar, setShowTopBar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Show only when page is at the very top
      setShowTopBar(window.scrollY <= 5);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={`topbar ${showTopBar ? "show" : "hide"}`}>
        <Container>
          <Row className="align-items-center">
            <Col lg={6} md={6}>
              <Link to="/" className="logo-area">
                <img src={logo} alt="Logo" />
                <div className="ms-3">
                  <h2 className="company-name">DYNAMIC RESOLUTION</h2>
                  <span className="tagline">Precision Purification</span>
                </div>
              </Link>
            </Col>

            <Col lg={6} md={6}>
              <div className="contact-wrapper">
                <a href="tel:+919893132012" className="topbar-link">
                  <FaPhoneAlt />
                  <span>+91 98931 32012</span>
                </a>

                <span className="divider"></span>

                <a
                  href="mailto:info@aquapure.com"
                  className="topbar-link"
                >
                  <FaEnvelope />
                  <span>info@aquapure.com</span>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <style>{`
        .topbar{
          position:fixed;
          top:0;
          left:0;
          width:100%;
          z-index:9999;
          padding:0px 0;
          background:rgba(2, 15, 32, 0.72);
          backdrop-filter:blur(18px);
          -webkit-backdrop-filter:blur(18px);
          border-bottom:1px solid rgba(77,214,255,0.15);
          transition:transform .4s ease;
        }

        .topbar.show{
          transform:translateY(0);
        }

        .topbar.hide{
          transform:translateY(-100%);
        }

        .logo-area{
          display:flex;
          align-items:center;
          text-decoration:none;
          width:fit-content;
        }

        .logo-area img{
          width:50px;
          height:50px;
          object-fit:contain;
          transition:.4s;
        }

        .logo-area:hover img{
          transform:scale(1.08) rotate(-8deg);
        }

        .company-name{
          margin:0;
          color:#fff;
          font-size:1rem;
          font-weight:700;
          transition:.3s;
        }

        .logo-area:hover .company-name{
          color:#4DD6FF;
        }

        .tagline{
          color:#4DD6FF;
          font-size:.92rem;
          letter-spacing:1px;
        }

        .contact-wrapper{
          display:flex;
          justify-content:flex-end;
          align-items:center;
          gap:22px;
        }

        .topbar-link{
          display:flex;
          align-items:center;
          gap:8px;
          color:#fff;
          text-decoration:none;
          font-size:15px;
          transition:.3s;
        }

        .topbar-link svg{
          color:#4DD6FF;
        }

        .topbar-link:hover{
          color:#4DD6FF;
        }

        .divider{
          width:1px;
          height:22px;
          background:rgba(255,255,255,.15);
        }

        @media(max-width:991px){
          .logo-area{
            justify-content:center;
            margin-bottom:15px;
          }

          .contact-wrapper{
            justify-content:center;
          }
        }

        @media(max-width:768px){
          .company-name{
            font-size:1.6rem;
          }

          .tagline{
            font-size:.8rem;
          }

          .contact-wrapper{
            flex-direction:column;
            gap:10px;
          }

          .divider{
            display:none;
          }
        }
      `}</style>
    </>
  );
};

export default TopBar;
