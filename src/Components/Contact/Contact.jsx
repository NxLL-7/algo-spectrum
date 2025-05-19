import React from "react";
import "./contact.css";
import Back from "../Back/Back";

const Contact = () => {
  const map =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224357.50123736556!2d77.23701410511268!3d28.522102350756608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1747652873746!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"';

  return (
    <>
      <Back
        title="Contact Us"
        abt="Get in touch with us—we're here to help with any questions or support you need."
      />
      <section className="contact padding">
        <div className="container FlexSB shadow">
          <div className="left row">
            <iframe src={map}></iframe>
          </div>
          <div className="right row">
            <h1>Contact Us</h1>
            <p id="cUs">We're open for any suggestion or just to have a chat</p>
            <div className="items grid2">
              <div className="box">
                <h4>Address: </h4>
                <p>XYZ</p>
              </div>
              <div className="box">
                <h4>Email: </h4>
                <p>XYZ</p>
              </div>
              <div className="box">
                <h4>Phone: </h4>
                <p>XYZ</p>
              </div>
            </div>
            <form action="#">
              <div className="FlexSB">
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Email" />
              </div>
              <input type="email" placeholder="Subject" />
              <textarea
                cols="30"
                rows="10"
                placeholder="Create A Message Here..."
              ></textarea>
              <button className="primary-btn">SEND</button>
            </form>
            <h3>Follow Us Here</h3>
            <span>FACEBOOK, X, INSTAGRAM</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
