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
                <p><strong>Effective Date:</strong> August 12, 2026 | <strong>Last Updated:</strong> August 12, 2026</p>
                <p><strong>Webberg</strong> ("we", "our", or "us") respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, store, and safeguard personal information when you visit <a href="https://webberg.in" style={{ color: "#60a5fa" }}>webberg.in</a>, submit an enquiry, communicate with us, or engage our digital services.</p>

                <h4 style={{ color: "#60a5fa", marginTop: "18px", marginBottom: "6px" }}>1. Information We Collect</h4>
                <p>We collect personal information that you voluntarily provide when interacting with Webberg:</p>
                <ul style={{ paddingLeft: "20px", marginTop: "6px", marginBottom: "10px" }}>
                  <li><strong>Voluntarily Provided:</strong> Full Name, Email Address, Phone Number, Service Selection, Project Scope, Inquiry Description, and communication records.</li>
                  <li><strong>Automatically Collected:</strong> Technical diagnostic details such as IP address, browser type, device OS, pages visited, and general site performance metrics gathered through server logs and analytics tools.</li>
                </ul>

                <h4 style={{ color: "#60a5fa", marginTop: "18px", marginBottom: "6px" }}>2. How We Use Your Information</h4>
                <p>Your information is used strictly for legitimate business and service delivery purposes, including:</p>
                <ul style={{ paddingLeft: "20px", marginTop: "6px", marginBottom: "10px" }}>
                  <li>Responding to your project enquiries and requests for proposals</li>
                  <li>Delivering custom quotes, project timelines, and milestone updates</li>
                  <li>Providing web development, UI/UX design, SEO, branding, and technical services</li>
                  <li>Maintaining client communication, technical support, and invoicing records</li>
                  <li>Ensuring website security, preventing abuse, and complying with legal obligations</li>
                </ul>

                <h4 style={{ color: "#60a5fa", marginTop: "18px", marginBottom: "6px" }}>3. Data Sharing & Third-Party Services</h4>
                <p><strong>We never sell or rent your personal information to third parties.</strong> We may share data only with trusted infrastructure providers (cloud hosting, email communication microservices, analytics) strictly necessary to deliver our services, or when required by law or legal proceedings.</p>

                <h4 style={{ color: "#60a5fa", marginTop: "18px", marginBottom: "6px" }}>4. Data Security & Retention</h4>
                <p>We apply robust administrative, technical, and physical controls to protect your data against unauthorized access, loss, or alteration. We retain personal data only for as long as required to fulfill service contracts, resolve technical matters, or satisfy legal and tax compliance duties.</p>

                <h4 style={{ color: "#60a5fa", marginTop: "18px", marginBottom: "6px" }}>5. Your Rights & Compliance with DPDP Act, 2023</h4>
                <p>Webberg operates in accordance with applicable data protection laws, including provisions of India's <strong>Digital Personal Data Protection (DPDP) Act, 2023</strong>. You have the right to request access to, correction of, or deletion of your personal data, or to withdraw consent for non-essential communications.</p>

                <h4 style={{ color: "#60a5fa", marginTop: "18px", marginBottom: "6px" }}>6. Cookies & Tracking</h4>
                <p>We use essential functional cookies and basic website analytics to ensure proper site navigation, security, and performance analysis. You can control cookie preferences directly through your web browser settings.</p>

                <h4 style={{ color: "#60a5fa", marginTop: "18px", marginBottom: "6px" }}>7. Privacy Grievances & Contact Information</h4>
                <p>If you have questions regarding this Privacy Policy, wish to exercise your privacy rights, or have a grievance, please contact us at:</p>
                <div style={{ background: "rgba(15, 23, 42, 0.6)", padding: "12px 16px", borderRadius: "8px", marginTop: "8px", border: "1px solid rgba(255, 255, 255, 0.08)" }}>
                  <p style={{ margin: "2px 0" }}><strong>Entity:</strong> Webberg</p>
                  <p style={{ margin: "2px 0" }}><strong>Email:</strong> <a href="mailto:support@webberg.in" style={{ color: "#60a5fa" }}>support@webberg.in</a></p>
                  <p style={{ margin: "2px 0" }}><strong>Phone:</strong> +91 78100 59511</p>
                  <p style={{ margin: "2px 0" }}><strong>Location:</strong> Tambaram, Chennai – 600058, Tamil Nadu, India</p>
                  <p style={{ margin: "2px 0" }}><strong>Website:</strong> <a href="https://webberg.in" style={{ color: "#60a5fa" }}>https://webberg.in</a></p>
                </div>
              </>
            ) : (
              <>
                <p><strong>Effective Date:</strong> August 12, 2026 | <strong>Last Updated:</strong> August 12, 2026</p>
                <p>Welcome to <strong>Webberg</strong> (<a href="https://webberg.in" style={{ color: "#60a5fa" }}>webberg.in</a>). These Terms & Conditions govern your access to and use of Webberg's website, services, content, and digital solutions.</p>
                <p>By accessing our website, submitting an enquiry, requesting a quotation, or engaging our services, you agree to be bound by these Terms.</p>

                <h4 style={{ color: "#60a5fa", marginTop: "18px", marginBottom: "6px" }}>1. About Webberg & Our Services</h4>
                <p>Webberg is a digital technology agency based in Chennai, India. Our services include:</p>
                <ul style={{ paddingLeft: "20px", marginTop: "6px", marginBottom: "10px" }}>
                  <li>Custom Website Design & Development (React, Node.js, JavaScript)</li>
                  <li>UI/UX Design, Prototyping & Visual Identity</li>
                  <li>Search Engine Optimization (SEO) & Local Organic Search Audit</li>
                  <li>Branding, Logo Design & Digital Asset Creation</li>
                  <li>Social Media Management & Strategy</li>
                  <li>Web Applications, Microservices & API Integration</li>
                  <li>Technical Support, Website Optimization & Maintenance</li>
                </ul>

                <h4 style={{ color: "#60a5fa", marginTop: "18px", marginBottom: "6px" }}>2. Acceptance & Website Use</h4>
                <p>You confirm that you have the legal capacity to enter into binding agreements and will use our website solely for lawful purposes. You must not attempt unauthorized access, introduce malware, perform unauthorized scraping, or interfere with website security.</p>

                <h4 style={{ color: "#60a5fa", marginTop: "18px", marginBottom: "6px" }}>3. Project Scope & Quotations</h4>
                <p>Project scopes, deliverables, timelines, and costs are defined in specific written proposals or statements of work (SOW). Any additional features, major design alterations, or scope changes requested after approval will be treated as extra deliverables subject to revised quotes.</p>

                <h4 style={{ color: "#60a5fa", marginTop: "18px", marginBottom: "6px" }}>4. Client Responsibilities & Materials</h4>
                <p>Clients agree to provide accurate information, logos, content, access credentials, and timely feedback needed for project execution. Clients warrant that they own or have licensed all supplied materials (images, text, trademarks) and indemnify Webberg against third-party infringement claims.</p>

                <h4 style={{ color: "#60a5fa", marginTop: "18px", marginBottom: "6px" }}>5. Payments & Milestones</h4>
                <p>Fees, deposits, and payment schedules are set out in individual project agreements or invoices. Webberg reserves the right to pause development, withhold deployment, or suspend maintenance where invoices remain unpaid beyond agreed due dates.</p>

                <h4 style={{ color: "#60a5fa", marginTop: "18px", marginBottom: "6px" }}>6. Intellectual Property & Portfolio Rights</h4>
                <p>Upon 100% full settlement of invoices, clients receive ownership of custom source code and assets created specifically for their project. Webberg retains rights over pre-existing tools, libraries, and frameworks, and reserves the right to showcase non-confidential completed projects in our portfolio and marketing channels.</p>

                <h4 style={{ color: "#60a5fa", marginTop: "18px", marginBottom: "6px" }}>7. Warranty Disclaimer & Limitation of Liability</h4>
                <p>Services are provided using professional standards. Webberg is not liable for third-party hosting outages, algorithm changes by search engines (e.g. Google), or unauthorized third-party modifications made after delivery. Total aggregate liability for any project shall not exceed the total amount paid by the client for that project.</p>

                <h4 style={{ color: "#60a5fa", marginTop: "18px", marginBottom: "6px" }}>8. Governing Law & Jurisdiction</h4>
                <p>These Terms are governed by and construed in accordance with the laws of India. Any disputes arising out of these Terms or Webberg services shall be subject to the exclusive jurisdiction of the competent courts in <strong>Chennai, Tamil Nadu, India</strong>.</p>

                <h4 style={{ color: "#60a5fa", marginTop: "18px", marginBottom: "6px" }}>9. Contact Information</h4>
                <p>For questions or formal legal notices regarding these Terms, please contact:</p>
                <div style={{ background: "rgba(15, 23, 42, 0.6)", padding: "12px 16px", borderRadius: "8px", marginTop: "8px", border: "1px solid rgba(255, 255, 255, 0.08)" }}>
                  <p style={{ margin: "2px 0" }}><strong>Legal Entity:</strong> Webberg</p>
                  <p style={{ margin: "2px 0" }}><strong>Email:</strong> <a href="mailto:support@webberg.in" style={{ color: "#60a5fa" }}>support@webberg.in</a></p>
                  <p style={{ margin: "2px 0" }}><strong>Phone:</strong> +91 78100 59511</p>
                  <p style={{ margin: "2px 0" }}><strong>Address:</strong> Tambaram, Chennai - 600058, Tamil Nadu, India</p>
                  <p style={{ margin: "2px 0" }}><strong>Website:</strong> <a href="https://webberg.in" style={{ color: "#60a5fa" }}>https://webberg.in</a></p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
