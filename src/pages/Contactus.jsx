import React, { useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <section className="contact-page">

        {/* Hero */}

        <section className="contact-hero">

          <Container>

            <h1 data-aos="fade-down">
              Contact Us
            </h1>

            <p data-aos="fade-up">
              We'd love to hear from you. Reach out to us for enquiries,
              installations or service support.
            </p>

          </Container>

        </section>

        {/* Contact Section */}

        <Container className="py-5">

          <Row className="g-5">

            {/* Contact Details */}

            <Col lg={5} data-aos="fade-right">

              <div className="glass-card">

                <h2 className="section-title">
                  Get In Touch
                </h2>

                <div className="info-box">
                  <FaPhoneAlt className="info-icon" />
                  <div>
                    <h5>Phone</h5>
                    <p>+91 98765 43210</p>
                  </div>
                </div>

                <div className="info-box">
                  <FaEnvelope className="info-icon" />
                  <div>
                    <h5>Email</h5>
                    <p>info@dynamicresolution.com</p>
                  </div>
                </div>

                <div className="info-box">
                  <FaMapMarkerAlt className="info-icon" />
                  <div>
                    <h5>Address</h5>
                    <p>
                      123 Business Park,
                      <br />
                      Indore, Madhya Pradesh
                    </p>
                  </div>
                </div>

                <div className="info-box">
                  <FaClock className="info-icon" />
                  <div>
                    <h5>Working Hours</h5>
                    <p>
                      Monday - Saturday
                      <br />
                      9:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>

              </div>

            </Col>

            {/* Contact Form */}

            <Col lg={7} data-aos="fade-left">

              <div className="glass-card">

                <h2 className="section-title">
                  Send us a Message
                </h2>

                <form
                  action="https://formsubmit.co/YOUR_EMAIL@gmail.com"
                  method="POST"
                >

                  <input
                    type="hidden"
                    name="_captcha"
                    value="false"
                  />

                  <input
                    type="hidden"
                    name="_next"
                    value="https://yourwebsite.com/thank-you"
                  />

                  <Row>

                    <Col md={6}>

                      <Form.Group className="mb-3">

                        <Form.Control
                          type="text"
                          name="Name"
                          placeholder="Full Name"
                          required
                        />

                      </Form.Group>

                    </Col>

                    <Col md={6}>

                      <Form.Group className="mb-3">

                        <Form.Control
                          type="email"
                          name="Email"
                          placeholder="Email Address"
                          required
                        />

                      </Form.Group>

                    </Col>

                  </Row>

                  <Form.Group className="mb-3">

                    <Form.Control
                      type="tel"
                      name="Phone"
                      placeholder="Phone Number"
                      required
                    />

                  </Form.Group>

                  <Form.Group className="mb-3">

                    <Form.Control
                      as="textarea"
                      rows={6}
                      name="Message"
                      placeholder="Write your message..."
                      required
                    />

                  </Form.Group>

                  <Button
                    type="submit"
                    className="submit-btn"
                  >
                    Send Message
                  </Button>

                </form>

              </div>

            </Col>

          </Row>

        </Container>

      </section>

      <style>{`

      .contact-page{

          color:#fff;

      }

      .contact-hero{

          padding:140px 20px 80px;

          text-align:center;

          background:linear-gradient(
          135deg,
          rgba(7,11,20,.95),
          rgba(10,35,60,.92)
          );

      }

      .contact-hero h1{

          font-size:3rem;

          font-weight:700;

          margin-bottom:15px;

      }

      .contact-hero p{

          max-width:700px;

          margin:auto;

          color:#B8C2CC;

      }

      .glass-card{

          background:rgba(255,255,255,.05);

          backdrop-filter:blur(15px);

          border:1px solid rgba(77,214,255,.15);

          border-radius:20px;

          padding:35px;

          height:100%;

      }

      .section-title{

          color:#4DD6FF;

          margin-bottom:30px;

          font-weight:700;

      }

      .info-box{

          display:flex;

          gap:18px;

          margin-bottom:30px;

      }

      .info-icon{

          font-size:28px;

          color:#4DD6FF;

          margin-top:5px;

      }

      .info-box h5{

          color:#fff;

      }

      .info-box p{

          color:#B8C2CC;

          margin:0;

      }

      .form-control{

          background:rgba(255,255,255,.05);

          border:1px solid rgba(77,214,255,.2);

          color:#fff;

          padding:14px;

      }

      .form-control::placeholder{

          color:#b8c2cc;

      }

      .form-control:focus{

          background:rgba(255,255,255,.08);

          color:#fff;

          border-color:#4DD6FF;

          box-shadow:none;

      }

      .submit-btn{

          background:#4DD6FF;

          border:none;

          color:#08111F;

          font-weight:600;

          padding:12px 35px;

          border-radius:50px;

          transition:.3s;

      }

      .submit-btn:hover{

          background:#1DA1FF;

          transform:translateY(-3px);

      }

      @media(max-width:768px){

          .contact-hero{

              padding:120px 20px 60px;

          }

          .contact-hero h1{

              font-size:2.3rem;

          }

      }

      `}</style>
    </>
  );
};

export default Contact;