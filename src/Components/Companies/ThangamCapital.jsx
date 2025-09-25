import React, { useState } from "react";
import ThagamCapitalImg from "../../assets/thagamcapital.png";
import backgroundimage from "../../assets/thagamcaptial/bg.png";
import thagamwomen from '../../assets/thagamcaptial/ThagamWomen.png';
import video from '../../assets/thagamcaptial/videoframe_2415.png'
import { PiNumberSquareOneThin, PiNumberSquareTwoLight, PiNumberSquareThreeThin } from "react-icons/pi";
import customerloan from '../../assets/thagamcaptial/customerdurableloan.png';
import dairy from '../../assets/thagamcaptial/dairyloan.png';
import greenloan from '../../assets/thagamcaptial/greenloan.png';
import shakthiEntrepreshiploan from '../../assets/thagamcaptial/shakthiEntrepreshiploan.png';
import  personalloan from '../../assets/thagamcaptial/personalloan.png';
import workingcapital from '../../assets/thagamcaptial/workingcapitalloan.png';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { lightBlue } from "@mui/material/colors";
import chinnappan from "../../assets/thagamcaptial/chinnappan.png";
import sandeep from "../../assets/thagamcaptial/sandeep.png";
 import santhosh from "../../assets/thagamcaptial/santhosh.png";
import thagasekhar from "../../assets/thagamcaptial/thagasekhar.png";
import FAQSection from "./Thagam/FAQSection";
const directors = [
  {
    img: chinnappan,
    name: "Dr. S. Chinnappan",
    role: "Director",
  },
  {
    img: thagasekhar,
    name: "Thanga. Sekar",
    role: "Chairman",
  },
  {
    img: santhosh,
    name: "S. Thangam Santhosh",
    role: "Managing Director",
  },
  {
    img: sandeep,
    name: "C.R.M Sandeep",
    role: "Executive Director",
  },
];


