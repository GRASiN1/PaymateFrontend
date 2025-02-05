import React, { useRef, useEffect, useState } from "react";

export default function Contact({ ref }) {
  const handleOpenLocation = () => {
    const googleMapsUrl = "https://maps.app.goo.gl/8r2dGoztVDDVeRmX8";
    window.open(googleMapsUrl, "_blank");
  };

  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="w-full min-h-192 flex flex-col lg:flex-row justify-center items-center mt-20  px-8 py-12"
      ref={ref}
    >
      {/* Image Section */}
      <div
        ref={sectionRef}
        className="h-full flex items-center justify-center lg:w-1/3 w-full flex-col"
      >
        {isVisible && (
          <object
            type="image/svg+xml"
            data="/images/contactUs.svg"
            className="w-72 h-72 md:w-96 md:h-96"
          >
            Your browser does not support SVG
          </object>
        )}
      </div>

      {/* Text Section */}
      <div className="h-full flex justify-center items-center lg:w-2/3 w-full flex-col text-center">
        <div
          className={`transform transition-all duration-1000 ease-in-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="font-bold text-5xl md:text-7xl lg:text-8xl text-gray-800 leading-tight">
            Get In Touch
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl">
            Have any questions or need support? Reach out to us anytime, and
            we'll be happy to assist you.
          </p>
          <div className="mt-6 space-y-3 text-lg md:text-xl text-gray-700">
            <p>
              <span className="text-red-500 font-semibold">Mail us at: </span>
              <a
                href="mailto:gauravrajsingh047@gmail.com"
                className="hover:underline"
              >
                gauravrajsingh047@gmail.com
              </a>
            </p>
            <p>
              <span className="text-red-500 font-semibold">Call us at: </span>
              <a href="tel:+919198888436" className="hover:underline">
                +91-9198888436
              </a>
            </p>
            <p>
              <span className="text-red-500 font-semibold">Visit us: </span>
              Gomti Nagar Ext, Lucknow, Uttar Pradesh, India
            </p>
          </div>
          <button
            className="mt-6 px-6 py-3 bg-red-500 text-white text-lg font-semibold rounded-md shadow-lg hover:bg-red-600 transition"
            onClick={handleOpenLocation}
          >
            Locate Us
          </button>
        </div>
      </div>
    </div>
  );
}
