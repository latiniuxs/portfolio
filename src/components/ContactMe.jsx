import { Formik, Form, Field, ErrorMessage } from "formik";
import "./ContactMe.css";
import * as Yup from "yup";

const ContactMe = () => {
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  const handleSubmit = async (values, { setSubmitting , resetForm}) => {
    const { name, email, message } = values;
    const subject = "New Contact Message";
    const body = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

    const formData = new FormData();
    formData.append("subject", subject);
    formData.append("body", body);

    try {
      const response = await fetch(
        "https://formsubmit.co/5c69b41dac0c91e524aa4abbb76a1435",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        console.log("Email sent successfully!");
        resetForm()
      } else {
        console.error("Error sending email:", response.statusText);
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }

    setSubmitting(false);
  };

  return (
    <section className="project section" id="contactme-section">
      <h2 className="section__title">Contact Me</h2>
      <div className="home__container container grid">
        <div className="contact-me-container">
          <div className="contact-form">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <Field type="text" name="name" />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="error"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <Field type="email" name="email" />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="error"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Write me something</label>
                    <Field as="textarea" name="message" />
                    <ErrorMessage
                      name="message"
                      component="div"
                      className="error"
                    />
                  </div>

                  <button
                    className="button button--flex"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Send
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
