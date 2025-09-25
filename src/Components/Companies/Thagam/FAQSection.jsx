import React, { useState } from "react";

// Your FAQ questions and answers
const faqs = [
  {
    question: "What are the general functions of the organization?",
    answer: "Our organization provides financial and non-financial services to empower rural entrepreneurs and women leaders."
  },
  {
    question: "What are our principles?",
    answer: "We believe in integrity, transparency, collaboration, and community development."
  },
  {
    question: "Who are our investors / partners?",
    answer: "Our investors and partners include local banks, development agencies, and community groups."
  },
  {
    question: "How is our way forward?",
    answer: "We focus on scalable, sustainable growth by mentoring entrepreneurs and adapting products to market needs."
  },
  {
    question: "What is our Risk bearing capacity?",
    answer: "Our risk management strategy is based on diversified portfolios and strong assessment tools."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section style={{ background: "#F4F8FB", padding: "60px 0" }}>
      <h1
        style={{
          textAlign: "center",
          marginBottom: "36px",
          color: "#124074",
          fontSize: "2rem",
          fontWeight: 700,
        }}
      >
        FREQUENTLY ASKED QUESTIONS
      </h1>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            style={{
              background: "#fff",
              marginBottom: 16,
              borderRadius: 10,
              boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
            }}
          >
            <button
              onClick={() => toggleFAQ(idx)}
              style={{
                width: "100%",
                textAlign: "left",
                padding: "22px 24px",
                fontSize: "1.15rem",
                fontWeight: 500,
                color: "#1355a2",
                background: "none",
                border: "none",
                outline: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span>
                <span style={{
                  display: "inline-block",
                  marginRight: 12,
                  color: "#4db5ed",
                  fontSize: "1.22em",
                }}>
                  ?
                </span>
                {faq.question}
              </span>
              <span style={{ fontSize: "1.5em" }}>
                {openIndex === idx ? "\u25B2" : "\u25BC"}
              </span>
            </button>
            {openIndex === idx && (
              <div style={{
                padding: "0 24px 22px 54px",
                color: "#44576f",
                fontSize: "1rem",
                lineHeight: 1.8,
                borderTop: "1px solid #eaf1fb",
              }}>
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
