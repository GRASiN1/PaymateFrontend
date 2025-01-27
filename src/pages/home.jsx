import React from "react";
// import Navbar from "../components/navbar/navbar";

export default function Home({ ref }) {
  return (
    // <div
    //   id="main-container"
    //   className="w-full min-h-screen flex flex-col items-center p-5"
    // >
    //   <Navbar />
    <div
      className="w-full min-h-192 flex flex-col justify-center items-center mt-20 border-1 rounded-lg"
      ref={ref}
    >
      <h1>home page</h1>
    </div>
    // </div>
  );
}
