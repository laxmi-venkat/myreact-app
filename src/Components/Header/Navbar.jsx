import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Dropdown } from 'react-bootstrap';
import ApplyModal from "./ApplyModal";

const CustomNavbar = () => {
  const [showModal, setShowModal] = useState(false);

  const dropdownData = {
    about: [
      { label: "How We Fund", path: "/about/how-we-fund" },
      { label: "Requirements", path: "/about/requirements" },
      { label: "People", path: "/about/people" },
      { label: "Chairperson", path: "/about/chairperson" },
      { label: "Our People", path: "/about/ourpeople" },
    ],
    companies: [
      { label: "Superchat", path: "/companies/superchat" },
      { label: "CodeVidhya", path: "/companies/codevidhya" },
      { label: "IRasus", path: "/companies/irasus" },
      { label: "BioHeaven360", path: "/companies/bioheaven" },
      { label: "Thangam Capital", path: "/companies/thangamcapital" },
    ],
    jobs: [
      { label: "All Jobs", path: "/jobs/all" },
      { label: "Engineering", path: "/jobs/engineering" },
      { label: "Sales Marketing", path: "/jobs/salesMarketing" },
      { label: "HR & Admin", path: "/jobs/HrAndAdmin" },
    ],
  };

  return (
    <>
      <Navbar bg="light" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <div 
              className="bg-warning text-white  d-flex align-items-center justify-content-center"
              style={{ width: "40px", height: "40px" ,
                   backgroundColor: "#ff6b35",
                   background: "linear-gradient(135deg, #ff6b35, #ff8e53) "
              }}
            >
              T
            </div>
          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Dropdown as={Nav.Item}>
                <Dropdown.Toggle as={Nav.Link}>About</Dropdown.Toggle>
                <Dropdown.Menu>
                  {dropdownData.about.map((item) => (
                    <Dropdown.Item as={Link} to={item.path} key={item.path}>
                      {item.label}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
              
              <Dropdown as={Nav.Item}>
                <Dropdown.Toggle as={Nav.Link}>Companies</Dropdown.Toggle>
                <Dropdown.Menu>
                  {dropdownData.companies.map((item) => (
                    <Dropdown.Item as={Link} to={item.path} key={item.path}>
                      {item.label}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
              
              <Dropdown as={Nav.Item}>
                <Dropdown.Toggle as={Nav.Link}>Jobs</Dropdown.Toggle>
                <Dropdown.Menu>
                  {dropdownData.jobs.map((item) => (
                    <Dropdown.Item as={Link} to={item.path} key={item.path}>
                      {item.label}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
            
            <Nav>
              <span className="navbar-text me-3 d-none d-md-block">
                Apply For Funding
              </span>
              <button
                className="btn btn-warning text-white fw-bold"
                onClick={() => setShowModal(true)}
              >
                Apply
              </button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div style={{ height: "50px" }}></div>
      <ApplyModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};

export default CustomNavbar;