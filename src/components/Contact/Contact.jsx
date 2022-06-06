/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const styles = {
    contactHeaderContainer: css`
      max-width: 60%;
      margin: 40px auto;
      padding: 20px;
    `,
  };
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_6p0ftul",
      "template_ve3vull",
      form.current,
      "VOWmokY1AoTcLKcyH"
    );

    e.target.reset();
  };

  return (
    <div>
      <div css={styles.contactHeaderContainer}>
        <h1>Contact</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt
          debitis molestias ratione non fuga atque, excepturi illum dolore
          delectus fugiat, reiciendis quas? Numquam sit ab similique dolor, sint
          ea.
        </p>
      </div>
      <section id="contact">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

        <div className="container contact__container">
          <div className="contact__options">
            <article className="contact__option">
              <MdOutlineEmail className="contact__option-icon" />
              <h4>Email</h4>
              <h5>Caweb.cph@gmail.com</h5>
              <a href="mailto:Caweb.cph@gmail.com">Send a message</a>
            </article>
            <article className="contact__option">
              <RiMessengerLine className="contact__option-icon" />
              <h4>Messenger</h4>
              <h5>Carl Abel</h5>
              <a href="https://m.me/carl.Abel">Send a message</a>
            </article>
            <article className="contact__option">
              <BsWhatsapp className="contact__option-icon" />
              <h4>WhatsApp</h4>
              <h5>+123456789</h5>
              <a href="https://api.whatsapp.com/send?phone=+1234567890">
                Send a message
              </a>
            </article>
          </div>
          {/* END OF CONTACT OPTIONS */}
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              rows="7"
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
