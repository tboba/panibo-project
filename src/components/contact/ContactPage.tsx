import ContactForm from './ContactForm';
import { Helmet } from 'react-helmet';
import React from 'react';

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>panibo.pl | Kontakt</title>
      </Helmet>

      <section className="contact-window-height flex min-h-[630px] flex-col items-center">
        <h1 className="mb-2 mt-5 text-4xl font-bold tracking-wider">Kontakt</h1>
        <h3 className="mb-8 text-xl font-semibold">Skontaktuj się ze mną! :)</h3>
        <ContactForm />
      </section>
    </>
  );
};

export default ContactPage;
