import React, { Fragment } from "react";
import ContactForm from "../components/contact/contact-form";
import Head from "next/head";

function Contact() {
  return (
    <Fragment>
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="Send me YOur Message!!" />
      </Head>
      <ContactForm />
    </Fragment>
  );
}

export default Contact;
