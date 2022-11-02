import ContactForm from "./ContactForm";
import {useMedia} from "use-media";
import {Helmet} from "react-helmet";
import React from "react";

const ContactPage = () => {
  const isWide = useMedia({minHeight: '630px'});
  const commonStyling = 'flex flex-col items-center contact-window-height';

  return (
    <>
      <Helmet>
          <title>panibo.pl | Kontakt</title>
      </Helmet>

      {isWide &&
          <div className={commonStyling}>
          <h1 className='text-4xl font-bold tracking-wider mb-2 mt-5'>Kontakt</h1>
          <h3 className='text-xl font-semibold mb-8'>Skontaktuj się ze mną! :)</h3>
          <ContactForm/>
      </div>}
      {!isWide &&
        <div className={`${commonStyling} justify-center`}>
            <h1 className='text-4xl font-bold tracking-wider mb-2 mt-5'>Przepraszamy! :(</h1>
            <h3 className='text-xl font-semibold mb-8'>Aby się ze mną skontaktować, musisz skorzystać z większego ekranu.</h3>
        </div>
      }
    </>
  );
}

export default ContactPage;