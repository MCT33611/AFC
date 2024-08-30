import React from "react";
import dark_arrow from "../../assets/dark_arrow.jpeg";
import { Link } from "react-scroll";
import hero2 from "../../assets/hero2.jpg";

const Hero = () => {
  return (
    <>
      <style>
        {`
          .hero {
            width: 100%;
            min-height: 100vh;
            background: linear-gradient(
                rgba(144, 238, 144, 0.527),
                rgba(144, 238, 144, 0.299)
              ),
              url("${hero2}");
            background-size: cover;
            background-position: center;
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .hero-text {
            text-align: center;
            max-width: 800px;
          }
          .hero-text h1 {
            font-size: 60px;
            font-weight: 600;
          }
          .hero-text p {
            max-width: 700px;
            margin: 10px auto 20px;
            line-height: 1.4;
          }
          .contacts {
            padding: 2px;
            padding-left: 4px;
            padding-right: 4px;
            background: #f4f4f452;
            border-radius: 5px;
            color: #0c1139fd;
            width: max-content;
            flex-wrap: wrap;
          }
          @media (max-width: 850px) {
            .hero {
              background-position: right;
              background-position-x: 80%;
            }
            .hero-text h1 {
              font-size: 40px;
            }
          }
          @media (max-width: 650px) {
            .hero-text h1 {
              font-size: 30px;
              max-width: 400px;
              margin: auto;
            }
            .hero-text p {
              font-size: 14px;
              margin: 15px auto 30px;
            }
          }
        `}
      </style>
      <div className="hero l-container" id="hero">
        <div className="hero-text">
          <h1 className="text-black">
            Fit with <span className="text-yellow-500">Ashmi</span> in Just 15
            Days{" "}
          </h1>
          <p className="text-black">
            Welcome to the Ashmi Fitness Challenge, a transformative 15-day
            fitness challenge for women. With over 5,000 successful
            transformations and a team of dedicated nutritionists and fitness
            experts, we’re here to help you achieve your health and fitness
            goals. Join us today to start your journey toward a fitter, more
            confident you!
          </p>
          <span>
            <p className="contacts">
              Join now only WhatsApp: +91 9526622809, +971 521845251
            </p>
          </span>
          <Link
            className="btn"
            to="details"
            smooth={true}
            offset={-150}
            duration={500}
          >
            {" "}
            Explore more <img src={dark_arrow} alt="dark_arrow" width={"5%"} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Hero;
