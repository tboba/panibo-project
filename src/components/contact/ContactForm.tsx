import {Field, Form, Formik, FormikValues} from "formik";
import emailjs from '@emailjs/browser';
import * as Yup from 'yup';
import {useState} from "react";

const ContactForm = () => {
  const errorClassNames = 'text-red-600';
  const [hasBeenSent, setHasBeenSent] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);

  const handleSubmitForm = (values: FormikValues) => {
    if (hasBeenSent) {
      setErrorMessage('Hej! Wysłałeś już do mnie wiadomość :)');
      return;
    }

    emailjs.send('www-project-1', 'template_szz1ibe', values, 'e9G_Dv7sS51F-i-1T')
      .then(() => setHasBeenSent(true))
      .catch(() => setErrorMessage('Wiadomość nie została wysłana! Spróbuj ponownie później.'));
  }

  let FormSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Podane imię jest za krótkie!')
      .max(40, 'Podane imię jest za dlugie!')
      .required('Wymagane pole.'),
    surname: Yup.string()
      .min(2, 'Podane nazwisko jest za krótkie!')
      .max(60, 'Podane nazwisko jest za dlugie!')
      .required('Wymagane pole.'),
    email: Yup.string()
      .email('Podany email jest nieprawidłowy!')
      .required('Wymagane pole.'),
    description: Yup.string()
      .min(1, 'Treść nie została podana!')
      .max(1000, 'Podana treść jest za długa! Postaraj się streścić.')
      .required('Wymagane pole.')
  });

  return (
    <Formik
      initialValues={{name: "", surname: "", email: "", description: "" }}
      validationSchema={FormSchema}
      onSubmit={async (values) => handleSubmitForm(values)}>
      {({ errors, touched }) => (
        <Form className='flex flex-col items-center justify-around h-[30em] md:w-[40em] border p-[1.25em] rounded-lg'>
          <div className='flex flex-col'>
            <label htmlFor="name">Imię</label>
            <Field name='name' type='text' className='w-[20em] h-[2em]' />
            {errors.name && touched.name ? (
              <p className={errorClassNames}>{errors.name}</p>
            ) : null}
          </div>

          <div className='flex flex-col'>
            <label htmlFor="lastName">Nazwisko</label>
            <Field name='surname' type='text' className='w-[20em] h-[2em]' />
            {errors.surname && touched.surname ? (
              <p className={errorClassNames}>{errors.surname}</p>
            ) : null}
          </div>

          <div className='flex flex-col'>
            <label htmlFor="lastName">Email</label>
            <Field name='email' type='text' className='w-[20em] h-[2em]' />
            {errors.email && touched.email ? (
              <p className={errorClassNames}>{errors.email}</p>
            ) : null}
          </div>

          <div className='flex flex-col'>
            <label htmlFor="lastName">W czym mogę pomóc?</label>
            <Field as='textarea' name='description' type='text' className='w-[20em] h-[5em]' />
            {errors.description && touched.description ? (
              <p className={errorClassNames}>{errors.description}</p>
            ) : null}
          </div>

          <button type="submit" className='border border-dashed bg-indigo-100 py-[0.5em] px-[1em]'>Wyślij mi maila!</button>
          {hasBeenSent && !errorMessage && <p className={errorClassNames}>Wiadomość została wysłana :)</p>}
          {errorMessage && <p className={errorClassNames}>{errorMessage}</p>}
        </Form>
      )}
        </Formik>
  );
}

export default ContactForm;