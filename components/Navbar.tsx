"use client";

import Image from "next/image";
import logo from "../public/logo.jpeg";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { useTheme } from "@/app/hooks/useTheme";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const { toggleTheme, theme } = useTheme();

  const router = useRouter();

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-md">
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="w-[50px] h-[50px] cursor-pointer">
          <Image
            src={logo}
            alt="Logo"
            className="object-cover w-full h-full rounded-full border-2 border-white/30 shadow-sm"
            onClick={() => router.push("/")}
          />
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex gap-6 text-sm md:text-base font-medium text-gray-700">
          {[
            { label: "Home", path: "/" },
            { label: "About", path: "/about" },
            { label: "Pricing", path: "/pricing" },
            { label: "Contact", path: "/contact" },
          ].map(({ label, path }) => (
            <li
              key={label}
              className="hover:text-indigo-600 transition cursor-pointer"
            >
              <Link href={path}>{label}</Link>
            </li>
          ))}
        </ul>

        {/* Theme + Hamburger */}
        <div className="flex items-center gap-4 md:gap-6">
          <button
            onClick={toggleTheme}
            className="hover:text-yellow-600 dark:hover:text-yellow-300 transition-colors"
            title="Toggle Theme"
          >
            {theme === "dark" ? (
              <MdDarkMode size={20} />
            ) : (
              <MdOutlineLightMode size={20} />
            )}
          </button>

          <SignedIn>
            <UserButton />
          </SignedIn>

          <SignedOut>
            <SignInButton mode="modal">
              <button className="text-sm font-medium px-4 py-1 bg-indigo-500 text-white rounded-full">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>

          <div
            className="md:hidden text-2xl cursor-pointer"
            onClick={toggleMenu}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="flex flex-col gap-4 px-6 py-4 md:hidden text-gray-700 bg-white/95 shadow-md">
          {[
            { label: "Home", path: "/" },
            { label: "About", path: "/about" },
            { label: "Pricing", path: "/pricing" },
            { label: "Contact", path: "/contact" },
          ].map(({ label, path }) => (
            <li
              key={label}
              className="hover:text-indigo-600 cursor-pointer transition"
              onClick={toggleMenu}
            >
              <Link href={path}>{label}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
