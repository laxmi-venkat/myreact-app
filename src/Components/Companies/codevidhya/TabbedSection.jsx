import { useState } from "react";
import iconInterface from "../../../assets/codevidya/interface.png";
import iconAccessibility from "../../../assets/codevidya/Accessbility.png";
import iconSupport from "../../../assets/codevidya/phoneicon.png";
import userfriendly from "../../../assets/codevidya/userfriendly.png";
import support from "../../../assets/codevidya/phone.png";
import Accessimg from "../../../assets/codevidya/Accessimg.png";

const tabs = [
  {
    id: "interface",
    label: "Interface",
    icon: iconInterface,
    content: (
      <div style={{ display: "flex", alignItems: "center", marginTop: 30 }}>
        <div style={{ flex: 2, marginRight: 30 }}>
          <h2>User Friendly Interface</h2>
          <p>
            Our School LMS is created with users in mind. Anyone with basic
            knowledge of computers and email can start using the application
            within a few minutes of their first login. The user interface of
            the LMS is easy to use and interactive, helping school staff manage
            operations efficiently without technical assistance.
          </p>
        </div>
        <img src={userfriendly} alt="User friendly" style={{ maxWidth: 400 }} />
      </div>
    ),
  },
  {
    id: "support",
    label: "Support",
    icon: iconSupport,
    content: (
      <div style={{display:'flex',alignItems:'center',gap:30}}>
        <div style={{flex:2}}>
        <h2 style={{ color: "#137ef5" }}>Excellent Client Support</h2>
        <p>
          We provide quick and reliable assistance for any software issues.
          Our dedicated technical support team resolves parent queries—
          whether about logging in or fee-related questions—promptly and
          professionally. Codevidhya’s School LMS ensures smooth operations
          and builds credibility.
        </p>
        </div>
        <img src={support} alt="Support" style={{ maxWidth: 400 }} />
      </div>
    ),
  },
  {
    id: "accessibility",
    label: "Accessibility",
    icon: iconAccessibility,
    content: (
      <div style={{display:'flex',alignItems:'center',gap:30}}>
        <div style={{ flex:2}}>
        <h2 style={{ color: "#137ef5" }}>Anytime & Anywhere Accessibility</h2>
        <p>
          Our cloud-based technology allows the Codevidhya LMS to be used
          anywhere and anytime—requiring only an internet connection.
        </p>
        </div>
        <img src={Accessimg} alt="Accessibility" style={{ maxWidth: 400 }} />
      </div>
    ),
  },
];

export default function TabbedSection() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div style={{ width: "1050px", margin: "48px auto 0" }}>
      {/* ---------- Tab headers ---------- */}
      <div
        style={{
          display: "flex",
          background: "#fff",
          boxShadow: "0 5px 18px rgba(34,68,109,0.07)",
          borderRadius: "10px 10px 0 0",
          height: "104px",
          alignItems: "center",
          justifyContent: "space-around",
          position: "relative",
        }}
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              flex: 1,
              border: "none",
              background: "none",
              cursor: "pointer",
              padding: "20px 0 0 0",
              outline: "none",
              height: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                color: activeTab === tab.id ? "#137ef5" : "#333",
                fontWeight: activeTab === tab.id ? 600 : 500,
                fontSize: "1.2rem",
                transition: "color .2s",
              }}
            >
              <img
                src={tab.icon}
                alt={tab.label}
                style={{
                  height: 46,
                  marginBottom: 6,
                  opacity: activeTab === tab.id ? 1 : 0.55,
                  transition: "opacity .2s",
                }}
              />
              <div>{tab.label}</div>
            </div>
          </button>
        ))}

        {/* Moving underline for the active tab */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: `${(tabs.findIndex((t) => t.id === activeTab) * 100) /
              tabs.length}%`,
            width: `${100 / tabs.length}%`,
            borderBottom: "4px solid #137ef5",
            borderRadius: "3px",
            transition: "left .25s",
          }}
        />
      </div>

      {/* ---------- Tab content ---------- */}
      <div
        style={{
          background: "#fff",
          minHeight: "320px",
          boxShadow: "0 5px 18px rgba(34,68,109,0.07)",
          borderRadius: "0 0 16px 16px",
          padding: "36px 46px 40px",
        }}
      >
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  );
}
