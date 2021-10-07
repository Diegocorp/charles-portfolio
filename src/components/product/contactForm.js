import React, { useState } from "react";
import emailjs from "emailjs-com";
import MessageBox from "../boxes/MessageBox";

const Results = () => {
  return (
    <MessageBox variant="success">
      <p>
        Your message has been successfully sent. I will contact you very soon!
      </p>
    </MessageBox>
  );
};

function ContactForm(props) {
  const [showResults, setShowResults] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "Gmail",
        "template_5ghzdlg",
        e.target,
        "user_CTiidBHHfkSh4r3N3du1Z"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setShowResults(true);
  };

  //   hide element
  setTimeout(() => {
    setShowResults(false);
  }, 5000);

  return (
    <form action="" onSubmit={sendEmail}>
      <div class="formWord">
        <h2>Say Hello!</h2>
        <span>Full Name</span>
        <br />
        <input class="input100" type="text" name="fullName" required />
        <br />
        <span>Phone Number</span>
        <br />
        <input class="input100" type="number" name="phone" required />
        <br />
        <span>Enter Email</span>
        <br />
        <input class="input100" type="email" name="email" required />
        <br />
      </div>
      <div class="formWord">
        <span>Message</span>
        <br />
        <textarea name="message" required></textarea>
        <br />
        <button>SUBMIT</button>

        <div class="row">{showResults ? <Results /> : null}</div>
      </div>
    </form>
  );
}

export default ContactForm;
