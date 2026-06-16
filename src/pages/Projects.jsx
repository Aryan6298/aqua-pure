import React, { useEffect } from "react";
import { Container, Row, Col, Badge } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaMapMarkerAlt,
  FaCheckCircle,
  FaTint,
  FaBuilding,
} from "react-icons/fa";

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const projects = [
    {
      name: "Project Alpha",
      category: "Residential RO Installation",
      location: "Indore, MP",
      desc: "Successfully installed a premium RO + UV water purification system for a residential community.",
    },
    {
      name: "Project Omega",
      category: "Commercial Water Solution",
      location: "Bhopal, MP",
      desc: "Designed and installed a high-capacity purification system for a corporate office.",
    },
    {
      name: "Project Aqua",
      category: "Luxury Villa",
      location: "Ujjain",
      desc: "Complete home water purification solution with smart filtration technology.",
    },
    {
      name: "Project Crystal",
      category: "Educational Institute",
      location: "Indore",
      desc: "Installed drinking water purification units across the entire campus.",
    },
    {
      name: "Project Hydro",
      category: "Industrial RO Plant",
      location: "Pithampur",
      desc: "Industrial RO plant designed for manufacturing and production facilities.",
    },
    {
      name: "Project PureFlow",
      category: "Hotel Water System",
      location: "Bhopal",
      desc: "Installed commercial RO systems for hotels and hospitality businesses.",
    },
    {
      name: "Project BlueWave",
      category: "Hospital Water System",
      location: "Dewas",
      desc: "Medical-grade water purification system ensuring clean and safe drinking water.",
    },
    {
      name: "Project AquaShield",
      category: "Community Project",
      location: "Rau",
      desc: "Large-scale community drinking water purification project.",
    },
    {
      name: "Project Nova",
      category: "Apartment Installation",
      location: "Indore",
      desc: "Multi-stage purification system serving over 100 residential apartments.",
    },
  ];

  return (
    <>
      <section className="projects-page">

        <Container>

          <div className="hero-section text-center" data-aos="fade-down">
            <h1>Our Projects</h1>
            <p>
              Delivering innovative water purification solutions for homes,
              businesses and industries.
            </p>
          </div>

          <Row className="g-4">

            {projects.map((project, index) => (

              <Col lg={4} md={6} key={index} data-aos="zoom-in">

                <div className="project-card">

                  <div className="project-icon">
                    <FaTint />
                  </div>

                  <h3>{project.name}</h3>

                  <Badge bg="info" className="mb-3">
                    {project.category}
                  </Badge>

                  <p>{project.desc}</p>

                  <div className="project-info">

                    <div>
                      <FaMapMarkerAlt className="me-2 text-info" />
                      {project.location}
                    </div>

                    <div className="mt-2">
                      <FaBuilding className="me-2 text-info" />
                      Dynamic Resolution
                    </div>

                    <div className="mt-2">
                      <FaCheckCircle className="me-2 text-success" />
                      Completed
                    </div>

                  </div>

                </div>

              </Col>

            ))}

          </Row>

        </Container>

      </section>

      <style>{`

      .projects-page{

          padding:150px 0 80px;

          color:#fff;

      }

      .hero-section{

          margin-bottom:70px;

      }

      .hero-section h1{

          font-size:3rem;

          font-weight:700;

          color:#fff;

      }

      .hero-section p{

          color:#B8C2CC;

          max-width:700px;

          margin:auto;

      }

      .project-card{

          background:rgba(255,255,255,.05);

          border:1px solid rgba(77,214,255,.15);

          backdrop-filter:blur(15px);

          border-radius:20px;

          padding:35px;

          height:100%;

          transition:.4s;

      }

      .project-card:hover{

          transform:translateY(-10px);

          border-color:#4DD6FF;

          box-shadow:0 0 30px rgba(77,214,255,.2);

      }

      .project-icon{

          width:75px;

          height:75px;

          border-radius:50%;

          display:flex;

          align-items:center;

          justify-content:center;

          margin-bottom:25px;

          background:linear-gradient(135deg,#1DA1FF,#4DD6FF);

          color:#fff;

          font-size:30px;

      }

      .project-card h3{

          color:#fff;

          margin-bottom:15px;

      }

      .project-card p{

          color:#B8C2CC;

          line-height:1.7;

      }

      .project-info{

          margin-top:20px;

          color:#dbe7ef;

      }

      @media(max-width:768px){

          .projects-page{

              padding:120px 0 60px;

          }

          .hero-section h1{

              font-size:2.3rem;

          }

      }

      `}</style>
    </>
  );
};

export default Projects;