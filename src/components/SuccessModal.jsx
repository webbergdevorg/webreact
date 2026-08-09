import React from "react";

export default function SuccessModal({ isOpen, message, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      className={`success-modal ${isOpen ? "is-active" : ""}`}
      id="success-modal"
      role="dialog"
      aria-modal="true"
      style={{ display: isOpen ? "flex" : "none" }}
    >
      <div className="success-modal__overlay" onClick={onClose}></div>
      <div className="success-modal__card">
        <div className="success-modal__icon-wrap">
          <svg className="checkmark-svg" viewBox="0 0 52 52">
            <circle className="checkmark-circle" cx="26" cy="26" r="23" fill="none" />
            <path className="checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
          </svg>
        </div>
        <h3 className="success-modal__title">Inquiry Submitted!</h3>
        <p className="success-modal__desc">
          {message || "Thank you! We have received your details and will get back to you shortly."}
        </p>
        <button type="button" className="success-modal__btn" onClick={onClose}>
          Done
        </button>
      </div>
    </div>
  );
}
