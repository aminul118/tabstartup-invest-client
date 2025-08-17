import React from "react";
import ContactForm from "./ContactForm";
import GradientTitle from "@/components/ui/gradientTitle";
import Container from "@/components/ui/container";

const Contact = () => {
  return (
    <Container className="max-w-3xl">
      <GradientTitle
        title="Get in Touch"
        description="For any inquiries, please fill out the form below and a member of our team will get back to you shortly."
      />
      <ContactForm />
    </Container>
  );
};

export default Contact;
