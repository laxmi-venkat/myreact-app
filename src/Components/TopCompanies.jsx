import React from 'react';
import SuperLogo from "../assets/chatSuperlogo.png";
import code from '../assets/logocodevidhya.png'
import Biologo from "../assets/Bioheaven/Bioheaven360logo.png";

const companies = [
 {name:'stripe',logo:'https://irasus.com/wp-content/uploads/2024/12/cropped-iRasus-Logo.png'},
 {name:'superchat',logo: SuperLogo},
 {name:'bioheaven',logo: Biologo},
 {name:'code',logo: code},
 {name:'Thagam',logo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5ezwRJq3SE6Faqcroj3xikgZCDP1tCMOZEQ&s'}
];


const TopCompanies = () => {
  // Function to get specific image styles for logos that need to be larger
  const getImageStyle = (companyName) => {
    const baseStyle = { 
      maxWidth: '160px', 
      maxHeight: '40px',
      objectFit: 'contain' 
    };
    
    switch(companyName) {
      case 'superchat':
        return { 
          ...baseStyle, 
          maxHeight: '40px',
          maxWidth: '160px'
        };
      case 'bioheaven':
        return { 
          ...baseStyle, 
          maxHeight: '40px',
          maxWidth: '160px'
        };
      default:
        return baseStyle;
    }
  };

  return(
    <div style={{ backgroundColor: '#f2f1e9', padding: '0px 20px 40px', textAlign: 'center' }}>
      <h2 style={{ fontWeight: 'normal', fontSize: '1.8rem', marginBottom:'3rem', marginTop:'rem', top: '-30px',paddingTop:'2rem' }}>
        <span style={{ color: 'black', padding: '15px 10px', borderRadius: '4px', fontFamily:'bold'}}>
          Funded Companies
        </span>
      </h2>
      <div
         style={{
           marginTop: '20px',
           display: 'flex',
           flexDirection: 'row',
           justifyContent: 'center',
           alignItems: 'center',
           gap: '20px',
           marginLeft:'auto',
           marginRight:'auto',
           maxWidth: '1200px',
           paddingBottom:'2rem',
           overflowX: 'auto'
         }}
       >
        {companies.map((company) => (
          <div
            key={company.name}
            style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              padding: '15px 10px',
              boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '60px',
              width: '180px',
              minWidth: '180px',
              cursor: company.logo ? 'pointer' : 'default'
            }}
          >
            {company.name !== '+' ? (
              <img 
                src={company.logo} 
                alt={company.name} 
                style={getImageStyle(company.name)}
              />
            ) : (
              <span style={{ fontSize: '24px', fontWeight: 'bold'}}>+</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCompanies;