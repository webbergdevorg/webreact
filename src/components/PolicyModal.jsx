import React from "react";

export default function PolicyModal({ isOpen, type, onClose }) {
  if (!isOpen) return null;

  const isPrivacy = type === "privacy";

  return (
    <div
      className="modal is-active"
      id="policy-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="policy-modal-title"
      style={{ display: "flex", zIndex: 10000 }}
    >
      <div className="modal__overlay" onClick={onClose}></div>
      <div className="modal__container" style={{ maxWidth: "720px", maxHeight: "85vh", overflowY: "auto" }}>
        <div className="contact__panel contact__panel--modal" style={{ padding: "32px 28px" }}>
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

          <span className="contact__badge">Legal & Transparency</span>
          <h2 className="contact__title" id="policy-modal-title" style={{ fontSize: "1.8rem", marginBottom: "16px" }}>
            {isPrivacy ? "Privacy Policy" : "Terms & Conditions"}
          </h2>

          <div className="policy-content" style={{ color: "#cbd5e1", fontSize: "0.95rem", lineHeight: "1.7", textAlign: "left" }}>
            {isPrivacy ? (
              <>
                <p><strong>Effective Date:</strong> August 10, 2026</p>
                <p><strong>Webberg Development</strong> ("we", "our", or "us") values your privacy. This policy outlines how we collect, use, and safeguard personal information when you use our website (webberg.dev) or contact us for digital services.</p>
                
                <h4 style={{ color: "#60a5fa", marginTop: "16px", marginBottom: "6px" }}>1. Information We Collect</h4>
                <p>We collect personal information you voluntarily provide through our contact forms, including your Name, Email Address, Phone Number, Service Selection, and Inquiry Description.</p>

                <h4 style={{ color: "#60a5fa", marginTop: "16px", marginBottom: "6px" }}>2. How We Use Information</h4>
                <p>We use your information exclusively to respond to service requests, deliver quotes, manage project milestones, and communicate about Webberg Development services. We do not sell or rent data to third parties.</p>

                <h4 style={{ color: "#60a5fa", marginTop: "16px", marginBottom: "6px" }}>3. Data Protection & Security</h4>
                <p>We apply industry-standard security controls to protect your data against unauthorized access, disclosure, or alteration.</p>

                <h4 style={{ color: "#60a5fa", marginTop: "16px", marginBottom: "6px" }}>4. Contact Us</h4>
                <p>For data removal or privacy inquiries, email us at <strong>support@webberg.in</strong> or call <strong>+91 78100 59511</strong> (Tambaram, Chennai - 600058).</p>
              </>
            ) : (
              <>
                <p><strong>Effective Date:</strong> August 10, 2026</p>
                <p>Welcome to <strong>Webberg Development</strong>. By accessing our site or hiring us for web design, development, SEO, or branding services, you agree to these Terms & Conditions.</p>

                <h4 style={{ color: "#60a5fa", marginTop: "16px", marginBottom: "6px" }}>1. Services & Deliverables</h4>
                <p>All project specifications, timelines, and deliverables are governed by individual scope proposals. Scope changes requested mid-project may be subject to additional hourly estimates.</p>

                <h4 style={{ color: "#60a5fa", marginTop: "16px", marginBottom: "6px" }}>2. Intellectual Property Rights</h4>
                <p>Upon full settlement of invoices, clients own all custom source code and assets created specifically for their project. Webberg Development reserves the right to display completed projects in our portfolio.</p>

                <h4 style={{ color: "#60a5fa", marginTop: "16px", marginBottom: "6px" }}>3. Payments & Deposits</h4>
                <p>Milestone payments and deposits must be completed as specified in individual invoices prior to final project deployment.</p>

                <h4 style={{ color: "#60a5fa", marginTop: "16px", marginBottom: "6px" }}>4. Governing Law</h4>
                <p>These terms are governed by the laws of Tamil Nadu, India. Disputes are subject to the courts located in Chennai, India.</p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
