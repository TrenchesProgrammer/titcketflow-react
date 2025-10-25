"use client";
import Link from "next/link";
import { getSession } from "../utils/auth";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [session, setSession] = useState(null);

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
            Ticket<span>Flow</span>
          </h2>
        </li>

        <li>
          {!session ? (
            <ul className="flex gap-5">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/login">Sign In</Link>
              </li>
            </ul>
          ) : (
            <ul className="flex gap-5">
              <li>
                <Link href="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link href="/tickets">Tickets</Link>
              </li>
              <li>
                <button className="cursor-pointer" onClick={() => {
                  localStorage.removeItem("ticketapp_session");
                  location.href = "/login";
                }}>
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
