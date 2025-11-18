import React from "react";
import "./Contact.css";
import mail from "../../assets/mail.svg";
import phone from "../../assets/phone.svg";
import location from "../../assets/location.svg";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "7f22a7ae-4e0c-466d-a441-d50c7416141d");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    // const res = await fetch("https://api.web3forms.com/submit", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Accept: "application/json",
    //   },
    //   body: json,
    // }).then((res) => res.json());
    const res = await fetch("/api/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert("✅ Message sent successfully!");
      event.target.reset();
    } else {
      alert("❌ Failed to send message. Please try again later.");
    }
  };
  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently avaliable to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img style={{ width: "30px" }} src={mail} alt="" />
              <p>saadsayed667@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img style={{ width: "30px" }} src={phone} alt="" />
              <p>+20 1551670978</p>
            </div>
            <div className="contact-detail">
              <img style={{ width: "30px" }} src={location} alt="" />
              <p>Cairo, Egypt</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            required
          />
          <label htmlFor="">Your Email</label>
          <input
            type="email"
            placeholder="Enter your Email"
            name="email"
            required
          />
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
