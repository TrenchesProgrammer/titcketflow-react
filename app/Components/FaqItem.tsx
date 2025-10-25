"use client";
import "../globals.css";
import { Flex } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import { useState } from "react";
type FaqItemProps = {
  question: string;
  answer: string;
}
const FaqItem = ({question, answer}: FaqItemProps) => {
  const [open, setOpen] = useState(false);
  const handleToggleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className="faq-item" onClick={handleToggleOpen}>
      <Flex justify={"space-between"}>
        <p className="faq-question">{question}</p>
        <IconPlus
          style={{
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease",
          }}
          
        />
      </Flex>
      {open && (
        <p style={{fontSize:'14px'}} className="faq-answer">
          {answer}
        </p>
      )}
    </div>
  );
};

export default FaqItem;
