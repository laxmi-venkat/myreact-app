import React, { useState, useRef, useEffect } from "react";
import ApplyModal from "./ApplyModal";
import { Link } from "react-router-dom";
import  './Navbar.css'

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navRef = useRef(null);

  const toggleDropdown = (menu) => {
    setActiveDropdown((prev) => (prev === menu ? null : menu));
  };

  // Close dropdown when clicking anywhere in the navbar or outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current) {
        // Check if click is outside navbar completely
        if (!navRef.current.contains(event.target)) {
          setActiveDropdown(null);
        } else {
          // Click is inside navbar - check if it's on a dropdown trigger or dropdown content
          const clickedElement = event.target;
          const isDropdownTrigger = clickedElement.closest('[data-dropdown-trigger]');
          const isDropdownContent = clickedElement.closest('[data-dropdown-content]');
          
          // If clicking inside navbar but not on dropdown trigger or content, close dropdown
          if (!isDropdownTrigger && !isDropdownContent) {
            setActiveDropdown(null);
          }
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const dropdownData = {
    about: [
      { label: "How We Fund", path: "/about/how-we-fund" }, // Fixed typo: "found" → "fund"
      { label: "Requirements For Funding", path: "/about/requirements" },
      { label: "People", path: "/about/people" },
      { label: "chairperson", path: "/about/chairperson" },
      { label: 'Our People', path: '/about/ourpeople' }
    ],
    companies: [
      { label: "Superchat", path: "/companies/superchat" },
      { label: "CodeVidhaya", path: "/companies/codevidhya" },
      { label: "IRasus", path: "/companies/irasus" },
      { label: "BioHeaven360", path: "/companies/bioheaven" },
      { label: "Thangam Captial", path: "/companies/thangamcapital" },
    ],
    startupJobs: [
      { label: "All Jobs", path: "/jobs/All" },
      { label: "Engineering", path: "/jobs/engineering" },
      { label: "Sales Marketing", path: "/jobs/salesMarketing" },
      { label: "HR And Admin", path: "/jobs/HrAndAdmin" },
    ],
  };

  return (
    <>
      <nav
        ref={navRef}
        style={{
          backgroundColor: "#e8e8e8",
          position: "relative",
          zIndex: 1000,
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          height: "15vh",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            maxWidth: "1400px",
            marginLeft: "15px",
            padding: "0 30px",
            height: "50px",
          }}
        >
          {/* Logo */}
          <Link
            to="/"
            onClick={() => setActiveDropdown(null)}
            style={{
              width: "55px",
              height: "55px",
              backgroundColor: "#ff4500",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "50px",
              fontWeight: "bold",
              color: "white",
              cursor: "pointer",
              borderRadius: "2px",
             
              textDecoration: "none",
              marginTop: '40px',
              marginLeft: '10rem'
            }}
          >
            <span className="logo-text" style={{ textDecoration: "none" }}>T</span>
          </Link>

          {/* Navigation Links */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              fontSize: "20px",
              color: "#666",
              marginTop: "40px",
              marginRight: "10px",
              marginLeft: "-32rem",
            }}
          >
            {/* About Dropdown */}
            <div style={{ position: "relative" }}>
              <span
                data-dropdown-trigger="about"
                style={{ cursor: "pointer", color: "#666", fontSize: "18px" }}
                onClick={() => toggleDropdown("about")}
              >
                About
              </span>
              {activeDropdown === "about" && (
                <div
                  data-dropdown-content="about"
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    backgroundColor: "white",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                    minWidth: "180px",
                    padding: "8px 0",
                    marginTop: "10px",
                    border: "1px solid #ddd",
                    borderRadius: "3px",
                    marginLeft: '4px'
                  }}
                >
                  {dropdownData.about.map((item, i) => (
                    <Link
                      key={i}
                      to={item.path}
                      onClick={(e) => {
                        console.log(`Navigating to: ${item.path}`); // Debug log
                        setActiveDropdown(null);
                      }}
                      className="dropdown-link"
                      style={{
                        display: "block",
                        padding: "6px 16px",
                        color: "#333",
                        fontSize: "13px",
                        textDecoration: "none",
                        transition: "background-color 0.2s ease",
                        cursor: "pointer" // Ensure cursor shows it's clickable
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = "#f0f0f0";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = "transparent";
                      }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Companies Dropdown */}
            <div style={{ position: "relative" }}>
              <span
                data-dropdown-trigger="companies"
                style={{ cursor: "pointer", color: "#666", fontSize: "18px" }}
                onClick={() => toggleDropdown("companies")}
              >
                Companies
              </span>
              {activeDropdown === "companies" && (
                <div
                  data-dropdown-content="companies"
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    backgroundColor: "white",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                    minWidth: "200px",
                    padding: "19px 0",
                    marginTop: "10px",
                    border: "1px solid #ddd",
                    borderRadius: "3px",
                  }}
                >
                  {dropdownData.companies.map((item, i) => (
                    <Link
                      key={i}
                      to={item.path}
                      onClick={(e) => {
                        console.log(`Navigating to: ${item.path}`); // Debug log
                        setActiveDropdown(null);
                      }}
                      style={{
                        display: "block",
                        padding: "6px 16px",
                        color: "#333",
                        fontSize: "13px",
                        textDecoration: "none",
                        cursor: "pointer"
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = "#f0f0f0";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = "transparent";
                      }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Jobs Dropdown */}
            <div style={{ position: "relative" }}>
              <span
                data-dropdown-trigger="startupJobs"
                style={{ cursor: "pointer", color: "#666", fontSize: "18px" }}
                onClick={() => toggleDropdown("startupJobs")}
              >
                Jobs
              </span>
              {activeDropdown === "startupJobs" && (
                <div
                  data-dropdown-content="startupJobs"
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    backgroundColor: "white",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                    minWidth: "250px",
                    minHeight: "200px",
                    padding: "8px 0",
                    marginTop: "10px",
                    border: "1px solid #ddd",
                    borderRadius: "3px",
                  }}
                >
                  {dropdownData.startupJobs.map((item, i) => (
                    <Link
                      key={i}
                      to={item.path}
                      onClick={(e) => {
                        console.log(`Navigating to: ${item.path}`); // Debug log
                        setActiveDropdown(null);
                      }}
                      style={{
                        display: "block",
                        padding: "6px 16px",
                        color: "#333",
                        fontSize: "16px",
                        textDecoration: "none",
                        cursor: "pointer"
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = "#f0f0f0";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = "transparent";
                      }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right Side - Apply Button */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
           
              marginTop: "50px",
              marginLeft:'35px',
            }}
          >
            <span>Apply For Funding</span>
            <button
              style={{
                backgroundColor: "#ff4500",
                color: "white",
                border: "none",
                padding: "16px 24px",
                fontSize: "15px",
                cursor: "pointer",
                borderRadius: "15px",
             
                
             
                
              }}
              onClick={() => setShowModal(true)}
            >
              Apply
            </button>
          </div>
        </div>
      </nav>

      <ApplyModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};

export default Navbar;
