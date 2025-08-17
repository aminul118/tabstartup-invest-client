import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Container from "@/components/ui/container";

const faq = [
  {
    question: "Why should You choose tab startup?",
    answer:
      "Discover Trusted Investment Opportunities with High Returns, Expert Guidance, and a Secure Platform for Your Financial Growth.",
  },
  {
    question: "What is the investment process?",
    answer:
      "Sign up, explore vetted opportunities, select your investment, and complete the transaction securely with expert guidance",
  },
  {
    question: "What is the minimum amount of investment?",
    answer:
      "The minimum investment starts at 5000 BDT, varying by opportunity, making it accessible for a wide range of investors.",
  },
  {
    question: "Can i back my money when i need?",
    answer:
      "Yes, withdrawals are available based on your investment terms, with flexibility in most options—details provided upfront.",
  },
  {
    question: "How can i rise fund for my business?",
    answer:
      "Submit your business proposal via our platform; once approved, attract funding from our network of investors.",
  },
  {
    question: "If you have more question?",
    answer:
      "Reach out to our support team via email, phone, or live chat, or explore our detailed FAQ section for more answers.",
  },
];

const FAQ = () => {
  return (
    <Container className=" flex items-center justify-center px-6">
      <div className="flex flex-col md:flex-row items-start gap-x-12 gap-y-6">
        <h2 className="text-4xl lg:text-5xl !leading-[1.15] font-bold tracking-tight">
          Frequently Asked <br /> Questions
        </h2>

        <Accordion type="single" defaultValue="question-0" className="max-w-xl">
          {faq.map(({ question, answer }, index) => (
            <AccordionItem key={question} value={`question-${index}`}>
              <AccordionTrigger className="text-left text-lg">
                {question}
              </AccordionTrigger>
              <AccordionContent>{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Container>
  );
};

export default FAQ;
