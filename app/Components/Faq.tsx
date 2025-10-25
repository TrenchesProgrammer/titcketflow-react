"use client";
import FaqItem from "./FaqItem";
import {Flex} from "@mantine/core";
import "@mantine/core"
import { useMediaQuery } from "@mantine/hooks";
import data from '../faq.json'
import { Bellefair } from "next/font/google";

const bellefair = Bellefair({
  subsets: ["latin"],
  weight: ["400"],
});

const Faq = () => {
  const mobile = useMediaQuery("(max-width: 868px)");
  return (
    <div style={{ padding: "20px",  margin:'auto', borderRadius: "10px"}}>
      <Flex justify={'space-around'} gap={5} direction={mobile ? "column" : "row"} >
        
        <h1 className={`${bellefair.className} text-3xl`}  style={{ textAlign: "left" }}>
          FREQUENTLY ASKED QUESTIONS
        </h1>
        <div style={{width: mobile ? '100%' : 'unset', maxWidth: mobile ? '100%' : '500px'}}>
          {data.map((item, index) => (
            <FaqItem key={index} answer = {item.answer} question = {item.question}  />
          ))}
        </div>
      </Flex>
    </div>
  );
};

export default Faq;
