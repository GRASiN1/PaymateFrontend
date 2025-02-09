import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../contexts/UserContext";

export default function Authentication() {
  const { user, loginUser, signupUser } = useUser();
  const navigate = useNavigate();
  const [login, setLogin] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    setTimeout(() => {
      setIsAnimating(true);
    }, 100);
  }, []);

  function handleGoToHome() {
    navigate("/");
  }

  function handleSwitch() {
    setIsAnimating(false); // Reset animation before switching
    setTimeout(() => {
      setLogin(!login);
      setIsAnimating(true); // Re-enable animation after switching
    }, 200);
  }

  function handleOnChange(e) {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  }

  async function handleLogin(e) {
    e.preventDefault();
    await loginUser(formData.email, formData.password);
  }
  async function handleSignup(e) {
    e.preventDefault();
    await signupUser(formData.name, formData.email, formData.password);
  }
  useEffect(() => {
    if (user) navigate("/");
  }, [user, navigate]);

  return (
    <div
      className="w-full h-screen flex flex-col m-0 p-0 overflow-auto"
      style={{
        backgroundImage: `url('/images/${login ? "bgLogin" : "bgSignup"}.svg')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
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
            className={`w-3/5 p-4 transition-all duration-1000 ease-out transform ${
              isAnimating
                ? login
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
                : "opacity-0 translate-x-10"
            }`}
          >
            {login && (
              <form className="w-full p-4" onSubmit={handleLogin}>
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
                    value={formData.email}
                    onChange={handleOnChange}
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
                    value={formData.password}
                    onChange={handleOnChange}
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
            className={`w-3/5 p-4 transition-all duration-1000 ease-out transform ${
              isAnimating
                ? !login
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
                : "opacity-0 -translate-x-10"
            }`}
          >
            {!login && (
              <form className="w-full p-4" onSubmit={handleSignup}>
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
                    value={formData.name}
                    onChange={handleOnChange}
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
                    value={formData.email}
                    onChange={handleOnChange}
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
                    value={formData.password}
                    onChange={handleOnChange}
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
