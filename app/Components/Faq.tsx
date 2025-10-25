"use client";
import FaqItem from "./FaqItem";
import {Flex} from "@mantine/core";
import "@mantine/core"
import { useMediaQuery } from "@mantine/hooks";
import data from '../faq.json';
import { Bellefair } from "next/font/google";
const bellefair = Bellefair({
  subsets: ["latin"],
  weight: ["400"],
});

const Faq = () => {
  const mobile = useMediaQuery("(max-width: 868px)");
  return (
    <div style={{ padding: "20px",  margin:'auto', borderRadius: "10px", width:'100%'}}>
      <Flex justify={'space-around'} align={'center'} gap={5} direction='column'>
        <h1 className={`text-2xl`}  style={{ textAlign: "center" }}>
          Frequently asked questions
        </h1>
        <div style={{ width: mobile ? '100%' : '80%'}}>
          {data.map((item, index) => (
            <FaqItem key={index} answer = {item.answer} question = {item.question}  />
          ))}
        </div>
      </Flex>
    </div>
  );
};

export default Faq;
