import React from 'react';
import { Container } from 'react-bootstrap';
import SuperLogo from "../assets/chatSuperlogo.png";
import code from '../assets/logocodevidhya.png';
import Biologo from "../assets/Bioheaven/Bioheaven360logo.png";
import logo1 from '../assets/thagamcapital.png';
import irasus from '../assets/IRasus/iRasuslogo.png';

const companies = [
  { name: 'irasus', logo: irasus },
  { name: 'superchat', logo: SuperLogo },
  { name: 'bioheaven', logo: Biologo },
  { name: 'codevidhya', logo: code },
  { name: 'thangam', logo: logo1 }
];

const TopCompanies = () => {
  return (
    <div className="bg-light py-5">
      <Container className="text-center">
        <h2 className="fw-bold fs-1 mb-5 pt-4">
          <span className="text-dark px-3 py-2 rounded">
            Funded Companies
          </span>
        </h2>

        {/* Scrolling container - same structure as before */}
        <div className="overflow-hidden w-100 position-relative">
          <div 
            className="d-inline-flex gap-5 px-4"
            style={{
              animation: 'scroll 20s linear infinite'
            }}
          >
            {/* Double the companies for seamless loop */}
            {[...companies, ...companies].map((company, index) => (
              <div 
                key={`${company.name}-${index}`} 
                className="bg-white rounded-3 p-4 d-flex justify-content-center align-items-center"
                style={{
                  height: '60px',
                  minWidth: '180px',
                  flexShrink: 0,
                  boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
                }}
              >
                <img 
                  src={company.logo} 
                  alt={company.name} 
                  className="img-fluid"
                  style={{
                    maxWidth: '160px',
                    maxHeight: '40px',
                    objectFit: 'contain'
                  }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* CSS animation - same as before */}
        <style>
          {`
            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .bg-light {
              background-color: #f2f1e9 !important;
            }
          `}
        </style>
      </Container>
    </div>
  );
};

export default TopCompanies;