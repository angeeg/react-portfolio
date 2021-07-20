import React, { useState } from "react";
import "./style.css";
import { validateEmail } from '../../utils/helpers'

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  // variable goes here
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!errorMessage) {
      console.log("Submit form", formState);
    }
  };

  const handleChange = (event) => {
    if (event.target.name === "email") {
      const isValid = validateEmail(event.target.value);
      if (!isValid) {
        setErrorMessage("Please enter valid email");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!event.target.value.length) {
        setErrorMessage(`${event.target.name} is required`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [event.target.name]: event.target.value });
      console.log("Handle form", formState);
    }
  };

  // return statement
  return (
    <div className="contact">
      <h1>Contact</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          defaultValue={name}
          placeholder="Enter name"
          onBlur={handleChange}
        ></input>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          defaultValue={email}
          placeholder="Enter email address"
          onBlur={handleChange}
        ></input>
        <label>Message:</label>
        <textarea
          name="message"
          defaultValue={message}
          placeholder="Write your message here..."
          onBlur={handleChange}
        ></textarea>

        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button 
        type='submit'
        className="form-btn">
        Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
