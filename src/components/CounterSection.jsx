import React, { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaTint,
  FaUsers,
  FaTools,
  FaAward,
} from "react-icons/fa";

const CounterSection = () => {

  const counterRefs = useRef([]);

  const counters = [
    {
      icon: <FaTint />,
      value: 100000,
      suffix: "+",
      label: "Litres Purified",
    },
    {
      icon: <FaUsers />,
      value: 2500,
      suffix: "+",
      label: "Happy Customers",
    },
    {
      icon: <FaTools />,
      value: 750,
      suffix: "+",
      label: "Installations",
    },
    {
      icon: <FaAward />,
      value: 99,
      suffix: "%",
      label: "Customer Satisfaction",
    },
  ];

  useEffect(() => {

    const observer = new IntersectionObserver(

      (entries) => {

        entries.forEach((entry) => {

          if (!entry.isIntersecting) return;

          const el = entry.target;

          const end = Number(el.dataset.target);

          const suffix = el.dataset.suffix;

          let current = 0;

          const step = Math.ceil(end / 100);

          const timer = setInterval(() => {

            current += step;

            if (current >= end) {

              current = end;

              clearInterval(timer);

            }

            el.innerText = current.toLocaleString() + suffix;

          }, 20);

          observer.unobserve(el);

        });

      },

      {
        threshold: 0.4,
      }

    );

    counterRefs.current.forEach((item) => {

      if (item) observer.observe(item);

    });

    return () => observer.disconnect();

  }, []);

  return (
    <>
      <section className="counter-section">

        <Container>

          <Row className="g-4">

            {counters.map((c, i) => (

              <Col lg={3} md={6} sm={6} xs={12} key={i}>

                <div className="counter-card">

                  <span className="counter-icon">
                    {c.icon}
                  </span>

                  <div
                    className="counter-value"
                    ref={(el) => (counterRefs.current[i] = el)}
                    data-target={c.value}
                    data-suffix={c.suffix}
                  >
                    0{c.suffix}
                  </div>

                  <div className="counter-label">
                    {c.label}
                  </div>

                </div>

              </Col>

            ))}

          </Row>

        </Container>

      </section>

      <style>{`

      .counter-section{

          padding:90px 0;

      }

      .counter-card{

          background:rgba(255,255,255,.05);

          backdrop-filter:blur(5px);

          border:1px solid rgba(77,214,255,.15);

          border-radius:20px;

          padding:40px 20px;

          text-align:center;

          transition:.4s;

          height:100%;

      }

      .counter-card:hover{

          transform:translateY(-8px);

          border-color:#4DD6FF;

          box-shadow:0 0 30px rgba(77,214,255,.18);

      }

      .counter-icon{

          width:85px;

          height:85px;

          margin:auto;

          border-radius:50%;

          display:flex;

          align-items:center;

          justify-content:center;

          background:linear-gradient(135deg,#1DA1FF,#4DD6FF);

          color:#fff;

          font-size:34px;

          margin-bottom:25px;

      }

      .counter-value{

          color:#fff;

          font-size:3rem;

          font-weight:700;

      }

      .counter-label{

          margin-top:10px;

          color:#B8C2CC;

          font-size:17px;

          letter-spacing:.5px;

      }

      @media(max-width:768px){

          .counter-value{

              font-size:2.3rem;

          }

      }

      `}</style>
    </>
  );
};

export default CounterSection;