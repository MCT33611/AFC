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
            Welcome to the Ashmi Fitness Challenge, a transformative 
            15-day fitness challenge for women. With over 5,000 successful
            transformations and a team of dedicated nutritionists and fitness
            experts, we’re here to help you achieve your health and fitness
            goals. Join us today to start your journey toward a fitter, more
            confident you!
          </p>
          <span>
            <p className="contacts">
              Join now only WhatsApp: <br className="block md:hidden lg:hidden" />
              +91 8848556842, +971 552510029, +916282609179
            </p>
          </span>
          <div className="flex space-x-4 justify-center mb-3">
            {/* Social media icons remain unchanged */}
            <a
              href="https://www.instagram.com/afc_ashmi_ftness_challenge?igsh=MXA0NzJ1YWpxMGc1Yg%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@Afcprogram"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 hover:text-red-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
              </svg>
            </a>
            <a
              href="https://wa.me/916282609179"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.014 8.00613C6.12827 7.1024 7.30277 5.87414 8.23488 6.01043L8.23339 6.00894C9.14051 6.18132 9.85859 7.74261 10.2635 8.44465C10.5504 8.95402 10.3641 9.4701 10.0965 9.68787C9.7355 9.97883 9.17099 10.3803 9.28943 10.7834C9.5 11.5 12 14 13.2296 14.7107C13.695 14.9797 14.0325 14.2702 14.3207 13.9067C14.5301 13.6271 15.0466 13.46 15.5548 13.736C16.3138 14.178 17.0288 14.6917 17.69 15.27C18.0202 15.546 18.0977 15.9539 17.8689 16.385C17.4659 17.1443 16.3003 18.1456 15.4542 17.9421C13.9764 17.5868 8 15.27 6.08033 8.55801C5.97237 8.24048 5.99955 8.12044 6.014 8.00613Z"
                  fill="green"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 23C10.7764 23 10.0994 22.8687 9 22.5L6.89443 23.5528C5.56462 24.2177 4 23.2507 4 21.7639V19.5C1.84655 17.492 1 15.1767 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM6 18.6303L5.36395 18.0372C3.69087 16.4772 3 14.7331 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C11.0143 21 10.552 20.911 9.63595 20.6038L8.84847 20.3397L6 21.7639V18.6303Z"
                  fill="green"
                />
              </svg>
            </a>
          </div>
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
