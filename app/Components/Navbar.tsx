"use client";
import Link from "next/link";
import { getSession } from "../utils/auth";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [session, setSession] = useState<any>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const updateSession = () => {
      setSession(getSession());
    };

    updateSession(); // Initial check
    window.addEventListener("storage", updateSession);
    return () => window.removeEventListener("storage", updateSession);
  }, []);

  const navLinks = !session ? (
    <>
      <li><Link href="/" className={`${pathname === "/" ? "text-black" : "text-gray-500"} hover:text-black block py-2 md:py-0`}>Home</Link></li>
      <li><Link href="/login" className={`${pathname === "/login" || pathname === "/signup" ? "text-black" : "text-gray-500"} hover:text-black block py-2 md:py-0`}>Sign In</Link></li>
    </>
  ) : (
    <>
      <li><Link href="/" className={`${pathname === "/" ? "text-black" : "text-gray-500"} hover:text-black block py-2 md:py-0`}>Home</Link></li>
      <li><Link href="/dashboard" className={`${pathname === "/dashboard" ? "text-black" : "text-gray-500"} hover:text-black block py-2 md:py-0`}>Dashboard</Link></li>
      <li><Link href="/tickets" className={`${pathname === "/tickets" ? "text-black" : "text-gray-500"} hover:text-black block py-2 md:py-0`}>Tickets</Link></li>
      <li>
        <button
          className="cursor-pointer text-red-500 w-full text-left block py-2 md:py-0"
          onClick={() => {
            localStorage.removeItem("ticketapp_session");
            location.href = "/login";
          }}
        >
          Logout
        </button>
      </li>
    </>
  );

  return (
    <nav className="padding-container py-5 relative">
      <div className="flex justify-between items-center">
        <Link href="/">
          <h2 className="text-lg font-bold">
            Ticket<span className="text-green-400">Flow</span>
          </h2>
        </Link>

        {/* Hamburger Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-5 text-lg">
          {navLinks}
        </ul>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-white shadow-lg rounded-lg p-4">
          <ul className="flex flex-col gap-4 text-lg">
            {navLinks}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
