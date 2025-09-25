import React from 'react';

export default function HowWeFund() {
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
          fontWeight: '600',
          color: '#2d3748',
          // marginBottom: '30px',
          lineHeight: '1.2',
          marginTop:'-90px'
        }}>
          How We Fund
        </h1>
        <p style={{
          fontSize: '1.3rem',
          color: '#718096',
          maxWidth: '800px',
          margin: '0 auto',
          lineHeight: '1.6'
        }}>
          We partner with exceptional founders at every stage of their journey, providing not just 
          capital but strategic guidance and industry connections.
        </p>
      </div>

      {/* Investment Stages Section */}
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
          Investment Stages
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '40px',
          marginBottom: '80px'
        }}>
          {/* Pre-Seed */}
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
              marginBottom: '15px',
              textAlign: 'center'
            }}>
              Pre-Seed
            </h3>
            <div style={{
              fontSize: '2rem',
              fontWeight: '700',
              color: '#dc2626',
              textAlign: 'center',
              marginBottom: '25px'
            }}>
              ₹40L - ₹2Cr
            </div>
            <p style={{
              color: '#718096',
              fontSize: '1.1rem',
              lineHeight: '1.6',
              marginBottom: '25px',
              textAlign: 'center'
            }}>
              For early-stage startups with a validated idea and initial traction
            </p>
            <div>
              <h4 style={{
                fontSize: '1.1rem',
                fontWeight: '600',
                color: '#2d3748',
                marginBottom: '15px'
              }}>
                Focus Areas:
              </h4>
              <ul style={{
                listStyle: 'none',
                padding: '0',
                margin: '0'
              }}>
                {['Product development', 'Market validation', 'Team building'].map((item, index) => (
                  <li key={index} style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '8px',
                    color: '#718096'
                  }}>
                    <span style={{
                      width: '8px',
                      height: '8px',
                      backgroundColor: '#10b981',
                      borderRadius: '50%',
                      marginRight: '12px',
                      flexShrink: '0'
                    }}></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Seed */}
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
              marginBottom: '15px',
              textAlign: 'center'
            }}>
              Seed
            </h3>
            <div style={{
              fontSize: '2rem',
              fontWeight: '700',
              color: '#dc2626',
              textAlign: 'center',
              marginBottom: '25px'
            }}>
              ₹2Cr - ₹8Cr
            </div>
            <p style={{
              color: '#718096',
              fontSize: '1.1rem',
              lineHeight: '1.6',
              marginBottom: '25px',
              textAlign: 'center'
            }}>
              For startups ready to scale their product and acquire customers
            </p>
            <div>
              <h4 style={{
                fontSize: '1.1rem',
                fontWeight: '600',
                color: '#2d3748',
                marginBottom: '15px'
              }}>
                Focus Areas:
              </h4>
              <ul style={{
                listStyle: 'none',
                padding: '0',
                margin: '0'
              }}>
                {['Go-to-market strategy', 'Customer acquisition', 'Revenue growth'].map((item, index) => (
                  <li key={index} style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '8px',
                    color: '#718096'
                  }}>
                    <span style={{
                      width: '8px',
                      height: '8px',
                      backgroundColor: '#10b981',
                      borderRadius: '50%',
                      marginRight: '12px',
                      flexShrink: '0'
                    }}></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Series A */}
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
              marginBottom: '15px',
              textAlign: 'center'
            }}>
              {/* Series A */}
            </h3>
            <div style={{
              fontSize: '2rem',
              fontWeight: '700',
              color: '#dc2626',
              textAlign: 'center',
              marginBottom: '25px'
            }}>
              ₹8Cr - ₹40Cr
            </div>
            <p style={{
              color: '#718096',
              fontSize: '1.1rem',
              lineHeight: '1.6',
              marginBottom: '25px',
              textAlign: 'center'
            }}>
              For proven startups looking to accelerate growth and expansion
            </p>
            <div>
              <h4 style={{
                fontSize: '1.1rem',
                fontWeight: '600',
                color: '#2d3748',
                marginBottom: '15px'
              }}>
                Focus Areas:
              </h4>
              <ul style={{
                listStyle: 'none',
                padding: '0',
                margin: '0'
              }}>
                {['Market expansion', 'Team scaling', 'Product optimization'].map((item, index) => (
                  <li key={index} style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '8px',
                    color: '#718096'
                  }}>
                    <span style={{
                      width: '8px',
                      height: '8px',
                      backgroundColor: '#10b981',
                      borderRadius: '50%',
                      marginRight: '12px',
                      flexShrink: '0'
                    }}></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Our Investment Process */}
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
            Our Investment Process
          </h2>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '30px',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            {[
              {
                step: '01',
                title: 'Application',
                description: 'Submit your pitch deck and business plan through our online portal'
              },
              {
                step: '02', 
                title: 'Initial Review',
                description: 'Our team conducts preliminary assessment within 2 weeks'
              },
              {
                step: '03',
                title: 'Due Diligence', 
                description: 'Comprehensive evaluation of your business model and market opportunity'
              },
              {
                step: '04',
                title: 'Term Sheet',
                description: 'Negotiation and agreement on investment terms and conditions'
              },
              {
                step: '05',
                title: 'Funding',
                description: 'Capital deployment and ongoing partnership begins'
              }
            ].map((item, index) => (
              <div key={index} style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '25px'
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: '#2563eb',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: '700',
                  fontSize: '1.2rem',
                  flexShrink: '0'
                }}>
                  {item.step}
                </div>
                <div style={{ flex: '1' }}>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: '600',
                    color: '#2d3748',
                    marginBottom: '8px'
                  }}>
                    {item.title}
                  </h3>
                  <p style={{
                    color: '#718096',
                    fontSize: '1.1rem',
                    lineHeight: '1.6',
                    margin: '0'
                  }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What We Look For */}
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
            What We Look For
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            {/* Team Excellence */}
            <div>
              <h3 style={{
                fontSize: '1.8rem',
                fontWeight: '600',
                marginBottom: '25px',
                color: 'white'
              }}>
                Team Excellence
              </h3>
              <ul style={{
                listStyle: 'none',
                padding: '0',
                margin: '0'
              }}>
                {[
                  'Proven track record and expertise',
                  'Strong leadership and vision', 
                  'Adaptability and resilience',
                  'Complementary skill sets'
                ].map((item, index) => (
                  <li key={index} style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '12px',
                    fontSize: '1.1rem'
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

            {/* Market Opportunity */}
            <div>
              <h3 style={{
                fontSize: '1.8rem',
                fontWeight: '600',
                marginBottom: '25px',
                color: 'white'
              }}>
                Market Opportunity
              </h3>
              <ul style={{
                listStyle: 'none',
                padding: '0',
                margin: '0'
              }}>
                {[
                  'Large addressable market',
                  'Clear value proposition',
                  'Scalable business model',
                  'Competitive differentiation'
                ].map((item, index) => (
                  <li key={index} style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '12px',
                    fontSize: '1.1rem'
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
      </div>
    </div>
  );
}