import React, { useRef, useEffect, useState } from "react";
// import Navbar from "../components/navbar/navbar";

export default function Contact({ ref }) {
  const handleOpenLocation = () => {
    const googleMapsUrl = "https://www.google.com/maps?q=37.7749,-122.4194";
    window.open(googleMapsUrl, "_blank");
  };
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
    // <div
    //   id="main-container"
    //   className="w-full lg:h-screen h-max flex flex-col items-center p-5 lg:overflow-hidden"
    // >
    //   <Navbar />
    <div
      className="w-full min-h-192 flex flex-col lg:flex-row justify-center items-center mt-20 border-1 rounded-lg"
      ref={ref}
    >
      <div
        ref={sectionRef}
        className="h-full flex items-center justify-center lg:w-1/3 w-full lg:ml-40
       flex-col"
      >
        {isVisible && (
          <object type="image/svg+xml" data={`/images/contact.svg`}>
            Your browser does not support SVG
          </object>
        )}
      </div>
      <div
        className="h-full flex justify-center items-center lg:w-2/3 w-full
       flex-col"
      >
        <div
          className={`transform transition-all duration-1000 ease-in-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <h1 className="font-bold font-san lg:text-9xl md:text-8xl text-7xl">
            CONTACT
          </h1>
          <h1 className="font-bold font-san lg:text-9xl md:text-8xl text-7xl">
            US
          </h1>
          <p className="font-semibold ml-2">
            <span className="text-red-500"> Mail us at : </span>
            gauravrajsingh047@gmail.com
          </p>
          <p className="font-semibold ml-2">
            <span className="text-red-500"> Call us at : </span>
            +91-9198888436
          </p>
          <button
            className="p-2 bg-red-500 rounded-md m-2 font-pacifico text-white"
            onClick={() => {
              handleOpenLocation();
            }}
          >
            Locate
          </button>
        </div>
      </div>
    </div>
    // </div>
  );
}