export default function ThangamCapital() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const innovations = [
    {
      icon: <PiNumberSquareOneThin size={32} />,
      header: 'Product Innovation',
      content: 'Thangam offers financial products and services to the needy people in the rural and semi urban part of the country, and product is designed to suit the local market needs and loan repayment capacity of the client. The product ticket size ranges from INR 50000 to INR 500000 with differential interest rate based on the ticket size, tenor and risk associated with the business activity and client profile.'
    },
    {
      icon: <PiNumberSquareTwoLight size={32} />,
      header: 'Process Innovation',
      content: 'Leveraging digital tools for streamlined application and approval. Focus on reducing turnaround time and enhancing operational efficiency.'
    },
    {
      icon: <PiNumberSquareThreeThin size={32} />,
      header: 'Product Promotion & Positioning',
      content: 'Building trust through community engagement and local ambassadors. Positioning Thangam as an empathetic and reliable partner for growth.'
    }
  ];


  return (
    <div style={{ fontFamily: "'Segoe UI', Roboto, Arial, sans-serif" }}>
      {/* Header remains the same */}
      <header
        style={{
          background: "rgba(12, 35, 70, 0.95)",
          padding: "14px 24px",
          display: "flex",
          alignItems: "center",
          boxShadow: "0 2px 4px rgba(0,0,0,0.15)",
        }}
      >
        <img
          src={ThagamCapitalImg}
          alt="Thagam Capital"
          style={{ height: 48, objectFit: "contain" }}
        />
      </header>

      {/* Hero Section */}
      <section
        style={{
          position: "relative",
          width: "100%",
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          backgroundImage: `url(${backgroundimage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.45)",
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: 900,
            padding: "36px 24px",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: "2.6rem",
              marginBottom: 20,
              fontWeight: 700,
            }}
          >
            We think beyond profit
          </h1>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              margin: "0 auto 28px",
              maxWidth: 700,
              opacity: 0.95,
            }}
          >
            In designing loan solutions to meet the needs of rural enterprises,
            we take a flexible approach. We mentor rural entrepreneurs and
            support women entrepreneurs in running scalable and sustainable
            businesses.
          </p>
          <button
            style={{
              padding: "10px 28px",
              borderRadius: 28,
              border: "1px solid rgba(255,255,255,0.35)",
              background: "transparent",
              color: "#fff",
              cursor: "pointer",
              fontWeight: 600,
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "rgba(255,255,255,0.1)";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "transparent";
            }}
          >
            Read More
          </button>
        </div>
      </section>

      {/* Innovation Section */}
      <section style={{ padding: "60px 20px", backgroundColor: "#f8fafc" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 style={{ 
            textAlign: "center", 
            fontSize: "2.2rem", 
            fontWeight: 700, 
            marginBottom: "50px",
            color: "#0c2346"
          }}>
            Our Innovations
          </h2>
          
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
            gap: "30px" 
          }}>
            {innovations.map((item, index) => (
              <div 
                key={index} 
                style={{ 
                  background: "#fff",
                  borderRadius: "12px",
                  padding: "25px",
                  boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 5px 15px rgba(0,0,0,0.08)";
                }}
                onClick={() => toggleDropdown(index)}
              >
                <div style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  marginBottom: "15px",
                  color: "#0c2346"
                }}>
                  {item.icon}
                  <h3 style={{ 
                    marginLeft: "12px", 
                    fontSize: "1.4rem", 
                    fontWeight: 600 
                  }}>
                    {item.header}
                  </h3>
                </div>
                <div style={{ 
                  color: "#555", 
                  lineHeight: 1.6,
                  borderLeft: "3px solid #9bc34a",
                  paddingLeft: "15px"
                }}>
                  {item.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The rest of your sections remain mostly the same */}
      {/* Vision/Mission Section */}
      <section
        style={{
          backgroundColor: "#f4f7fa",
          padding: "60px 20px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "2rem",
            fontWeight: 700,
            marginBottom: "40px",
            color: "#222",
          }}
        >
          Our Guiding Principles
        </h2>

        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
            gap: "24px",
          }}
        >
          {[
            {
              title: "Vision",
              text:
                "To empower rural entrepreneurs and women leaders through sustainable and inclusive financial services.",
            },
            {
              title: "Mission",
              text:
                "Deliver flexible capital and mentorship to enable scalable, socially responsible businesses.",
            },
            {
              title: "Objectives",
              text:
                "Provide accessible funding, foster innovation, and promote economic self-reliance in underserved communities.",
            },
            {
              title: "Core Values",
              text:
                "Integrity, transparency, collaboration, and a deep commitment to community development.",
            },
          ].map((card) => (
            <div
              key={card.title}
              style={{
                background: "#fff",
                borderRadius: "10px",
                padding: "24px",
                textAlign: "center",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <h3
                style={{
                  fontSize: "1.4rem",
                  fontWeight: 600,
                  marginBottom: 12,
                  color: "#0c2346",
                }}
              >
                {card.title}
              </h3>
              <p style={{ color: "#555", lineHeight: 1.6 }}>{card.text}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* About Us Section */}
      <section
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "stretch",
        }}
      >
        <div style={{ flex: "1 1 50%", minWidth: "300px" }}>
          <img
            src={thagamwomen}
            alt="Thagam Women"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>

        <div
          style={{
            flex: "1 1 50%",
            minWidth: "300px",
            backgroundColor: "#0c2346",
            color: "white",
            padding: "40px 30px",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h1 style={{ fontSize: "2rem", marginBottom: "20px" }}>ABOUT US</h1>
          <p style={{ lineHeight: 1.6, fontSize: "1.1rem" }}>
            Thangam Capital was established with the goal of empowering rural
            women and first-generation entrepreneurs with access to financial
            services to help them start and grow their enterprises. Our business
            model addresses the bottom-of-the-pyramid segment's working capital
            and seed capital needs, as well as need-based products for sustainable
            economic development. Rather than being a market leader in the
            segment, our focus is on developing the finest business model. As a
            result, our strategy for growth is organic.
          </p>
        </div>
      </section>
      
      {/* Services Section */}
      <section style={{ padding: "60px 20px" }}>
        <h1 style={{
          color: '#0c2346',
          fontSize: '2.2rem',
          marginBottom: '20px',
          textAlign: 'center',
          fontWeight: 700
        }}>SERVICES</h1> 
        <p style={{ 
          lineHeight: 1.8, 
          fontSize: "1.1rem", 
          margin: '0 auto',
          maxWidth: '1000px',
          textAlign: 'center',
          padding: '0 20px 40px'
        }}>
          Financial and non-financial services are provided by Thangam. It provides entrepreneurs in rural and semi-urban areas with timely financial assistance for their capital and seed capital needs as well as need-based products for their long-term economic development. Thangam firmly believes that offering non-financial services, such as skill training in a variety of businesses and generating awareness among the rural and semi-urban people on women empowerment, self-employment, health and hygiene, and quality education will raise the amount of loans and credits given. As a result, it sustainably enhances the impact on financial services.
        </p>
        
        <div
          style={{
            maxWidth: 1000,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: "30px",
          }}
        >
          {[
            {
              title: "Financial Services",
              text:
                "Thangam operates under the principle of providing timely and adequate money at the needed hour to bridge the financial gap for rural entrepreneurs. Our financial products are tailored to meet specific needs with flexible repayment options.",
            },
            {
              title: "Non-Financial Services",
              text:
                "Thangam's services extend beyond financing. As a responsible and financially inclusive lender, we promote skill development, business mentoring, and community awareness programs to ensure sustainable growth.",
            },
          ].map((card) => (
            <div
              key={card.title}
              style={{
                background: "#fff",
                borderRadius: "12px",
                padding: "30px",
                boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
                transition: "transform 0.3s ease",
                height: "100%",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 600,
                  marginBottom: 15,
                  color: "#0c2346",
                }}
              >
                {card.title}
              </h3>
              <p style={{ color: "#555", lineHeight: 1.7 }}>{card.text}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* Business Model Section */}
      <section style={{ display: "flex", flexWrap: "wrap" }}> 
        <div style={{ flex: "1 1 50%", minWidth: "300px" }}>
          <img 
            src={video}
            alt="Business Model"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <div
          style={{
            flex: "1 1 50%",
            minWidth: "300px",
            backgroundColor: "#e1f5fe",
            color: "#333",
            padding: "40px 30px",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h1 style={{ fontSize: "2rem", marginBottom: "20px", color: "#0c2346" }}>Business Model</h1>
          <p style={{ lineHeight: 1.6, fontSize: "1.1rem", marginBottom: "20px" }}>
            Thangam Capital was established with the goal of empowering rural
            women and first-generation entrepreneurs with access to financial
            services to help them start and grow their enterprises. Our business
            model addresses the bottom-of-the-pyramid segment's working capital
            and seed capital needs, as well as need-based products for sustainable
            economic development. Rather than being a market leader in the
            segment, our focus is on developing the finest business model. As a
            result, our strategy for growth is organic.
          </p>
          <h6 style={{ color: '#0c2346', fontSize: '1.1rem', marginBottom: '15px' }}>
            There are three major innovations in our business:
          </h6>
          <ul style={{ paddingLeft: '20px', lineHeight: 1.8 }}>
            <li>Product Innovation</li>
            <li>Process Innovation</li>
            <li>Innovation in product positioning and promotion</li>
          </ul>
        </div>
      </section>
<section
  style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '40px', // space between images
    padding: '0 15rem',
  }}
>
  {/* Heading spans both columns */}
  <h1 style={{ gridColumn: '1 / -1', textAlign: 'center', marginBottom: '30px', color: '#0c2346' }}>
    PRODUCTS
  </h1>

  {/* Products array with name and image */}
  {[
    { src: customerloan, name: 'Customer Loan' },
    { src: dairy, name: 'Dairy Loan' },
    { src: greenloan, name: 'Green Loan' },
    { src: shakthiEntrepreshiploan, name: 'Shakthi Entrepriship Loan' },
    { src: personalloan, name: 'Personal Loan' },
    { src: workingcapital, name: 'Working Capital' },
  ].map((item, index) => (
    <div
      key={index}
      style={{
        textAlign: 'center',
        cursor: 'pointer',
        transition: 'transform 0.3s, box-shadow 0.3s',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.05)';
        e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.2)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <img
        src={item.src}
        alt={item.name}
        style={{
          width: '100%',
          height: '300px',
          objectFit: 'cover',
          borderRadius: '10px',
          display: 'block',
        }}
      />
      <p style={{ marginTop: '12px', fontWeight: 600, color: '#0c2346', fontSize: '1.1rem' }}>
        {item.name}
      </p>
    </div>
  ))}
</section>

    <section style={{ background: "#F4F8FB", padding: "60px 0" }}>
      <h1
        style={{
          textAlign: "center",
          marginBottom: "42px",
          color: "#124074",
          fontSize: "2rem",
          fontWeight: 700,
        }}
      >
        Board of Directors
      </h1>

      <Grid
        container
        spacing={4}
        justifyContent="center"
        style={{ maxWidth: 1250, margin: "0 auto" }}
      >
        {directors.map((dir, idx) => (
          <Grid item xs={12} sm={6} md={6} lg={6} key={idx}>
            <Card
              elevation={3}
              sx={{
                display: "flex",
                alignItems: "center",
                padding: 3,
                borderRadius: 4,
                background: "#fff",
                minHeight: "225px",
              }}
            >
              <CardMedia
                component="img"
                image={dir.img}
                alt={dir.name}
                sx={{
                  width: 140,
                  height: 140,
                  borderRadius: "50%",
                  objectFit: "cover",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
                  marginRight: "32px",
                  marginLeft: "12px",
                  background: "#eaf4fb",
                }}
              />

              <CardContent sx={{ flex: 1 }}>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ color: "#035BAA", fontWeight: 700, fontSize: "1.28rem" }}
                >
                  {dir.name}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: "#626e7d",
                    marginTop: "8px",
                    fontWeight: 500,
                    fontSize: "1.05rem",
                  }}
                >
                  {dir.role}
                </Typography>
                <div
                  style={{
                    width: "48px",
                    height: "2px",
                    background: "#d4e1f7",
                    margin: "16px 0 0 0",
                  }}
                ></div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <FAQSection/>
    </section>
    </div>
  )};

