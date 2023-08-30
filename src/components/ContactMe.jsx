import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './ContactMe.css';

const ContactMe = () => {
  const initialValues = {
    name: '',
    email: '',
    message: '',
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    message: Yup.string().required('Message is required'),
  });

  // const handleSubmit = (values, { setSubmitting }) => {
  //   const { name, email, message } = values;
  //   const subject = 'New Contact Message';
  //   const body = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

  //   window.location.href = `mailto:your-email@example.com?subject=${encodeURIComponent(
  //     subject
  //   )}&body=${encodeURIComponent(body)}`;

  //   setSubmitting(false);
  // };

  return (
    <section className="project section" id="contactme-section">
        <h2 className="section__title"> Contact Me</h2>
        <div className="home__container container grid">
    <div className="contact-me-container">
      <div className="contact-form">
        <Formik initialValues={initialValues} validationSchema={validationSchema}>
          {({ isSubmitting }) => (
            <Form action="https://formsubmit.co/el/hocuji" method="POST">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <Field type="text" name="name" />
                <ErrorMessage name="name" component="div" className="error" />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <Field type="email" name="email" />
                <ErrorMessage name="email" component="div" className="error" />
              </div>

              <div className="form-group">
                <label htmlFor="message">Write me something</label>
                <Field as="textarea" name="message" />
                <ErrorMessage name="message" component="div" className="error" />
              </div>

              <button className= "button button--flex"type="submit" disabled={isSubmitting}>
                Send
              </button>
            </Form>
          )}
        </Formik>
      </div>
      <div className="contact-card">
        <div className="email-icon">
          <span role="img" aria-label="Email Icon">
            📧
          </span>
        </div>
        <a href={`mailto:oladetohunoluwakorede@gmail.com`}>
          <p>Email Me</p>
        </a>
      </div>
    </div>
    </div>
    </section>
  );
};

export default ContactMe;
