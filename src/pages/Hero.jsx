import React, { useRef } from "react";
import Home from "./home";
import About from "./about";
import Contact from "./contact";
import Navbar from "../components/navbar/navbar";

export default function Hero() {
  const home = useRef(null);
  const about = useRef(null);
  const contact = useRef(null);
  return (
    <div
      id="main-container"
      className="w-full min-h-screen flex flex-col items-center p-5"
    >
      <Navbar refs={[home, about, contact]} />
      <Home ref={home} />
      <About parentRef={about} />
      <Contact ref={contact} />
    </div>
  );
}
