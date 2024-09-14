import React from "react";
import { Link } from "react-scroll";

const WhatsappIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="-1.5 0 259 259"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    preserveAspectRatio="xMidYMid"
  >
    <g>
      <path
        d="M67.6631045,221.823373 L71.8484512,223.916047 C89.2873956,234.379413 108.819013,239.262318 128.350631,239.262318 L128.350631,239.262318 C189.735716,239.262318 239.959876,189.038158 239.959876,127.653073 C239.959876,98.3556467 228.101393,69.7557778 207.17466,48.8290445 C186.247927,27.9023111 158.345616,16.0438289 128.350631,16.0438289 C66.9655467,16.0438289 16.7413867,66.2679889 17.4389445,128.350631 C17.4389445,149.277365 23.7169645,169.50654 34.1803311,186.945485 L36.9705622,191.130831 L25.8096378,232.28674 L67.6631045,221.823373 Z"
        fill="#00E676"
      ></path>
      <path
        d="M219.033142,37.66812 C195.316178,13.2535978 162.530962,0 129.048189,0 C57.8972956,0 0.697557778,57.8972956 1.39511556,128.350631 C1.39511556,150.67248 7.67313556,172.296771 18.1365022,191.828389 L0,258.096378 L67.6631045,240.657433 C86.4971645,251.1208 107.423898,256.003705 128.350631,256.003705 L128.350631,256.003705 C198.803967,256.003705 256.003705,198.106409 256.003705,127.653073 C256.003705,93.4727423 242.750107,61.3850845 219.033142,37.66812 Z M129.048189,234.379413 L129.048189,234.379413 C110.214129,234.379413 91.380069,229.496509 75.3362401,219.7307 L71.1508934,217.638027 L30.6925422,228.101393 L41.1559089,188.3406 L38.3656778,184.155253 C7.67313556,134.628651 22.3218489,69.05822 72.5460089,38.3656778 C122.770169,7.67313556 187.643042,22.3218489 218.335585,72.5460089 C249.028127,122.770169 234.379413,187.643042 184.155253,218.335585 C168.111425,228.798951 148.579807,234.379413 129.048189,234.379413 Z M190.433273,156.9505 L182.760138,153.462711 C182.760138,153.462711 171.599213,148.579807 164.623636,145.092018 C163.926078,145.092018 163.22852,144.39446 162.530962,144.39446 C160.438289,144.39446 159.043173,145.092018 157.648058,145.789576 L157.648058,145.789576 C157.648058,145.789576 156.9505,146.487133 147.184691,157.648058 C146.487133,159.043173 145.092018,159.740731 143.696902,159.740731 L142.999345,159.740731 C142.301787,159.740731 140.906671,159.043173 140.209113,158.345616 L136.721325,156.9505 L136.721325,156.9505 C129.048189,153.462711 122.072611,149.277365 116.492149,143.696902 C115.097033,142.301787 113.00436,140.906671 111.609245,139.511556 C106.72634,134.628651 101.843436,129.048189 98.3556467,122.770169 L97.658089,121.375053 C96.9605312,120.677496 96.9605312,119.979938 96.2629734,118.584822 C96.2629734,117.189707 96.2629734,115.794591 96.9605312,115.097033 C96.9605312,115.097033 99.7507623,111.609245 101.843436,109.516571 C103.238551,108.121456 103.936109,106.028782 105.331225,104.633667 C106.72634,102.540993 107.423898,99.7507623 106.72634,97.658089 C106.028782,94.1703001 97.658089,75.3362401 95.5654156,71.1508934 C94.1703001,69.05822 92.7751845,68.3606623 90.6825112,67.6631045 L88.5898378,67.6631045 C87.1947223,67.6631045 85.1020489,67.6631045 83.0093756,67.6631045 C81.6142601,67.6631045 80.2191445,68.3606623 78.8240289,68.3606623 L78.1264712,69.05822 C76.7313556,69.7557778 75.3362401,71.1508934 73.9411245,71.8484512 C72.5460089,73.2435667 71.8484512,74.6386823 70.4533356,76.0337978 C65.5704312,82.3118178 62.7802,89.9849534 62.7802,97.658089 L62.7802,97.658089 C62.7802,103.238551 64.1753156,108.819013 66.2679889,113.701918 L66.9655467,115.794591 C73.2435667,129.048189 81.6142601,140.906671 92.7751845,151.370038 L95.5654156,154.160269 C97.658089,156.252942 99.7507623,157.648058 101.145878,159.740731 C115.794591,172.296771 132.535978,181.365022 151.370038,186.247927 C153.462711,186.945485 156.252942,186.945485 158.345616,187.643042 L158.345616,187.643042 C160.438289,187.643042 163.22852,187.643042 165.321193,187.643042 C168.808982,187.643042 172.994329,186.247927 175.78456,184.852811 C177.877233,183.457696 179.272349,183.457696 180.667465,182.06258 L182.06258,180.667465 C183.457696,179.272349 184.852811,178.574791 186.247927,177.179676 C187.643042,175.78456 189.038158,174.389445 189.735716,172.994329 C191.130831,170.204098 191.828389,166.716309 192.525947,163.22852 C192.525947,161.833405 192.525947,159.740731 192.525947,158.345616 C192.525947,158.345616 191.828389,157.648058 190.433273,156.9505 Z"
        fill="#FFFFFF"
      ></path>
    </g>
  </svg>
);

