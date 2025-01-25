import React, { useRef } from "react";
import Navbar from "../components/navbar/navbar";
import Home from "./home";

export default function Test() {
  const home1 = useRef(null);
  const home2 = useRef(null);
  const home3 = useRef(null);
  return (
    <div>
      <Navbar refs={[home1, home2, home3]} />
      <div ref={home1}>
        <Home />
      </div>
      <div ref={home2}>
        <Home />
      </div>
      <div ref={home3}>
        <Home />
      </div>
    </div>
  );
}
