import React from "react";
import Image from "./assets/hero-img-normal.webp";
import Ankit from "./assets/about-img.jpg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between mx-6 md:mx-20 py-10 md:py-20 gap-10">
        <div className="text-center md:text-left md:w-1/2 order-2 md:order-1">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-800 leading-tight mb-4">
            Hi, I'm <span className="text-orange-700">Ankit Singh</span>
          </h1>
          <h3 className="text-2xl md:text-4xl font-semibold text-gray-700 mb-4">
            Full-Stack Developer
          </h3>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-6">
            I specialize in building responsive and scalable applications using
            the
            <strong> MERN stack</strong> (MongoDB, Express.js, React.js, and
            Node.js). From backend to frontend, I bring web ideas to life with
            modern designs and clean code.
          </p>
          <div className="flex justify-center md:justify-start gap-5">
            <a
              href="mailto:ankitkmr2657@gmail.com"
              className="bg-orange-700 hover:bg-orange-800 text-white py-3 px-6 rounded-lg font-semibold transition-all"
            >
              Contact Me
            </a>
            <a
              href="./assets/Ankit Singh Resume.pdf"
              download
              className="border-2 border-orange-700 hover:bg-orange-700 text-orange-700 hover:text-white py-3 px-6 rounded-lg font-semibold transition-all"
            >
              Download Resume
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2">
          <div className="relative">
            <img
              src={Ankit}
              alt="Profile"
              className="w-72 md:w-[450px] rounded-full shadow-xl  border-orange-700"
            />
            <div className="absolute -top-5 -left-5 w-20 h-20 bg-orange-100 rounded-full z-[-1]"></div>
          </div>
        </div>
      </div>
    </>
  );
}
