import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaTint,
  FaLeaf,
  FaTools,
  FaShieldAlt,
  FaWater,
  FaAward,
} from "react-icons/fa";

const About = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const features = [
    {
      icon: <FaTint />,
      title: "Pure Water",
      desc: "Advanced multi-stage purification technology for crystal clear drinking water."
    },
    {
      icon: <FaLeaf />,
      title: "Eco Friendly",
      desc: "Designed to reduce water wastage while delivering the highest purification."
    },
    {
      icon: <FaTools />,
      title: "Expert Service",
      desc: "Professional installation, AMC and doorstep repair by trained technicians."
    },
    {
      icon: <FaShieldAlt />,
      title: "Safe Technology",
      desc: "Food-grade materials with international safety standards."
    },
    {
      icon: <FaWater />,
      title: "Smart Purification",
      desc: "RO + UV + UF technology ensuring healthy and safe drinking water."
    },
    {
      icon: <FaAward />,
      title: "Trusted Quality",
      desc: "Thousands of satisfied customers trust Dynamic Resolution every day."
    }
  ];

  return (
    <>
      <section className="about-page">

        {/* Hero */}

        <section className="about-hero">

          <Container>

            <h1 data-aos="fade-down">
              About Dynamic Resolution
            </h1>

            <p data-aos="fade-up">
              Delivering clean, healthy and safe drinking water through
              innovative purification technology.
            </p>

          </Container>

        </section>

        {/* About */}

        <Container className="py-5">

          <Row className="align-items-center gy-5">

            <Col lg={6} data-aos="fade-right">

              <h2 className="section-title">
                Who We Are
              </h2>

              <p className="about-text">

                Dynamic Resolution is dedicated to providing premium water purification
                solutions for homes, offices and commercial establishments.

                Our mission is to ensure every family has access to pure and
                healthy drinking water through advanced purification systems,
                reliable installation and exceptional after-sales support.

              </p>

            </Col>

            <Col lg={6} data-aos="fade-left">

              <div className="glass-card">

                <h3>Our Mission</h3>

                <p>
                  To improve health by delivering reliable and affordable
                  water purification solutions.
                </p>

                <hr />

                <h3>Our Vision</h3>

                <p>
                  To become India's most trusted water purification brand
                  known for innovation, quality and customer satisfaction.
                </p>

              </div>

            </Col>

          </Row>

        </Container>

        {/* Features */}

        <Container className="pb-5">

          <h2 className="section-title text-center mb-5" data-aos="fade-up">
            Why Choose Dynamic Resolution   
          </h2>

          <Row className="g-4">

            {features.map((item, index) => (

              <Col lg={4} md={6} key={index} data-aos="zoom-in">

                <div className="feature-card">

                  <div className="feature-icon">

                    {item.icon}

                  </div>

                  <h4>{item.title}</h4>

                  <p>{item.desc}</p>

                </div>

              </Col>

            ))}

          </Row>

        </Container>

        {/* CTA */}

        <section className="cta-section">

          <Container>

            <h2 data-aos="fade-up">
              Experience Pure Water Every Day
            </h2>

            <p data-aos="fade-up">
              Choose Dynamic Resolution for trusted purification,
              expert installation and reliable service.
            </p>

            <Button size="lg" variant="info">
              Contact Us
            </Button>

          </Container>

        </section>

      </section>

      <style>{`

      .about-page{

          color:#fff;

      }

      .about-hero{

          padding:150px 20px 50px;

          text-align:center;

          background:linear-gradient(
          135deg,
          rgba(7,11,20,.95),
          rgba(15,40,70,.92)
          );

      }

      .about-hero h1{

          font-size:4rem;

          font-weight:700;

          margin-bottom:20px;

      }

      .about-hero p{

          color:#B8C2CC;

          max-width:700px;

          margin:auto;

          font-size:18px;

      }

      .section-title{

          color:#4DD6FF;

          font-weight:700;

          margin-bottom:20px;

      }

      .about-text{

          color:#d5d5d5;

          line-height:2;

          font-size:17px;

      }

      .glass-card{

          background:rgba(255,255,255,.05);

          backdrop-filter:blur(15px);

          border:1px solid rgba(77,214,255,.15);

          border-radius:20px;

          padding:35px;

      }

      .glass-card h3{

          color:#4DD6FF;

      }

      .glass-card p{

          color:#c9d3df;

      }

      .feature-card{

          background:rgba(255,255,255,.05);

          border:1px solid rgba(77,214,255,.12);

          backdrop-filter:blur(12px);

          border-radius:20px;

          text-align:center;

          padding:35px;

          transition:.4s;

          height:100%;

      }

      .feature-card:hover{

          transform:translateY(-10px);

          box-shadow:0 0 30px rgba(77,214,255,.2);

      }

      .feature-icon{

          width:80px;

          height:80px;

          border-radius:50%;

          margin:auto auto 25px;

          display:flex;

          align-items:center;

          justify-content:center;

          font-size:32px;

          color:#fff;

          background:linear-gradient(135deg,#1DA1FF,#4DD6FF);

      }

      .feature-card h4{

          color:#fff;

      }

      .feature-card p{

          color:#B8C2CC;

      }

      .cta-section{

          text-align:center;

          padding:100px 20px;

          margin-top:60px;

          background:linear-gradient(
          135deg,
          rgba(77,214,255,.08),
          rgba(255,255,255,.03)
          );

      }

      .cta-section h2{

          font-weight:700;

          margin-bottom:20px;

      }

      .cta-section p{

          color:#B8C2CC;

          margin-bottom:35px;

      }

      @media(max-width:768px){

          .about-hero h1{

              font-size:2.7rem;

          }

      }

      `}</style>
    </>
  );
};

export default About;