import React, { useRef, useEffect, useState } from "react";

export default function About({ parentRef }) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting); // Set visibility based on intersection
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect(); // Cleanup on unmount
  }, []);

  return (
    <div
      className="w-full min-h-192 flex flex-col lg:flex-row justify-center items-center mt-16  px-4 py-6"
      ref={parentRef}
    >
      {/* Image Section */}
      <div
        className="lg:w-1/3 w-full h-full flex justify-center items-center"
        ref={sectionRef}
      >
        {isVisible && (
          <object
            data="/images/egypt.svg"
            type="image/svg+xml"
            className="w-full h-full"
          >
            Your browser does not support SVG images.
          </object>
          // <img src="/images/rome.jpg" alt="" />
        )}
      </div>

      {/* Text Section */}
      <div className="lg:w-2/3 w-full h-full flex justify-center items-center">
        <div
          className={`transform transition-all duration-1000 ease-in-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-5xl font-bold text-gray-800 md:text-9xl">
            About Paymate
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Paymate is your ultimate trip expense companion, designed to make
            group travel stress-free and enjoyable. With Paymate, you can
            effortlessly create groups of friends, track shared expenses during
            trips, and ensure everyone pays their fair share. Say goodbye to
            complicated calculations and awkward conversations about
            money—Paymate handles it all for you.
          </p>
          <p className="mt-4 text-lg text-gray-600">
            At the end of your trip, Paymate divides the total expenses equally
            among group members, providing a clear breakdown of who owes whom.
            Whether you're planning a weekend getaway or a long adventure,
            Paymate keeps your finances organized so you can focus on creating
            memories.
          </p>
        </div>
      </div>
    </div>
  );
}
