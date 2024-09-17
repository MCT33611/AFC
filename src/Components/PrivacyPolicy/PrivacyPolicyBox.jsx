import React from "react";

const PrivacyPolicyBox = () => {
  return (
    <div className="container mx-auto p-6 max-w-4xl bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Privacy Policy
      </h1>

      <p className="mb-6 text-sm text-gray-600">
        Effective Date: 17.09.2024
      </p>

      <h2 className="text-xl font-semibold text-gray-700 mb-4">
        1. Introduction
      </h2>
      <p className="mb-6">
        AFC (Ashmi Fitness Challenge) ("we," "our," or "us") is committed to protecting and respecting your privacy. This Privacy Policy outlines how we collect, use, and protect your personal data when you visit our website, engage with our services, or communicate with us.
      </p>
      <p className="mb-6">
        By accessing or using our website, you agree to the collection and use of information in accordance with this policy.
      </p>

      <h2 className="text-xl font-semibold text-gray-700 mb-4">
        2. Information We Collect
      </h2>
      <p className="mb-4">We may collect the following types of information:</p>
      <ul className="list-disc ml-6 mb-6">
        <li>
          <strong>Personal Information:</strong> Includes your name, email address, phone number, and other contact details you provide when you sign up for our services.
        </li>
        <li>
          <strong>Usage Data:</strong> Information on how you access and use the website, such as your IP address, browser type, pages visited, time spent on pages, and other similar details.
        </li>
        <li>
          <strong>Cookies:</strong> Small data files stored on your device that help us improve user experience by tracking your preferences.
        </li>
      </ul>

      <h2 className="text-xl font-semibold text-gray-700 mb-4">
        3. How We Use Your Information
      </h2>
      <p className="mb-4">We may use the information collected for the following purposes:</p>
      <ul className="list-disc ml-6 mb-6">
        <li>To provide and maintain our services, including updates and improvements.</li>
        <li>To communicate with you regarding your participation in the AFC program.</li>
        <li>To respond to your inquiries and requests.</li>
        <li>To send promotional materials, newsletters, and other communications (you can opt-out at any time).</li>
        <li>To analyze usage and improve website functionality.</li>
      </ul>

      <h2 className="text-xl font-semibold text-gray-700 mb-4">
        4. Data Security
      </h2>
      <p className="mb-6">
        We are committed to ensuring the security of your personal information. We implement appropriate technical and organizational measures to protect your data from unauthorized access, alteration, disclosure, or destruction.
      </p>

      <h2 className="text-xl font-semibold text-gray-700 mb-4">
        5. Sharing Your Information
      </h2>
      <p className="mb-6">
        We do not sell, trade, or otherwise transfer your personal information to outside parties unless required to by law or with your consent.
      </p>

      <h2 className="text-xl font-semibold text-gray-700 mb-4">
        6. Your Rights
      </h2>
      <p className="mb-4">You have the right to:</p>
      <ul className="list-disc ml-6 mb-6">
        <li>Access the personal data we hold about you.</li>
        <li>Request the correction or deletion of inaccurate or outdated information.</li>
        <li>Withdraw consent for any data processing activities at any time.</li>
      </ul>

      <h2 className="text-xl font-semibold text-gray-700 mb-4">
        7. Third-Party Links
      </h2>
      <p className="mb-6">
        Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those websites. We encourage you to read their privacy policies before providing any personal information.
      </p>

      <h2 className="text-xl font-semibold text-gray-700 mb-4">
        8. Changes to This Policy
      </h2>
      <p className="mb-6">
        We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the effective date will be updated accordingly. Please review this page periodically for any updates.
      </p>

      <h2 className="text-xl font-semibold text-gray-700 mb-4">
        9. Contact Us
      </h2>
      <p className="mb-6">
        If you have any questions or concerns regarding this Privacy Policy or how your data is handled, please contact us at:
      </p>
      <p className="mb-2">Email: afc@ashmifitness.com</p>
      <p className="mb-6">Instagram: @afc_ashmi_ftness_challenge</p>

      <footer className="mt-10 text-center text-sm text-gray-500">
        &copy; 2024 AFC. All rights reserved.
      </footer>
    </div>
  );
};

export default PrivacyPolicyBox;