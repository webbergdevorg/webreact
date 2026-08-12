import React, { useState } from "react";

export default function ContactModal({ isOpen, onClose, onSubmitSuccess }) {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    service: "Web Design & Development",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const fname = formData.fname.trim();
    const email = formData.email.trim();
    const phone = formData.phone.trim();

    if (!fname) {
      alert("Please enter your First Name.");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      alert("Please enter a valid email address (e.g. name@domain.com).");
      return false;
    }

    const digitsOnly = phone.replace(/\D/g, "");
    if (!phone || digitsOnly.length < 7) {
      alert("Please enter a valid phone number (at least 7 digits).");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    const fnameClean = formData.fname.trim();
    const lnameClean = formData.lname.trim();
    const emailClean = formData.email.trim();
    const phoneClean = formData.phone.trim();
    const messageClean = formData.message.trim();
    const serviceSelected = formData.service || "Web Design & Development";
    const fullName = `${fnameClean} ${lnameClean}`.trim();

    try {
      await fetch("https://formsubmit.co/ajax/support@webberg.in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: fullName,
          email: emailClean,
          phone: phoneClean,
          "Service Required": serviceSelected,
          message: messageClean || "No message provided",
          _subject: `New Webberg Enquiry (${serviceSelected}) from ${fullName}`,
        }),
      });
    } catch (err) {
      console.warn("FormSubmit delivery warning:", err);
    } finally {
      setIsSubmitting(false);
    }

    onClose();
    if (onSubmitSuccess) {
      onSubmitSuccess(
        "Thank you! We have received your enquiry and will get back to you shortly."
      );
    }

    setFormData({
      fname: "",
      lname: "",
      email: "",
      phone: "",
      service: "Web Design & Development",
      message: "",
    });
  };

  return (
    <div
      className={`modal ${isOpen ? "is-active" : ""}`}
      id="contact-modal"
      aria-hidden={!isOpen}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-contact-title"
      style={{ display: isOpen ? "flex" : "none" }}
    >
      <div className="modal__overlay" onClick={onClose}></div>
      <div className="modal__container">
        <div className="contact__panel contact__panel--modal">
          <button
            type="button"
            className="modal__close"
            aria-label="Close modal"
            onClick={onClose}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          <span className="contact__badge">Contact</span>
          <h2 className="contact__title" id="modal-contact-title">
            get in <span>TOUCH</span> with us
          </h2>
          <p className="contact__sub">
            Have a project in mind? Get in touch with us, and we'll get back to you shortly.
          </p>

          <div className="contact__info">
            <a
              href="mailto:support@webberg.in"
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
              <div className="info-card__val">support@webberg.in</div>
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

          <form className="contact__form modal-form" noValidate onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="field">
                <label htmlFor="modal-fname">
                  First Name <span className="req-asterisk">*</span>
                </label>
                <input
                  id="modal-fname"
                  name="fname"
                  type="text"
                  placeholder="Ameer"
                  required
                  value={formData.fname}
                  onChange={handleChange}
                />
              </div>
              <div className="field">
                <label htmlFor="modal-lname">Last Name</label>
                <input
                  id="modal-lname"
                  name="lname"
                  type="text"
                  placeholder="Amsha"
                  value={formData.lname}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="field">
                <label htmlFor="modal-email">
                  E-mail <span className="req-asterisk">*</span>
                </label>
                <input
                  id="modal-email"
                  name="email"
                  type="email"
                  placeholder="ameer@gmail.com"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="field">
                <label htmlFor="modal-phone">
                  Phone <span className="req-asterisk">*</span>
                </label>
                <input
                  id="modal-phone"
                  name="phone"
                  type="tel"
                  placeholder="+91 78100 59511"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="field" style={{ marginBottom: "16px" }}>
              <label htmlFor="modal-service">
                Service Required <span className="req-asterisk">*</span>
              </label>
              <select
                id="modal-service"
                name="service"
                className="select-input"
                value={formData.service || "Web Design & Development"}
                onChange={handleChange}
              >
                <option value="Web Design & Development">Web Design & Development</option>
                <option value="UI/UX Design">UI/UX Design</option>
                <option value="SEO Services">SEO Services</option>
                <option value="Social Media Management">Social Media Management</option>
                <option value="Branding & Logo Design">Branding & Logo Design</option>
                <option value="Full Digital Solution">Full Digital Solution / Custom Project</option>
              </select>
            </div>

            <div className="field">
              <label htmlFor="modal-message">Message</label>
              <textarea
                id="modal-message"
                name="message"
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
      </div>
    </div>
  );
}
