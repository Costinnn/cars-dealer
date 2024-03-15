import React from "react";
import ContactForm from "@/components/pages/contact/ContactForm";
import ContactInfo from "@/components/pages/contact/ContactInfo";
import "./style.scss";

const page = () => {
  return (
    <main className="page-contact">
      <section className="first_pagesection section_narrow">
        <ContactInfo />
        <ContactForm />
      </section>
    </main>
  );
};

export default page;
