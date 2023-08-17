import React, { useRef, useState } from 'react';
import style from './contact.module.css';
import * as emailjs from 'emailjs-com';

const Contact = () => {

  const form = useRef();

  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_fvw0zoh',
        'template_jnuene7',
        form.current,
        '2de5dh3wcuxLsnH3u'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div name="Contact" className={style.contact}>
      <h2>Contact</h2>
      <form
        className={style.form}
        onSubmit={sendEmail}
        ref={form}
      >
        <label for="name">Name</label>
        <input
          id="name"
          name="name"
          className={style.input}
          value={values.name}
          onChange={(e) => handleChange(e)}> 
        </input>
        <label for="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          className={style.input}
          value={values.email}
          onChange={(e) => handleChange(e)}>
        </input>
        <label for="message">Message</label>
        <textarea
          id="message"
          className={style.textArea}
          value={values.message}
          onChange={(e) => handleChange(e)}>
        </textarea>
        <button type="submit">Send</button>
      </form>
    </div> 
  )
}

export default Contact;