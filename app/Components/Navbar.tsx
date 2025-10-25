"use client";
import Link from "next/link";
import { getSession } from "../utils/auth";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [session, setSession] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    const updateSession = () => {
      setSession(getSession());
    };

    updateSession(); // Initial check

    window.addEventListener("storage", updateSession);

    return () => {
      window.removeEventListener("storage", updateSession);
    };
  }, []);

  return (
    <nav>
      <ul className="flex justify-between padding-container text-lg py-5">
        <li>
          <h2>
            Ticket<span className="text-green-400">Flow</span>
          </h2>
        </li>

        <li>
          {!session ? (
            <ul className="flex gap-5">
              <li>
                <Link
                  href="/"
                  className={`${
                    pathname === "/" ? "text-black" : "text-gray-400"
                  }  hover:text-black`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/login"
                  className={`${
                    pathname === "/login" || pathname === "/signup"
                      ? "text-black"
                      : "text-gray-400"
                  } hover:text-black`}
                >
                  Sign In
                </Link>
              </li>
            </ul>
          ) : (
            <ul className="flex gap-5">
              <li>
                <Link
                  href="/dashboard"
                  className={`${
                    pathname === "/dashboard" ? "text-black" : "text-gray-400"
                  }  hover:text-black`}
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/tickets"
                  className={`${
                    pathname === "/tickets" ? "text-black" : "text-gray-400"
                  }  hover:text-black`}
                >
                  Tickets
                </Link>
              </li>
              <li>
                <button
                  className="cursor-pointer text-red-500"
                  onClick={() => {
                    localStorage.removeItem("ticketapp_session");
                    location.href = "/login";
                  }}
                >
                  Logout
                </button>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