const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-black w-full">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <div className="text-[#fdd166] text-2xl mb-4 md:mb-0">AFC</div>
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/afc_ashmi_ftness_challenge?igsh=MXA0NzJ1YWpxMGc1Yg%3D%3D&utm_source=qr"
              target="_blank"
              className="bg-[#e1306c] hover:bg-white text-white hover:text-[#e1306c] p-2 rounded-full transition-all"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://www.youtube.com/@Afcprogram"
              target="_blank"
              className="bg-red-600 hover:bg-white text-white hover:text-red-600 p-2 rounded-full transition-all"
            >
              <YoutubeIcon />
            </a>
            <a
              href="https://wa.me/9526622809"
              target="_blank"
              className="bg-[#25D366] hover:bg-white text-white hover:text-[#25D366] p-2 rounded-full transition-all"
            >
              <WhatsappIcon />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-medium mb-4 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-8 after:bg-[#fdd166]">
              Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="hero"
                  smooth={true}
                  offset={0}
                  duration={500}
                  className="text-white opacity-80 hover:opacity-100 hover:underline"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  smooth={true}
                  offset={0}
                  duration={500}
                  className="text-white opacity-80 hover:opacity-100 hover:underline"
                >
                   About Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-medium mb-4 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-8 after:bg-[#fdd166]">
              Legal Info
            </h3>
            <ul className="space-y-2">
              <li>
                {/* <Link
                  to="terms"
                  smooth={true}
                  offset={-150}
                  duration={500}
                  className="text-white opacity-80 hover:opacity-100 hover:underline"
                >
                  Terms and Conditions
                </Link> */}

                <a
                  href="src\Components\TermsAndConditionsBox\Terms_and_Conditions.html"
                  className="text-white opacity-80 hover:opacity-100 hover:underline"
                >
                  Terms and Conditions
                </a>

              </li>
              {/* <li>
                <Link
                  to="terms"
                  smooth={true}
                  offset={-150}
                  duration={500}
                  className="text-white opacity-80 hover:opacity-100 hover:underline"
                >
                  Privacy Policy
                </Link>
              </li> */}
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-medium mb-4 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-8 after:bg-[#fdd166]">
              Contact
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:afc@ashmifitness.com"
                  className="text-white opacity-80 hover:opacity-100 hover:underline"
                >
                  afc@ashmifitness.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-medium mb-4 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-8 after:bg-[#fdd166]">
              Terms Summary
            </h3>
            <ul className="space-y-2 text-white opacity-80 text-sm">
              <li>
                Results following nutritionist advice and shared diet chart
              </li>
              <li>No refunds (exceptions for program halt due to our error)</li>
              <li>Clear participation and program rules guidelines</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-white opacity-80 text-sm">
            Copyright © 2024 AFC. All rights reserved. Designed by JCUE Company.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
