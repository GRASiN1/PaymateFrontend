import React from "react";
import Navbar from "../components/navbar/navbar";

export default function Contact() {
  const handleOpenLocation = () => {
    const googleMapsUrl = "https://www.google.com/maps?q=37.7749,-122.4194";
    window.open(googleMapsUrl, "_blank");
  };
  return (
    <div
      id="main-container"
      className="w-full lg:h-screen h-max flex flex-col items-center p-5 lg:overflow-hidden"
    >
      <Navbar />
      <div className="w-full h-full flex flex-col lg:flex-row justify-center items-center mt-20 border-1 rounded-3xl">
        <object
          type="image/svg+xml"
          data={`/images/contact.svg`}
          className="lg:w-1/3 w2/3 h-auto"
        >
          Your browser does not support SVG
        </object>
        <div className="h-full lg:mt-40 mt-10">
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
            onClick={handleOpenLocation}
          >
            Locate
          </button>
        </div>
      </div>
    </div>
  );
}
