import React from "react";
import "../globals.css";
import { Bellefair } from "next/font/google";

const bellefair = Bellefair({
  subsets: ["latin"],
  weight: ["400"],
});

const AutoScroll = () => {
  const items = [1,2,3,4,5,6,7,8];

  return (
    <div className="scroll-wrapper">
      <div className="scroll-track flex items-center">
        {items.concat(items).map((logo, idx) => (
          <p
            key={idx}
            className={`logo-item ${bellefair.className} text-4xl`}
          >
            LOGO
          </p>
        ))}
      </div>
    </div>
  );
};

export default AutoScroll;
