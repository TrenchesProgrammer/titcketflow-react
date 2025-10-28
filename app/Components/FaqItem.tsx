"use client";
import { useState } from "react";

interface FaqItemProps {
  title: string;
  children: React.ReactNode;
}

const FaqItem: React.FC<FaqItemProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq-item">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center"
      >
        <h3 className="font-semibold text-left">{title}</h3>
        <span>{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && <div className="mt-2 text-gray-600">{children}</div>}
    </div>
  );
};

export default FaqItem;