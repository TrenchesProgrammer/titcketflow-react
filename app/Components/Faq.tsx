import FaqItem from "./FaqItem";
import faqData from "../faq.json";

const Faq = () => {
  return (
    <div className="w-full mx-auto mt-8">
      <h2 className="text-2xl text-center mb-4">Frequently Asked Questions</h2>
      {faqData.map((faq, index) => (
        <FaqItem key={index} title={faq.question}>
          <p>{faq.answer}</p>
        </FaqItem>
      ))}
    </div>
  );
};

export default Faq;