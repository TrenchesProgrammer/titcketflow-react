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
    <div className="">
      <section className=" flex flex-col">
        <div className="  relative ">
          <div className="absolute top-30 right-30 w-16 h-16 bg-green-200 rounded-full opacity-50 blur-sm "></div>
          <h1
            className={` font-bold text-[60px] text-center`}
          >
            ONE SYSTEM. EVERY TICKET. <br />{" "}
            <span className="text-green-500">ZERO</span> STRESS.
          </h1>
          <div className="w-full flex justify-center">
            <p className="max-w-200 text-center">
              Create, track, and resolve tickets in one simple dashboard. Stay
              organized with real-time updates, clear status indicators, and
              seamless control of every request.
            </p>
          </div>
          <div className="flex justify-center gap-5 mt-10">
            <Link href="/signup" className="bg-green-400 text-center p-4 w-45 rounded-4xl">
              SignUp
            </Link>
            <Link href="/login" className="border text-center border-black p-4 w-45 rounded-4xl">
              Login
            </Link>
          </div>
          <Image
            className="w-full"
            src="/wave.svg"
            alt="Wave"
            width={1000}
            height={300}
          />
        </div>
      </section>

      <section className="flex flex-col py-10">
        <h2 className={` text-2xl text-center`}>
          Trusted by
        </h2>
        <AutoScroll />
      </section>
      <section className="flex flex-col gap-5 items-center padding-container ">
        <h2 className={` text-2xl text-center `}>
          Everything you need in one app
        </h2>
        <div className="flex gap-5">
          <div className="w-[60%] shadow-[0_3px_8px_#05df72] flex gap-5 p-5 rounded-2xl">
            <div>
              <h3>Insights & Analytics</h3>
              <p>
                Make informed decisions with visual analytics that show
                productivity and progress.
              </p>
            </div>
            <Image
              className=""
              src="/analytics.png"
              alt="analytics"
              height={400}
              width={250}
            />
          </div>
          <div className="w-[40%] shadow-[0_3px_8px_#05df72] flex gap-5 p-5 rounded-2xl">
            <div>
              <h3>Insights & Analytics</h3>
              <p>
                Make informed decisions with visual analytics that show
                productivity and progress.
              </p>
            </div>
            <Image
              className=""
              src="/analytics.png"
              alt="analytics"
              height={400}
              width={250}
            />
          </div>
        </div>

        <div className="flex gap-5">
          <div className="w-[40%] shadow-[0_3px_8px_#05df72] flex gap-5 p-5 rounded-2xl">
            <div>
              <h3>Insights & Analytics</h3>
              <p>
                Make informed decisions with visual analytics that show
                productivity and progress.
              </p>
            </div>
            <Image
              className=""
              src="/analytics.png"
              alt="analytics"
              height={400}
              width={250}
            />
          </div>
          <div className="w-[60%] shadow-[0_3px_8px_#05df72] flex gap-5 p-5 rounded-2xl">
            <div>
              <h3>Insights & Analytics</h3>
              <p>
                Make informed decisions with visual analytics that show
                productivity and progress.
              </p>
            </div>
            <Image
              className=""
              src="/analytics.png"
              alt="analytics"
              height={400}
              width={250}
            />
          </div>
        </div>
      </section>
      <section className="flex items-center padding-container my-10">
        <Faq/>
      </section>
      <section className="mt-5">
        <h2 className={`text-2xl  text-center`}>
          What Our Users Say
        </h2>
        <div className="flex gap-4 justify-center p-4">
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </div>
      </section>
      <footer className="padding-container">
        <Footer/>
      </footer>
    </div>
  );
};

export default LandingPage;
