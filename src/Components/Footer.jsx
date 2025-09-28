import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="bg-light pt-5 pb-4">
      <div className="container">
        <div className="row text-start">
          {/* Logo */}
          <div className="col-md-2 mb-4 d-flex align-items-start">
            <Link
              to="/"
              className="d-flex align-items-center justify-content-center text-white fw-bold fs-4 "
              style={{
                width: "50px",
                height: "50px",
                backgroundColor: "#ff6600",
                textDecoration: "none",
              }}
            >
              T
            </Link>
          </div>

          {/* Programs */}
          <div className="col-md-2 mb-4">
            <h6 className="fw-bold mb-3 text-dark">Programs</h6>
            <ul className="list-unstyled text-muted small">
              <li className="mb-2">Entrepreneurship</li>
              <li className="mb-2">Steps to Run a Startup</li>
              <li className="mb-2">Work at a Startup</li>
            </ul>
          </div>

          {/* Company */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold mb-3 text-dark">Company</h6>
            <ul className="list-unstyled text-muted small">
              <li className="mb-2">Super Chat</li>
              <li className="mb-2">IRasus</li>
              <li className="mb-2">CodeVidhaya</li>
              <li className="mb-2">BioHeaven360</li>
              <li className="mb-2">ThagamCapital</li>
              <li className="mb-2">How We Found</li>
              <li className="mb-2">Requirements For Funding</li>
              <li className="mb-2">People</li>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold mb-3 text-dark">Resources</h6>
            <ul className="list-unstyled text-muted small">
              <li className="mb-2">NDA</li>
              <li className="mb-2">Startup Directory</li>
              <li className="mb-2">Startup Library</li>
              <li className="mb-2">Terms of Investments</li>
            </ul>
          </div>

          {/* Apply Button */}
          <div className="col-md-2 mb-4 text-md-end">
            <p className="fw-bold text-muted mb-2">
              Make something people want.
            </p>
            <button
              className="btn fw-semibold px-3 py-1 text-white"
              style={{
                backgroundColor: "#ff6600",
                border: "none",
              }}
            >
              Apply
            </button>
          </div>
        </div>

        <hr />

        {/* Bottom Section */}
        <div className="row align-items-center pt-3">
          <div className="col-md-6 text-muted small">
            &copy; {currentTime.getFullYear()}{" "}
            <span className="fw-bold">Thangam Capital</span>
          </div>
          <div className="col-md-6 text-md-end">
            <div className="d-flex justify-content-md-end justify-content-start gap-3 fs-5 text-muted">
              <FaTwitter />
              <FaFacebook />
              <FaInstagram />
              <FaLinkedin />
              <FaYoutube />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
