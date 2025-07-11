"use client";
import Image from "next/image";
import logo from "../public/logo.jpeg"
import { FaTwitter, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 dark:bg-neutral-900 text-gray-700 dark:text-gray-300 py-10 px-4 md:px-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Logo + Description */}
        <div>
          <div className="w-[100px] h-[100px]">
            <Image
              src={logo}
              alt="Logo"
              className="object-cover w-full h-full rounded-full border-2 border-white/30 shadow-sm"
            />
          </div>
          <p className="text-sm mt-2">
            Track your finances smarter and simpler. Built for everyone who
            wants to control their budget.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-indigo-600 transition cursor-pointer">
              Home
            </li>
            <li className="hover:text-indigo-600 transition cursor-pointer">
              About
            </li>
            <li className="hover:text-indigo-600 transition cursor-pointer">
              Pricing
            </li>
            <li className="hover:text-indigo-600 transition cursor-pointer">
              Contact
            </li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
            Connect with us
          </h3>
          <div className="flex gap-4 text-xl">
            <a
              href="https://x.com/siddocode"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-600 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://github.com/sid2487"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-600 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/siddharth-mishra-02402b243/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-600 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://instagram.com/mishrasid007"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-600 transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-300 dark:border-gray-700 mt-10 pt-6 text-center text-sm">
        © {new Date().getFullYear()} Finly. All rights reserved.
      </div>
    </footer>
  );
}
