import React, { useState } from "react";

const faqData = [
  {
    question: "What services does Webberg offer?",
    answer: (
      <p>
        Webberg provides end-to-end digital solutions including website design &amp;
        development, SEO services, UI/UX design, social media management, and branding
        &amp; logo design — everything your business needs to succeed online.
      </p>
    ),
  },
  {
    question: "How long does it take to build a website?",
    answer: (
      <p>
        Every project is different, but most websites are completed within <strong>2–6 weeks</strong>, depending on
        the size, features, and content. We'll provide a clear timeline before we begin and keep you updated
        throughout the development process.
      </p>
    ),
  },
  {
    question: "Will my website be mobile-friendly?",
    answer: (
      <p>
        Absolutely! Every website we build is fully responsive, ensuring it looks and performs perfectly on
        desktops, tablets, and smartphones. A mobile-friendly design also helps improve user experience and search
        engine rankings.
      </p>
    ),
  },
  {
    question: "Can you redesign my existing website?",
    answer: (
      <p>
        Yes! Whether your current website needs a fresh look, better performance, improved user experience, or
        modern features, we can redesign it while preserving your brand identity and business goals.
      </p>
    ),
  },
  {
    question: "Do I need to know coding to manage my website after launch?",
    answer: (
      <p>
        Not at all. We build websites that are easy to manage, allowing you to update text, images, and other
        content without any coding knowledge. We also provide guidance and support if you need help after launch.
      </p>
    ),
  },
];

export default function Faq() {
  const [openIndexes, setOpenIndexes] = useState({});

  const toggleFaq = (index) => {
    setOpenIndexes((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section className="faq" id="faq">
      <span className="faq__glow" aria-hidden="true"></span>
      <div className="faq__inner">
        {faqData.map((item, idx) => {
          const isOpen = !!openIndexes[idx];
          return (
            <div
              key={idx}
              className={`faq-item ${isOpen ? "is-open" : ""}`}
            >
              <button
                type="button"
                className="faq-item__q"
                aria-expanded={isOpen}
                onClick={() => toggleFaq(idx)}
              >
                <span>{item.question}</span>
                <span className="faq-item__icon" aria-hidden="true"></span>
              </button>
              <div className="faq-item__a">
                {item.answer}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
