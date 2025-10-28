import Image from "next/image";
import { Bellefair } from "next/font/google";
import AutoScroll from "./AutoScroll";
import TestimonialCard from "./TestimonialCard";
import FaqItem from "./FaqItem";
import Faq from "./Faq";
import Footer from "./Footer";
import Link from "next/link";
const bellefair = Bellefair({
  subsets: ["latin"],
  weight: ["400"],
});
const LandingPage = () => {
  return (
    <div className="py-10">
      <section className=" flex flex-col py-10">
        <div className="relative">
          <div className="absolute top-30 right-30 w-16 h-16 bg-green-200 rounded-full opacity-50 blur-sm"></div>
          <h1 className={`font-bold text-3xl md:text-4xl text-center`}>
            ONE SYSTEM. EVERY TICKET. <br />
            <span className="text-green-500">ZERO</span> STRESS.
          </h1>
          <div className="w-full flex justify-center mt-4 px-4">
            <p className="max-w-2xl text-center">
              Create, track, and resolve tickets in one simple dashboard. Stay
              organized with real-time updates, clear status indicators, and
              seamless control of every request.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center w-full px-4 items-center gap-5 mt-10">
            <Link href="/signup" className="bg-green-400 text-center p-4 w-full sm:w-48 rounded-full">
              Sign Up
            </Link>
            <Link href="/login" className="border text-center border-black p-4 w-full sm:w-48 rounded-full">
              Login
            </Link>
          </div>
          <Image
            className="w-full mt-8"
            src="/wave.svg"
            alt="Wave"
            width={1000}
            height={300}
          />
        </div>
      </section>

      <section className="flex flex-col py-10">
        <h2 className={`text-2xl text-center`}>Trusted by</h2>
        <AutoScroll />
      </section>

      <section className="flex flex-col gap-5 items-center padding-container">
        <h2 className={`text-2xl text-center`}>Everything you need in one app</h2>
        <div className="flex flex-col md:flex-row gap-5 w-full">
          <div className="w-full md:w-1/2 border border-green-200 flex flex-col sm:flex-row gap-5 p-5 rounded-2xl">
            <div className="flex-1">
              <h3>Insights & Analytics</h3>
              <p>Make informed decisions with visual analytics that show productivity and progress.</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 border border-green-200 flex flex-col sm:flex-row gap-5 p-5 rounded-2xl">
            <div className="flex-1">
              <h3>Task Management</h3>
              <p>Organize and prioritize your team’s work with a clear, shared view of all tickets.</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-5 w-full">
          <div className="w-full md:w-2/5 border border-green-200 flex flex-col sm:flex-row gap-5 p-5 rounded-2xl">
            <div className="flex-1">
              <h3>Real-Time Updates</h3>
              <p>Stay in the loop with instant notifications and a live activity feed.</p>
            </div>
          </div>
          <div className="w-full md:w-3/5 border border-green-200 flex flex-col sm:flex-row gap-5 p-5 rounded-2xl">
            <div className="flex-1">
              <h3>Customizable Workflows</h3>
              <p>Adapt the system to your team’s unique process with custom fields and statuses.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex items-center padding-container my-10">
        <Faq />
      </section>

      <section className="mt-5">
        <h2 className={`text-2xl text-center`}>What Our Users Say</h2>
        <div className="flex flex-col md:flex-row gap-4 items-center justify-center p-4">
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </div>
      </section>
      <footer className="padding-container mt-15">
        <Footer/>
      </footer>
    </div>
  );
};

export default LandingPage;
