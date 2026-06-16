import React from "react";
import { Link } from "react-router-dom";
import { FaTint } from "react-icons/fa";

const NotFound = () => {
  return (
    <>
      <section className="notfound-page">

        <div className="water-circle">
          <FaTint />
        </div>

        <h1 className="error-code">
          404
        </h1>

        <h2 className="error-title">
          Page Not Found
        </h2>

        <p className="error-text">
          Oops! The page you're looking for doesn't exist or has been moved.
          Let's get you back to clean waters.
        </p>

        <Link to="/" className="home-btn">
          Back to Home
        </Link>

      </section>

      <style>{`

      .notfound-page{

          min-height:100vh;

          display:flex;

          flex-direction:column;

          align-items:center;

          justify-content:center;

          text-align:center;

          padding:150px;

          background:
          linear-gradient(
          135deg,
          #070B14,
          #081B2F,
          #0B2847
          );

          overflow:hidden;

          position:relative;

      }

      .notfound-page::before{

          content:"";

          position:absolute;

          inset:0;

          background:
          radial-gradient(circle at top left, rgba(77,214,255,.08), transparent 30%),
          radial-gradient(circle at bottom right, rgba(29,161,255,.08), transparent 30%);

          pointer-events:none;

      }

      .water-circle{

          width:140px;

          height:140px;

          border-radius:50%;

          display:flex;

          align-items:center;

          justify-content:center;

          background:linear-gradient(135deg,#1DA1FF,#4DD6FF);

          color:#fff;

          font-size:60px;

          margin-bottom:35px;

          box-shadow:
          0 0 35px rgba(77,214,255,.45);

          animation:float 3s ease-in-out infinite;

      }

      @keyframes float{

          0%{

              transform:translateY(0);

          }

          50%{

              transform:translateY(-15px);

          }

          100%{

              transform:translateY(0);

          }

      }

      .error-code{

          font-size:8rem;

          font-weight:800;

          color:#4DD6FF;

          margin:0;

          line-height:1;

          text-shadow:0 0 25px rgba(77,214,255,.4);

      }

      .error-title{

          color:#fff;

          font-size:2.5rem;

          margin-top:15px;

          margin-bottom:20px;

          font-weight:700;

      }

      .error-text{

          max-width:650px;

          color:#B8C2CC;

          font-size:18px;

          line-height:1.8;

          margin-bottom:40px;

      }

      .home-btn{

          display:inline-block;

          padding:14px 42px;

          border-radius:50px;

          background:linear-gradient(
          135deg,
          #1DA1FF,
          #4DD6FF
          );

          color:#fff;

          text-decoration:none;

          font-size:17px;

          font-weight:600;

          transition:.35s;

          box-shadow:
          0 10px 25px rgba(77,214,255,.25);

      }

      .home-btn:hover{

          transform:translateY(-5px);

          color:#fff;

          box-shadow:
          0 18px 40px rgba(77,214,255,.35);

      }

      @media(max-width:768px){

          .water-circle{

              width:110px;

              height:110px;

              font-size:45px;

          }

          .error-code{

              font-size:5rem;

          }

          .error-title{

              font-size:2rem;

          }

          .error-text{

              font-size:16px;

          }

      }

      `}</style>
    </>
  );
};

export default NotFound;