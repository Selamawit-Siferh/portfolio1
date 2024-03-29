import React, { useState } from "react";
import PageHeaderContainer from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import "./style.scss";
import { Animate } from "react-simple-animate";
import emailjs from 'emailjs-com';
import {HiX} from  "react-tsparticles"


const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate name, email, and email format
    if (!name) {
      alert("Please enter your name.");
      return;
    }

    if (!email) {
      alert("Please enter your email.");
      return;
    }
    if (!description) {
      alert("Please enter your messages.");
      return;
    }
   

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid Gmail address.");
      alert("Please enter a valid Gmail address.");
      return;
    }

    // EmailJS configuration
    const templateParams = {
      to_name: 'Selamawit',
      from_name: name,
      from_email: email,
      message: description,
    };

    // EmailJS service ID, template ID, and user ID
    const serviceId = 'service_gm3uafl';
    const templateId = 'template_zmiihpw';
    const userId = 'eyfiAWRIwU6iauKs7';

    // Send email using EmailJS
    emailjs.send(serviceId, templateId, templateParams, userId)
      .then((response) => {
        const successMessage = `Email sent successfully! Status: ${response.status}, Response: ${response.text}`;
        alert(successMessage);
        // Reset form fields
        setName("");
        setEmail("");
        setDescription("");
        setEmailError("");
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };

  const validateEmail = (email) => {
    // Email validation regular expression
    const emailRegex = /^[^\s@]+@gmail\.com$/;
    return emailRegex.test(email);
  };

  return (
    <section className="contact" id="contact">
      <PageHeaderContainer
        headerText="My Contact"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="contact__content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(-200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <h3 className="contact__content__header-text">Let's Contact</h3>
        </Animate>
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <div className="contact__content__form">
            <form onSubmit={handleSubmit}>
              <div className="contact__content__form__controlswrapper">
                <div>
                  <input
                    type="text"
                    className="inputName"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <label htmlFor="name" className="nameLabel">
                    Name
                  </label>
                </div>
                <div>
                  <input
                    type="email"
                    className="inputEmail"
                    name="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setEmailError("");
                    }}
                    required
                  />
                  <label htmlFor="email" className="emailLable">
                    Email
                  </label>
                  {emailError && (
                    <p className="error-message">{emailError}</p>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    className="inputDescription"
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    rows={4}
                  />
                  <label htmlFor="description" className="descriptionLabel">
                    Messages
                  </label>
                </div>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </Animate>
      </div>
    </section>
  );
};

export default Contact;