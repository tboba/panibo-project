import { Field, Form, Formik, FormikValues } from 'formik';
import { send } from '@emailjs/browser';
import * as Yup from 'yup';
import { useState } from 'react';

const ContactForm = () => {
  const [isSending, setIsSending] = useState<boolean>(false);
  const [hasBeenSent, setHasBeenSent] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);

  const errorStyle = 'text-red-600';
  const buttonIsSendingStyle = isSending ? 'opacity-50 cursor-not-allowed' : '';

  const handleSubmitForm = (values: FormikValues) => {
    if (isSending) {
      return;
    }

    if (hasBeenSent) {
      setErrorMessage('Hej! Wysłałeś już do mnie wiadomość :)');
      return;
    }

    setIsSending(true);

    send('www-project-1', 'template_szz1ibe', values, 'e9G_Dv7sS51F-i-1T')
      .then(() => {
        setHasBeenSent(true);
        setIsSending(false);
      })
      .catch(() => {
        setErrorMessage('Wiadomość nie została wysłana! Spróbuj ponownie później.');
        setIsSending(false);
      });
  };

  let FormSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Podane imię jest za krótkie!')
      .max(40, 'Podane imię jest za dlugie!')
      .required('Wymagane pole.'),
    surname: Yup.string()
      .min(2, 'Podane nazwisko jest za krótkie!')
      .max(60, 'Podane nazwisko jest za dlugie!')
      .required('Wymagane pole.'),
    email: Yup.string().email('Podany email jest nieprawidłowy!').required('Wymagane pole.'),
    description: Yup.string()
      .min(1, 'Treść nie została podana!')
      .max(1000, 'Podana treść jest za długa! Postaraj się streścić.')
      .required('Wymagane pole.'),
  });

  return (
    <Formik
      initialValues={{ name: '', surname: '', email: '', description: '' }}
      validationSchema={FormSchema}
      onSubmit={async (values) => handleSubmitForm(values)}
    >
      {({ errors, touched }) => (
        <Form className="flex h-[30em] flex-col items-center justify-around rounded-lg border p-[1.25em] md:w-[40em]">
          <div className="flex flex-col">
            <label htmlFor="name">Imię</label>
            <Field name="name" type="text" className="h-[2em] w-[20em]" />
            {errors.name && touched.name ? <p className={errorStyle}>{errors.name}</p> : null}
          </div>

          <div className="flex flex-col">
            <label htmlFor="lastName">Nazwisko</label>
            <Field name="surname" type="text" className="h-[2em] w-[20em]" />
            {errors.surname && touched.surname ? <p className={errorStyle}>{errors.surname}</p> : null}
          </div>

          <div className="flex flex-col">
            <label htmlFor="lastName">Email</label>
            <Field name="email" type="text" className="h-[2em] w-[20em]" />
            {errors.email && touched.email ? <p className={errorStyle}>{errors.email}</p> : null}
          </div>

          <div className="flex flex-col">
            <label htmlFor="lastName">W czym mogę pomóc?</label>
            <Field as="textarea" name="description" type="text" className="h-[5em] w-[20em]" />
            {errors.description && touched.description ? <p className={errorStyle}>{errors.description}</p> : null}
          </div>

          <button
            type="submit"
            className={`border border-dashed bg-indigo-100 py-[0.5em] px-[1em] ${buttonIsSendingStyle}`}
          >
            Wyślij mi maila!
          </button>

          {isSending && <p className={errorStyle}>Trwa wysyłanie maila...</p>}
          {hasBeenSent && !errorMessage && <p className={errorStyle}>Wiadomość została wysłana :)</p>}
          {errorMessage && <p className={errorStyle}>{errorMessage}</p>}
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
