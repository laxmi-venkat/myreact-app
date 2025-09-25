import React from 'react';

export default function RequirementsForFunding() {
  return (
    <div style={{ 
      backgroundColor: '#f8f9fa', 
      minHeight: '100vh',
      paddingTop: '80px', // Account for navbar
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      {/* Header Section */}
      <div style={{
        textAlign: 'center',
        padding: '60px 20px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h1 style={{
          fontSize: '3.5rem',
          fontWeight: '700',
          color: '#2d3748',
          marginBottom: '30px',
          lineHeight: '1.2'
        }}>
          Requirements For Funding
        </h1>
        <p style={{
          fontSize: '1.3rem',
          color: '#718096',
          maxWidth: '800px',
          margin: '0 auto',
          lineHeight: '1.6'
        }}>
          We have specific criteria and requirements that startups must meet to be eligible 
          for our funding programs. Here's what we look for in potential investments.
        </p>
      </div>

      {/* Basic Requirements Section */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px'
      }}>
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: '600',
          color: '#2d3748',
          textAlign: 'center',
          marginBottom: '60px'
        }}>
          Basic Requirements
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '40px',
          marginBottom: '80px'
        }}>
          {/* Legal & Compliance */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '40px 30px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            border: '1px solid #e2e8f0',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 10px 25px -3px rgba(0, 0, 0, 0.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
          }}>
            <h3 style={{
              fontSize: '1.8rem',
              fontWeight: '600',
              color: '#2563eb',
              marginBottom: '20px',
              textAlign: 'center'
            }}>
              Legal & Compliance
            </h3>
            <ul style={{
              listStyle: 'none',
              padding: '0',
              margin: '0'
            }}>
              {[
                'Registered Indian Private Limited Company',
                'Valid GST Registration',
                'PAN & TAN Registration',
                'Clean legal and financial records',
                'Proper corporate governance structure',
                'IP rights documentation (if applicable)'
              ].map((item, index) => (
                <li key={index} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  marginBottom: '12px',
                  color: '#718096',
                  fontSize: '1rem',
                  lineHeight: '1.5'
                }}>
                  <span style={{
                    width: '8px',
                    height: '8px',
                    backgroundColor: '#10b981',
                    borderRadius: '50%',
                    marginRight: '12px',
                    flexShrink: '0',
                    marginTop: '8px'
                  }}></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Business Requirements */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '40px 30px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            border: '1px solid #e2e8f0',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 10px 25px -3px rgba(0, 0, 0, 0.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
          }}>
            <h3 style={{
              fontSize: '1.8rem',
              fontWeight: '600',
              color: '#2563eb',
              marginBottom: '20px',
              textAlign: 'center'
            }}>
              Business Requirements
            </h3>
            <ul style={{
              listStyle: 'none',
              padding: '0',
              margin: '0'
            }}>
              {[
                'Minimum 6 months of operations',
                'Clear business model and revenue streams',
                'Market validation or early traction',
                'Scalable technology or service',
                'Addressable market size of ₹100Cr+',
                'Competitive advantage or differentiation'
              ].map((item, index) => (
                <li key={index} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  marginBottom: '12px',
                  color: '#718096',
                  fontSize: '1rem',
                  lineHeight: '1.5'
                }}>
                  <span style={{
                    width: '8px',
                    height: '8px',
                    backgroundColor: '#10b981',
                    borderRadius: '50%',
                    marginRight: '12px',
                    flexShrink: '0',
                    marginTop: '8px'
                  }}></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Team Requirements */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '40px 30px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            border: '1px solid #e2e8f0',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 10px 25px -3px rgba(0, 0, 0, 0.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
          }}>
            <h3 style={{
              fontSize: '1.8rem',
              fontWeight: '600',
              color: '#2563eb',
              marginBottom: '20px',
              textAlign: 'center'
            }}>
              Team Requirements
            </h3>
            <ul style={{
              listStyle: 'none',
              padding: '0',
              margin: '0'
            }}>
              {[
                'Full-time committed founding team',
                'Relevant industry experience',
                'Technical expertise in core areas',
                'Proven track record of execution',
                'Clear roles and responsibilities',
                'Long-term vision and commitment'
              ].map((item, index) => (
                <li key={index} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  marginBottom: '12px',
                  color: '#718096',
                  fontSize: '1rem',
                  lineHeight: '1.5'
                }}>
                  <span style={{
                    width: '8px',
                    height: '8px',
                    backgroundColor: '#10b981',
                    borderRadius: '50%',
                    marginRight: '12px',
                    flexShrink: '0',
                    marginTop: '8px'
                  }}></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Required Documents */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          padding: '60px 40px',
          marginBottom: '60px',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '600',
            color: '#2d3748',
            textAlign: 'center',
            marginBottom: '50px'
          }}>
            Required Documents
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            {[
              {
                category: 'Business Documents',
                items: [
                  'Comprehensive Business Plan',
                  'Pitch Deck (10-15 slides)',
                  'Financial Projections (3-5 years)',
                  'Market Research & Analysis',
                  'Product/Service Documentation'
                ]
              },
              {
                category: 'Legal Documents',
                items: [
                  'Certificate of Incorporation',
                  'Memorandum & Articles of Association',
                  'Board Resolutions',
                  'Shareholding Pattern',
                  'IP Registration Certificates'
                ]
              },
              {
                category: 'Financial Documents',
                items: [
                  'Audited Financial Statements',
                  'GST Returns',
                  'Bank Statements (Last 12 months)',
                  'Tax Returns',
                  'Management Accounts'
                ]
              }
            ].map((section, index) => (
              <div key={index}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: '#2563eb',
                  marginBottom: '20px'
                }}>
                  {section.category}
                </h3>
                <ul style={{
                  listStyle: 'none',
                  padding: '0',
                  margin: '0'
                }}>
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      marginBottom: '10px',
                      color: '#718096',
                      fontSize: '1rem'
                    }}>
                      <span style={{
                        width: '6px',
                        height: '6px',
                        backgroundColor: '#fbbf24',
                        borderRadius: '50%',
                        marginRight: '12px',
                        flexShrink: '0',
                        marginTop: '8px'
                      }}></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Funding Criteria by Stage */}
        <div style={{
          backgroundColor: '#2563eb',
          borderRadius: '12px',
          padding: '60px 40px',
          marginBottom: '60px',
          color: 'white'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '600',
            textAlign: 'center',
            marginBottom: '50px',
            color: 'white'
          }}>
            Funding Criteria by Stage
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            {/* Pre-Seed Criteria */}
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '8px',
              padding: '30px 25px',
              backdropFilter: 'blur(10px)'
            }}>
              <h3 style={{
                fontSize: '1.8rem',
                fontWeight: '600',
                marginBottom: '20px',
                color: 'white',
                textAlign: 'center'
              }}>
                Pre-Seed (₹40L - ₹2Cr)
              </h3>
              <ul style={{
                listStyle: 'none',
                padding: '0',
                margin: '0'
              }}>
                {[
                  'MVP developed and tested',
                  'Initial user feedback',
                  'Clear problem-solution fit',
                  'Founding team in place',
                  'Basic market validation'
                ].map((item, index) => (
                  <li key={index} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    marginBottom: '10px',
                    fontSize: '1rem'
                  }}>
                    <span style={{
                      marginRight: '12px',
                      fontSize: '1.2rem'
                    }}>•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Seed Criteria */}
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '8px',
              padding: '30px 25px',
              backdropFilter: 'blur(10px)'
            }}>
              <h3 style={{
                fontSize: '1.8rem',
                fontWeight: '600',
                marginBottom: '20px',
                color: 'white',
                textAlign: 'center'
              }}>
                Seed (₹2Cr - ₹8Cr)
              </h3>
              <ul style={{
                listStyle: 'none',
                padding: '0',
                margin: '0'
              }}>
                {[
                  'Product-market fit achieved',
                  'Growing user base',
                  'Revenue generation started',
                  'Proven business model',
                  'Scalable operations'
                ].map((item, index) => (
                  <li key={index} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    marginBottom: '10px',
                    fontSize: '1rem'
                  }}>
                    <span style={{
                      marginRight: '12px',
                      fontSize: '1.2rem'
                    }}>•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Series A Criteria */}
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '8px',
              padding: '30px 25px',
              backdropFilter: 'blur(10px)'
            }}>
              <h3 style={{
                fontSize: '1.8rem',
                fontWeight: '600',
                marginBottom: '20px',
                color: 'white',
                textAlign: 'center'
              }}>
                Series A (₹8Cr - ₹40Cr)
              </h3>
              <ul style={{
                listStyle: 'none',
                padding: '0',
                margin: '0'
              }}>
                {[
                  'Strong revenue growth',
                  'Market leadership position',
                  'Operational efficiency',
                  'Expansion ready',
                  'Clear path to profitability'
                ].map((item, index) => (
                  <li key={index} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    marginBottom: '10px',
                    fontSize: '1rem'
                  }}>
                    <span style={{
                      marginRight: '12px',
                      fontSize: '1.2rem'
                    }}>•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Application Process */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          padding: '60px 40px',
          marginBottom: '60px',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '600',
            color: '#2d3748',
            marginBottom: '30px'
          }}>
            Ready to Apply?
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: '#718096',
            marginBottom: '40px',
            maxWidth: '600px',
            margin: '0 auto 40px'
          }}>
            Ensure you meet all the requirements above before submitting your application. 
            Our team will review your submission within 2 weeks.
          </p>
          <button style={{
            backgroundColor: '#2563eb',
            color: 'white',
            border: 'none',
            padding: '15px 30px',
            fontSize: '1.1rem',
            fontWeight: '600',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#1d4ed8';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = '#2563eb';
          }}>
            Start Your Application
          </button>
        </div>
      </div>
    </div>
  );
}