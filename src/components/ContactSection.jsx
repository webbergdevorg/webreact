import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_webberg_enq";
const PUBLIC_KEY = "RRDKOopb2A2xKgAVZ";
const TEMPLATE_ID = "template_tmepfju";

export default function ContactSection({ onFormSubmitSuccess, onTriggerSocialDropdown }) {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.fname || !formData.email || !formData.phone) {
      alert("Please fill in all required fields (*)");
      return;
    }

    setIsSubmitting(true);

    const fullName = `${formData.fname} ${formData.lname}`.trim();
    const templateParams = {
      name: fullName,
      from_name: fullName,
      fname: formData.fname,
      lname: formData.lname,
      email: formData.email,
      from_email: formData.email,
      user_email: formData.email,
      reply_to: formData.email,
      phone: formData.phone,
      user_phone: formData.phone,
      message: formData.message || "No message provided",
      enquiry_message: formData.message || "No message provided",
    };

    try {
      console.log("Sending email via EmailJS...", { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY, templateParams });
      const res = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      console.log("EmailJS Success Response:", res);
    } catch (err) {
      console.error("EmailJS Error details:", err);
    } finally {
      setIsSubmitting(false);
    }

    if (onFormSubmitSuccess) {
      onFormSubmitSuccess(
        "Thank you! Your enquiry details have been submitted."
      );
    }

    setFormData({
      fname: "",
      lname: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section className="contact" id="contact">
      <div className="contact__panel">
        <span className="contact__badge">Contact</span>
        <h2 className="contact__title">
          get in <span>TOUCH</span> with us
        </h2>
        <p className="contact__sub">
          Have a project in mind? Get in touch with us, and we'll get back to you shortly.
        </p>

        <div className="contact__info">
          <a
            href="mailto:webbergdevelopment@gmail.com"
            className="info-card info-card--link"
            title="Send email to Webberg"
          >
            <div className="info-card__head">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
              <span>E-mail</span>
            </div>
            <div className="info-card__val">webbergdevelopment@gmail.com</div>
          </a>

          <a
            href="tel:+917810059511"
            className="info-card info-card--link"
            title="Call Webberg"
          >
            <div className="info-card__head">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.5 2.8.6a2 2 0 0 1 1.7 2Z" />
              </svg>
              <span>Phone</span>
            </div>
            <div className="info-card__val">+91 78100 59511</div>
          </a>
        </div>

        <form className="contact__form" noValidate onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="field">
              <label htmlFor="fname">
                First Name <span className="req-asterisk">*</span>
              </label>
              <input
                id="fname"
                type="text"
                placeholder="Ameer"
                required
                value={formData.fname}
                onChange={handleChange}
              />
            </div>
            <div className="field">
              <label htmlFor="lname">Last Name</label>
              <input
                id="lname"
                type="text"
                placeholder="Amsha"
                value={formData.lname}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="field">
              <label htmlFor="email">
                E-mail <span className="req-asterisk">*</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="ameer@gmail.com"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="field">
              <label htmlFor="phone">
                Phone <span className="req-asterisk">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="+91 78100 59511"
                required
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="4"
              placeholder="Hi, I am Ameer want to..."
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit" className="btn btn--submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending Enquiry..." : "Submit Form"}
          </button>
        </form>
      </div>

      <aside className="socials-panel">
        <span className="socials-panel__title">Socials</span>
        <div className="socials-panel__icons">
          <a
            href="https://www.instagram.com/webbergdevelopment/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.3 2.2.4.6.2 1 .4 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.8-.4 2.2-.2.6-.4 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.3-2.2-.4-.6-.2-1-.4-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.8.4-2.2.2-.6.4-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2m0 5.3A4.5 4.5 0 1 0 16.5 12 4.5 4.5 0 0 0 12 7.5m0 7.4A2.9 2.9 0 1 1 14.9 12 2.9 2.9 0 0 1 12 14.9m4.7-7.6a1.05 1.05 0 1 0 1.05 1.05A1.05 1.05 0 0 0 16.7 7.3" />
            </svg>
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            onClick={(e) => onTriggerSocialDropdown(e, "LinkedIn")}
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.94 5a2 2 0 1 1-4-.02 2 2 0 0 1 4 .02M7 8.48H3V21h4zM13.32 8.48H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z" />
            </svg>
          </a>
          <a
            href="#"
            aria-label="Facebook"
            onClick={(e) => onTriggerSocialDropdown(e, "Facebook")}
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12" />
            </svg>
          </a>
          <a
            href="#"
            aria-label="X"
            onClick={(e) => onTriggerSocialDropdown(e, "X")}
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.9 2H22l-7.1 8.12L23.2 22h-6.5l-5.1-6.67L5.8 22H2.7l7.6-8.68L2 2h6.66l4.6 6.09zM17.8 20.1h1.7L7.3 3.8H5.5z" />
            </svg>
          </a>
        </div>
      </aside>
    </section>
  );
}
