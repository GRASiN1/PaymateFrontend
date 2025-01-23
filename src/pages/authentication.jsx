import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Authentication() {
  const navigate = useNavigate();
  function handleGoToHome() {
    navigate("/");
  }

  function handleSwitch() {
    setLogin(!login);
  }
  const [login, setLogin] = useState(true);
  return (
    <div
      className="w-full h-screen flex flex-col m-0 p-0 overflow-auto"
      style={{
        backgroundImage: `url('/images/${login ? "bgLogin" : "bgSignup"}.svg')`,
        backgroundSize: "cover", // To ensure the image covers the entire div
        backgroundRepeat: "no-repeat", // To avoid repeating the image
        backgroundPosition: "center", // To center the image
      }}
    >
      {/* Navbar */}
      <div
        id="nav"
        className="w-full flex justify-between items-center border-2 h-16 p-4 bg-white"
      >
        <img src="/images/logoNoBg2.png" alt="brand" width={150} />
        <button
          className="bg-black font-pacifico p-2 rounded-lg text-white"
          onClick={handleGoToHome}
        >
          Go To Home
        </button>
      </div>

      {/* Content */}
      <div
        id="content"
        className="w-full flex flex-col lg:flex-row justify-center items-center lg:items-stretch h-full"
      >
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center items-center p-4 h-full">
          <object
            type="image/svg+xml"
            data={`/images/${
              login ? "mobile-login-animate" : "sign-up-animate"
            }.svg`}
            className="w-4/5 h-auto"
          >
            Your browser does not support SVG
          </object>
        </div>

        {/* Form Section */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-4 h-full font-pacifico">
          <div
            className={`w-3/5 p-4 transition-all duration-1000 ease-out-in transform ${
              login ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            {/* Login Form */}
            {login && (
              <form className="w-full p-4">
                <h2 className="text-2xl font-semibold mb-4">Login Now</h2>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-red-100 shadow-lg border-gray-300 p-2 rounded-md font-serif outline-none"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="w-full bg-red-100 shadow-lg border-gray-300 p-2 rounded-md font-serif outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-red-500 text-white py-2 rounded-md hover:text-black mt-6"
                >
                  Submit
                </button>
              </form>
            )}
          </div>
          <div
            className={`w-3/5 p-4 transition-all duration-1000 transform ${
              !login ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            {/* Signup Form */}
            {!login && (
              <form className="w-full p-4">
                <h2 className="text-2xl font-semibold mb-4">Signup Now</h2>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-blue-100 shadow-lg border-gray-300 p-2 rounded-md font-serif outline-none"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-blue-100 shadow-lg border-gray-300 p-2 rounded-md font-serif outline-none"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="w-full bg-blue-100 shadow-lg border-gray-300 p-2 rounded-md font-serif outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 rounded-md hover:text-black mt-6"
                >
                  Submit
                </button>
              </form>
            )}
          </div>
          {/* Switch between forms */}
          {login ? (
            <h4>
              Don't have an account?{" "}
              <span
                className="text-red-500 cursor-pointer"
                onClick={handleSwitch}
              >
                Signup Now
              </span>
            </h4>
          ) : (
            <h4>
              Already have an account?{" "}
              <span
                className="text-blue-500 cursor-pointer"
                onClick={handleSwitch}
              >
                Login Now
              </span>
            </h4>
          )}
        </div>
      </div>
    </div>
  );
}
