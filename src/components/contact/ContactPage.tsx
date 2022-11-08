import ContactForm from "./ContactForm";
import {Helmet} from "react-helmet";
import React from "react";

const ContactPage = () => {
  return (
    <>
      <Helmet>
          <title>panibo.pl | Kontakt</title>
      </Helmet>

          <div className='flex flex-col items-center contact-window-height min-h-[630px]'>
          <h1 className='text-4xl font-bold tracking-wider mb-2 mt-5'>Kontakt</h1>
          <h3 className='text-xl font-semibold mb-8'>Skontaktuj się ze mną! :)</h3>
          <ContactForm/>
      </div>
    </>
  );
}

export default ContactPage;