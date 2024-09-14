import React from "react";

const TermsAndConditionsBox = () => {
  return (
    <div class="container mx-auto p-6 max-w-4xl bg-white shadow-lg rounded-lg">
      <h1 class="text-3xl font-bold text-center text-gray-800 mb-8">
        Terms and Conditions
      </h1>

      <p class="mb-6">
        Welcome to <strong>AFC (Ashmi Fitness Challenge)</strong>, a fitness
        program designed to empower women through personalized fitness and
        nutrition plans. By participating in this program, you agree to comply
        with and be bound by the following terms and conditions. Please review
        them carefully before enrolling.
      </p>

      <h2 class=" font-semibold text-gray-700 mb-4">
        1. Participation in the Program
      </h2>
      <p class="mb-4">By enrolling in AFC, you acknowledge that:</p>
      <ul class="list-disc ml-6 mb-6">
        <li>
          You are voluntarily participating in a 15-day fitness challenge under
          the guidance of Ashmida and other certified professionals.
        </li>
        <li>
          The results achieved are based on your commitment to following the
          fitness plans, nutritionist advice, and the diet chart provided.
        </li>
        <li>
          Individual results may vary based on several factors, including but
          not limited to your adherence to the program, pre-existing medical
          conditions, and personal health.
        </li>
        <li>
          AFC reserves the right to modify or update the fitness and nutrition
          plans at any time, based on the feedback or progress of participants.
        </li>
      </ul>

      <h2 class=" font-semibold text-gray-700 mb-4">
        2. Health and Safety Disclaimer
      </h2>
      <p class="mb-6">
        AFC is not a medical organization, and the information provided in the
        program should not be misconstrued as medical advice. Always consult
        with a healthcare professional before starting any new fitness routine
        or diet plan, especially if you have pre-existing health conditions. AFC
        and its team will not be liable for any injuries, medical conditions, or
        health issues arising from participation in the program.
      </p>

      <h2 class=" font-semibold text-gray-700 mb-4">
        3. Payment and Refund Policy
      </h2>
      <ul class="list-disc ml-6 mb-6">
        <li>
          All program fees must be paid in full at the time of registration.
        </li>
        <li>
          No refunds will be issued once you have enrolled in the program, as
          your spot is reserved specifically for you.
        </li>
        <li>
          Refunds will only be granted if the program is canceled or terminated
          due to an error or issue on our part.
        </li>
      </ul>

      <h2 class=" font-semibold text-gray-700 mb-4">
        4. Cancellation and Rescheduling
      </h2>
      <ul class="list-disc ml-6 mb-6">
        <li>
          Participants are not permitted to cancel or reschedule their
          participation in the program after registration, unless in exceptional
          circumstances, which will be determined at AFC’s discretion.
        </li>
        <li>
          If AFC cancels or reschedules a program session for any reason, you
          will be informed in advance, and alternative arrangements will be made
          where possible.
        </li>
      </ul>

      <h2 class=" font-semibold text-gray-700 mb-4">5. Liability Waiver</h2>
      <p class="mb-6">
        You acknowledge that participation in physical exercise involves
        inherent risks, including but not limited to injury, illness, or strain.
        By enrolling in AFC, you agree to release and hold harmless AFC, its
        trainers, and affiliates from any and all liability arising from
        participation in the program.
      </p>

      <h2 class=" font-semibold text-gray-700 mb-4">
        6. Intellectual Property Rights
      </h2>
      <p class="mb-6">
        All content provided within the AFC program, including but not limited
        to exercise plans, meal plans, advice, videos, and materials, is the
        intellectual property of AFC and Ashmida. You may not reproduce,
        distribute, or share these materials without prior written consent.
      </p>

      <h2 class=" font-semibold text-gray-700 mb-4">
        7. Rights and Responsibilities
      </h2>
      <p class="mb-6">
        AFC reserves the right to modify or terminate the program at any time,
        for any reason. Participants are responsible for maintaining
        confidentiality regarding any private or personal information shared in
        the program.
      </p>

      <h2 class=" font-semibold text-gray-700 mb-4">8. Communication</h2>
      <p class="mb-6">
        Communication throughout the program will take place via WhatsApp or
        other agreed platforms. Participants are expected to maintain respectful
        and professional communication with Ashmida and the AFC team.
      </p>

      <h2 class=" font-semibold text-gray-700 mb-4">9. Governing Law</h2>
      <p class="mb-6">
        These terms and conditions are governed by and construed in accordance
        with the laws of Kerala, India. Any disputes arising in connection with
        these terms will be subject to the exclusive jurisdiction of the courts
        of Kerala.
      </p>

      <h2 class=" font-semibold text-gray-700 mb-4">10. Changes to Terms</h2>
      <p class="mb-6">
        AFC reserves the right to update or modify these terms and conditions at
        any time without prior notice. By continuing to participate in the
        program, you agree to be bound by the revised terms.
      </p>

      <h2 class=" font-semibold text-gray-700 mb-4">11. Contact Us</h2>
      <p class="mb-6">
        For any questions regarding these terms and conditions, please contact
        us via our official Instagram page or email at afc@ashmifitness.com.
      </p>

      <footer class="mt-10 text-center text-sm text-gray-500">
        &copy; 2024 AFC. All rights reserved.
      </footer>
    </div>
  );
  // return (
  //   <div className="relative p-8 overflow-hidden" id="terms">
  //     {/* Blurred background */}
  //     <div
  //       className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 opacity-75 blur-xl"
  //       style={{ backdropFilter: "blur(8px)" }}
  //     ></div>

  //     {/* Content */}
  //     <div className="relative  text-white">
  //       <h2 className="text-2xl font-bold mb-4 text-[#fdd166]">
  //         Terms and Conditions
  //       </h2>
  //       <ul className="space-y-4 list-disc list-inside">
  //         <li>
  //           <strong>Clear participation and program rules guidelines:</strong>{" "}
  //           Results following nutritionist advice and shared diet chart.
  //         </li>
  //         <li>
  //           <strong>Payment and refund policies:</strong> No refunds will be
  //           provided as your participation means we have reserved a spot
  //           specifically for you, potentially excluding other participants.
  //           Refunds are only available if the program is halted due to an error
  //           on our part.
  //         </li>
  //         <li>
  //           <strong>Cancellation and rescheduling procedures</strong>
  //         </li>
  //         <li>
  //           <strong>Liability and disclaimer information</strong>
  //         </li>
  //         <li>
  //           <strong>Rights and responsibilities of both parties</strong>
  //         </li>
  //       </ul>
  //     </div>
  //   </div>
  // );
};

export default TermsAndConditionsBox;
