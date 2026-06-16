import React, { useEffect, useState } from "react";
import heroVideo from "../assets/videos/hero-video.mp4";
import heroImage from "../assets/images/mobilebg.png";

const Hero = () => {

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);

  }, []);

  return (
    <>
      <section className="hero">

        {isMobile ? (
          <img
            src={heroImage}
            alt="Hero"
            className="hero-image"
          />
        ) : (
          <video
            className="hero-video"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
        )}

        <div className="hero-overlay"></div>

      </section>

      <style>{`

      .hero{
          position:relative;
          width:100%;
          margin-top:110px;
          height:calc(102vh - 80px);
          overflow:hidden;
      }

      .hero-video,
      .hero-image{

          position:absolute;
          inset:0;

          width:100%;
          height:100%;

          object-fit:cover;

      }

      .hero-overlay{
          position:absolute;
          inset:0;
          background:rgba(0,0,0,.15);
      }

      @media(max-width:991px){

          .hero{
              margin-top:100px;
              height:calc(102vh - 80px);
          }

      }

      @media(max-width:768px){

          .hero{
              margin-top:90px;
              height:calc(102vh - 80px);
          }

      }

      `}</style>
    </>
  );
};

export default Hero;