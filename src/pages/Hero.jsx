import React, { useRef, useEffect } from "react";
import Home from "./home";
import About from "./about";
import Contact from "./contact";
import Navbar from "../components/navbar/navbar";
import { useLocation } from "react-router-dom";

export default function Hero() {
  const home = useRef(null);
  const about = useRef(null);
  const contact = useRef(null);

  const location = useLocation();
  useEffect(() => {
    if (location.state?.section) {
      const section = location.state.section;
      const navbarHeight = document.querySelector("nav").offsetHeight;

      if (section === "Home" && home.current) {
        window.scrollTo({
          top: home.current?.offsetTop - (navbarHeight + 25),
          behavior: "smooth",
        });
      } else if (section === "About" && about.current) {
        window.scrollTo({
          top: about?.current.offsetTop - (navbarHeight + 25),
          behavior: "smooth",
        });
      } else if (section === "Contact" && contact.current) {
        window.scrollTo({
          top: contact?.current.offsetTop - (navbarHeight + 25),
          behavior: "smooth",
        });
      }
    }
  }, [location]);
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
