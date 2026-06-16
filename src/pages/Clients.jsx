import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

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

const Clients = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
    });
  }, []);

  const clients = [
    client1,
    client2,
    client3,
    client4,
    client5,
    client6,
    client7,
    client8,
    client9,
    client10,
    client11,
    client12,
  ];

  return (
    <>
      <section className="clients-page">

        <div className="container">

          <h1 className="page-title" data-aos="fade-down">
            Our Trusted Clients
          </h1>

          <p className="page-subtitle" data-aos="fade-up">
            We are proud to work with leading organizations across different
            industries.
          </p>

          <div className="row g-4 mt-3">

            {clients.map((logo, index) => (
              <div
                className="col-xl-3 col-lg-4 col-md-6 col-sm-6"
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 70}
              >
                <div className="client-card">

                  <img
                    src={logo}
                    alt={`Client ${index + 1}`}
                    className="client-logo"
                  />

                </div>
              </div>
            ))}

          </div>

        </div>

      </section>

      <style>{`

      .clients-page{

          padding:170px 0 100px;

          min-height:100vh;

      }

      .page-title{

          text-align:center;

          color:#ffffff;

          font-size:3rem;

          font-weight:700;

          margin-bottom:15px;

      }

      .page-subtitle{

          text-align:center;

          color:#B8C2CC;

          font-size:18px;

          max-width:700px;

          margin:0 auto 50px;

      }

      .client-card{

          background:rgba(255,255,255,.05);

          backdrop-filter:blur(15px);

          -webkit-backdrop-filter:blur(15px);

          border:1px solid rgba(77,214,255,.15);

          border-radius:20px;

          height:220px;

          display:flex;

          align-items:center;

          justify-content:center;

          transition:.4s;

          overflow:hidden;

      }

      .client-card:hover{

          transform:translateY(-10px);

          border-color:#4DD6FF;

          box-shadow:0 0 30px rgba(77,214,255,.20);

      }

      .client-logo{

          width:80%;

          height:130px;

          object-fit:contain;

          transition:.4s;

      }

      .client-card:hover .client-logo{

          transform:scale(1.08);

      }

      @media(max-width:768px){

          .clients-page{

              padding:140px 0 80px;

          }

          .page-title{

              font-size:2.3rem;

          }

          .client-card{

              height:180px;

          }

      }

      `}</style>
    </>
  );
};

export default Clients;