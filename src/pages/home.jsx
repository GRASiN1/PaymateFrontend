import { useEffect, useState, useRef } from "react";

export default function Home() {
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
    <section
      ref={sectionRef}
      className="w-full min-h-192 flex flex-col lg:flex-row justify-center items-center mt-16  text-gray-900"
    >
      <div className="lg:w-1/3 w-full h-full flex justify-center items-center">
        {isVisible && (
          <object
            data="/images/world.svg"
            type="image/svg+xml"
            className="w-full h-full"
          >
            Your browser does not support SVG images.
          </object>
        )}
      </div>
      <div className="lg:w-2/3 w-full h-full flex flex-col justify-center items-center">
        <div
          className={`transform transition-all duration-1000 ease-in-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Split Expenses, Simplify Trips
          </h1>
          <p className="text-lg md:text-xl mb-6 opacity-90">
            Effortlessly track group expenses, calculate settlements, and enjoy
            hassle-free trips with friends.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:border-none hover:bg-gray-100 hover:text-black transition">
              Get Started
            </button>
            <button className="bg-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 hover:text-blue-600 transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
