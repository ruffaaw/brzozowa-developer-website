"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className=" fixed top-0 left-0 w-full z-30 bg-opacity-90">
      <div
        className={`md:px-8 py-4 flex justify-between items-center w-full  ${
          isMenuOpen ? "bg-lightGreen" : "bg-transparent"
        }`}
      >
        <div className="flex items-center w-56">
          <Link href="#home">
            <img src="/logo.png" alt="Logo" className="h-16 w-16 mr-2" />
          </Link>
        </div>

        <nav className="hidden md:flex justify-center space-x-14 text-xl w-dvw">
          <Link href="/" className="block text-white hover:text-lightOrange">
            O inwestycji
          </Link>
          <Link href="/" className="block text-white hover:text-lightOrange">
            Profity
          </Link>
          <Link href="/" className="block text-white hover:text-lightOrange">
            Domy
          </Link>
          <Link href="/" className="block text-white hover:text-lightOrange">
            Galeria
          </Link>
        </nav>
        <div className="w-1/6 flex justify-end">
          <nav className=" max-md:hidden text-xl bg-darkOrange p-3 rounded-2xl w-40 text-center hover:bg-darkGreen">
            <Link href="/" className="block text-white w-full">
              Kontakt
            </Link>
          </nav>
        </div>

        <button
          className="md:hidden flex items-center text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 flex flex-col items-center top-24 pt-4 bg-lightGreen  shadow-md z-30 w-screen h-2/5">
          <Link
            href="/"
            className="text-white text-xl w-full py-5 flex justify-center hover:bg-darkGreen "
            onClick={() => setIsMenuOpen(false)}
          >
            <p className="break-words max-w-full">O inwestycji</p>
          </Link>
          <Link
            href="/"
            className="text-white text-xl w-full py-5 flex justify-center hover:bg-darkGreen break-words max-w-full"
            onClick={() => setIsMenuOpen(false)}
          >
            <p className="break-words max-w-full">Profity</p>
          </Link>
          <Link
            href="/"
            className="text-white text-xl w-full py-5 flex justify-center hover:bg-darkGreen break-words max-w-full"
            onClick={() => setIsMenuOpen(false)}
          >
            <p className="break-words max-w-full">Domy</p>
          </Link>
          <Link
            href="/"
            className="text-white text-xl w-full py-5 flex justify-center hover:bg-darkGreen break-words max-w-full"
            onClick={() => setIsMenuOpen(false)}
          >
            <p className="break-words max-w-full">Galeria</p>
          </Link>
          <Link
            href="/"
            className="text-white text-xl w-full py-5 flex justify-center hover:bg-darkGreen break-words max-w-full"
            onClick={() => setIsMenuOpen(false)}
          >
            <p className="break-words max-w-full">Kontakt</p>
          </Link>
        </div>
      )}
    </header>
  );
}
