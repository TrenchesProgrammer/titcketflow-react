"use client";
import Link from "next/link";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <>
      <div
        style={{
          background:
            "radial-gradient(circle at center, #81c784, #66bb6a, #4caf50, #43a047, #388e3c)",
        }}
        className="mx-auto py-16 text-center rounded-2xl text-white"
      >
        <h2 className="text-3xl font-semibold mb-3">
          Looking for a smarter way to manage tickets?
        </h2>
        <p className="text-blue-100 mb-6">
          TicketFlow lets you stay on top of every request, from start to finish.
        </p>
        <button className="bg-white text-black px-6 py-2 rounded-lg font-medium hover:bg-blue-50 transition">
          Get Started →
        </button>
      </div>

      <div className="flex flex-col mt-10 md:flex-row justify-between gap-6">
        <div>
          <h3 className="font-bold text-2xl">
            TICKET<span className="text-green-400">FLOW</span>
          </h3>
          <p className="text-gray-500">
            Connecting people who help each other, no matter the distance.
          </p>
          <div className="flex gap-4 mt-4">
            <a
              href="https://github.com/your-github"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-green-500"
            >
              <Icon icon="mdi:github" className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/your-linkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-green-500"
            >
              <Icon icon="mdi:linkedin" className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com/your-twitter"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-green-500"
            >
              <Icon icon="mdi:twitter" className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-1 text-gray-500">
          <p className="text-gray-800 font-bold">Quick Links</p>
          <Link href="/" className="hover:text-green-500">
            Home
          </Link>
          <Link href="/tickets" className="hover:text-green-500">
            Tickets
          </Link>
          <Link href="/dashboard" className="hover:text-green-500">
            Dashboard
          </Link>
        </div>
        <div>
          <h4 className="font-semibold text-gray-800 mb-3">
            Join our newsletter
          </h4>
          <p className="text-sm text-gray-500 mb-4">
            Be the first to know when new features, stories, and updates drop.
          </p>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full text-black bg-green-100  rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <button
              type="submit"
              className="bg-green-400 text-white px-4 py-2 rounded-lg hover:bg-green-500 text-sm"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-gray-200 py-8 mt-10">
        <div className="text-gray-500 flex justify-between">
          <p>
            &copy; {new Date().getFullYear()} TicketFlow. All rights reserved.
          </p>
          <div className="flex gap-5">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;