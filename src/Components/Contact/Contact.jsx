import React, { useState } from "react";
import {
  MessageSquare,
  Mail,
  Phone,
  ArrowRight,
  PersonStanding,
} from "lucide-react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "7c197516-2a31-4c30-907a-7e983897f1e5");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResult("An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-[100vh] py-16" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden md:flex">
          <div className="md:w-1/2 p-8">
            <h3 className="text-2xl font-semibold text-green-800 flex items-center mb-6">
              Send us a message{" "}
              <MessageSquare className="ml-2 w-6 h-6 text-green-500" />
            </h3>
            <p className="text-gray-600 mb-6">
              Feel free to reach out through the contact form or find our
              contact information below. Your feedback, questions, and
              suggestions are important to us as we strive to provide
              exceptional service.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-600">
                <PersonStanding className="w-5 h-5 mr-3 text-green-500" />
                Ashmida Ali
              </li>
              <li className="flex items-center text-gray-600">
                <Mail className="w-5 h-5 mr-3 text-green-500" />
                afc@ashmifitness.com
              </li>
              <li className="flex items-center text-gray-600">
                <Phone className="w-5 h-5 mr-3 text-green-500" />
                +91 6282609179
              </li>
            </ul>
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-green-800 mb-4">
                Follow Us
              </h4>
              <div className="flex space-x-4">
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
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                    ></rect>
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
            </div>
          </div>
          <div className="md:w-1/2 p-8 bg-green-100">
            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Ashmida Ali"
                  required
                  className="mt-1 block w-full px-3 py-2 bg-white border border-green-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="afc@ashmifitness.com"
                  required
                  className="mt-1 block w-full px-3 py-2 bg-white border border-green-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Enter your message"
                  required
                  className="mt-1 block w-full px-3 py-2 bg-white border border-green-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Submit now <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </form>
            {result && (
              <p className="mt-4 text-sm text-center text-gray-600">{result}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
