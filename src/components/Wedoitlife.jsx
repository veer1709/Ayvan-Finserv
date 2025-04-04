import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import c1 from "../public/images/Checklist.png";
import c2 from "../public/images/Note Taking.png";
import c3 from "../public/images/Nurse.png";
import c4 from "../public/images/Chart 6.png";

const HowWeDoIt = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-[#ff6b00] text-white py-12 px-4 md:px-8 lg:px-16">
      {/* Section Heading */}
      <div className="text-center max-w-3xl mx-auto" data-aos="fade-up">
        <div className="inline-block bg-white text-[#ff6b00] text-sm font-bold px-2 py-1 rounded-md mb-4">
          HOW WE DO IT
        </div>
        <h2 className="text-2xl md:text-3xl lg:text-2xl font-bold mb-4">
          Safeguard yourself for the inning of life
        </h2>
      </div>

      {/* Cards Section */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {/* Card 1 */}
        <div className="transition duration-300 hover:scale-110 flex flex-col items-center text-center" data-aos="zoom-in">
          <img
            src={c1}
            alt="Affordable Plans Icon"
            className="w-44 h-44 mb-4 grayscale transition-all duration-300 hover:grayscale-0"
          />
          <h3 className="text-xl text-white font-bold mb-2">
            Assess your insurance needs
          </h3>
        </div>

        {/* Card 2 */}
        <div className="transition duration-300 hover:scale-110 flex flex-col items-center text-center" data-aos="zoom-in" data-aos-delay="200">
          <img
            src={c2}
            alt="Minimal Documentation Icon"
            className="w-44 h-44 mb-4 grayscale transition-all duration-300 hover:grayscale-0"
          />
          <h3 className="text-xl text-white font-bold mb-2">
            Compare insurance policies
          </h3>
        </div>

        {/* Card 3 */}
        <div className="transition duration-300 hover:scale-110 flex flex-col items-center text-center" data-aos="zoom-in" data-aos-delay="400">
          <img
            src={c3}
            alt="Right Coverage Icon"
            className="w-44 h-44 mb-4 grayscale transition-all duration-300 hover:grayscale-0"
          />
          <h3 className="text-xl text-white font-bold mb-2">
            Affordable premium
          </h3>
        </div>

        {/* Card 4 */}
        <div className="transition duration-300 hover:scale-110 flex flex-col items-center text-center" data-aos="zoom-in" data-aos-delay="600">
          <img
            src={c4}
            alt="High Claim Settlement Icon"
            className="w-44 h-44 mb-4 grayscale transition-all duration-300 hover:grayscale-0"
          />
          <h3 className="text-xl text-white font-bold mb-2">
            Check the claim settlement history
          </h3>
        </div>
      </div>
    </section>
  );
};

export default HowWeDoIt;
