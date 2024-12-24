import React from "react";
import Logo from "./assets/footer-logo.jpg";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white border-y">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-2 lg:py-2">
        <div className="md:flex md:justify-around md:items-center">
          <div className="flex md:block justify-center">
            <Link to="/" className="flex items-center">
              <img src={Logo} className="mr-3 w-72 rounded-full" alt="Logo" />
            </Link>
          </div>

          <div className="flex justify-center md:gap-20 gap-5 text-center sm:grid-cols-3">
            <div>
              <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase">
                Resources
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4 px-5 hover:text-orange-600 hover:bg-slate-300 hover:rounded-full">
                  <Link to="/" className="px-6 py-1">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="hover:text-orange-600 hover:bg-slate-300 hover:rounded-full px-6 py-1"
                  >
                    About
                  </Link>
                </li>
              </ul>
            </div>

            <div className="">
              <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase">
                Follow us
              </h2>
              <ul className="text-gray-500 font-medium space-y-1">
                <li className="">
                  <a
                    href="https://github.com/Akki0121"
                    className="flex items-center gap-1 hover:text-orange-600 hover:bg-slate-300 hover:rounded-full px-6 py-1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub />
                    Github
                  </a>
                </li>
                <li>
                  <Link
                    to="https://www.linkedin.com/in/ankit-kumar-1922b5185/"
                    className="flex items-center gap-1 hover:text-orange-600 hover:bg-slate-300 hover:rounded-full px-6 py-1"
                  >
                    <FaLinkedin />
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://www.linkedin.com/in/ankit-kumar-1922b5185/"
                    className="flex items-center gap-1 hover:text-orange-600 hover:bg-slate-300 hover:rounded-full px-6 py-1"
                  >
                    <FaFacebook />
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://www.linkedin.com/in/ankit-kumar-1922b5185/"
                    className="flex items-center gap-1 hover:text-orange-600 hover:bg-slate-300 hover:rounded-full px-6 py-1"
                  >
                    <FaInstagram />
                    Instagram
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-center px-6">
          <span className="text-sm text-gray-500 sm:text-center">
            © {new Date().getFullYear()}
            <a href="/" className="hover:underline">
              {" "}
              Ankit
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
