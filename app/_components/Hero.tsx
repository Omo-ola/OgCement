"use client";
import Image from "next/image";
import Link from "next/link";
function Hero() {
  return (
    <section
      className="relative bg-cover bg-center h-screen flex items-center"
      style={{ backgroundImage: "url('/header-bg2.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto z-10 relative">
        <div className="text-center text-white">
          <h2 className="text-yellow-500 font-semibold text-lg mb-2">
            Dedicated and Reliable Cement Company
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Dedicated Cement Company,{" "}
            <span className="text-yellow-500">
              Builders Know Our Product Well
            </span>
            .
          </h1>
          <p className="text-lg mb-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
            soluta, dignissimos aut, assumenda dolore totam natus qui cum vel
            omnis voluptates.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-md transition duration-300"
            >
              Contact Us
            </a>
            <a
              href="#"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
