import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';

<<<<<<< Updated upstream
import carusole2 from '../../assets/IRasus/carusole2.png';
import carusole from '../../assets/IRasus/carusole.png';
import iRasus from '../../assets/IRasus/iRasuslogo.png';
import Banner from '../../assets/IRasus/Banner3.png';
// import Apiintegration from '../../assets/IRasus/Apiintegration.png';
import Faultanddetection from '../../assets/IRasus/Faultanddetection.png'
import geolocation from '../../assets/IRasus/geolocation.png'
=======
import carusole2 from '/src/assets/IRasus/carusole2.png';
import carusole from '/src/assets/IRasus/carusole.png';
import iRasus from '/src/assets/IRasus/iRasuslogo.png';
import Banner from '/src/assets/IRasus/Banner3.png';
import Apiintegration from '/src/assets/IRasus/Apiintegration.png';
import Faultanddetection from '/src/assets/IRasus/Faultanddetection.png'
import geolocation from '/src/assets/IRasus/geolocation.png'

>>>>>>> Stashed changes
// Slide data for carousel
const slides = [
  {
    img: carusole2,
    title: "Pioneering the Transition to Clean Energy through Batteries",
    subtitle: "AI-Driven Battery Analytics to make Clean Energy Safe Reliable and Affordable",
    description: "",
  },
  {
    img: carusole,
    title: "Improve Efficiency, Reduce Downtime, & Enhance Service Quality",
    subtitle: "Empowered Stakeholders Across the Battery Value Chain",
    description: "We are a Deep Tech organization synonymous with crafting sustainable solutions using AI for predictive battery maintenance",
  }
];

// Typewriter effect for each text line
function useTypewriterFull(text, speed, startTrigger) {
  const [displayed, setDisplayed] = useState('');
  useEffect(() => {
    setDisplayed('');
    if (!text || !startTrigger) return;
    let i = 0;
    const timer = setInterval(() => {
      setDisplayed((prev) => prev + text[i]);
      i++;
      if (i >= text.length) clearInterval(timer);
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed, startTrigger]);
  return displayed;
}

export default function IRasus() {
  // --- carousel ---
  const [current, setCurrent] = useState(0);
  const [begin, setBegin] = useState(true);
  const [step, setStep] = useState(0);

  useEffect(() => {
    setBegin(false);
    setStep(0);
    const t = setTimeout(() => setBegin(true), 200);
    // Slide changes every 5 seconds
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 5000);
    return () => {
      clearTimeout(t);
      clearInterval(interval);
    };
  }, [current]);
  const slide = slides[current];
  const typedTitle = useTypewriterFull(slide.title, 35, begin && step === 0);
  const typedSubtitle = useTypewriterFull(slide.subtitle, 30, step === 1);
  const typedDesc = useTypewriterFull(slide.description, 25, step === 2);

  // Animate lines sequentially
  useEffect(() => {
    if (begin && typedTitle === slide.title && step === 0) setStep(1);
    if (typedSubtitle === slide.subtitle && step === 1) setStep(2);
  }, [typedTitle, typedSubtitle, begin, step, slide.title, slide.subtitle]);

  return (
    <div style={{ width: '100vw', overflow: 'hidden', background: '#f7f9fb' }}>
      {/* --- Logo at Top --- */}
      <div style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        padding: '30px 0 20px 44px',
        alignItems: 'center'
      }}>
        <img src={iRasus} alt="iRasus logo" style={{ height: 64, marginRight: 20 }} />
      </div>
      {/* --- Carousel Section --- */}
      <Carousel fade interval={2000} style={{ width: '100vw', height: '500px' }}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carusole2}
          alt="First slide"
          style={{ height: '500px', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h3>Pioneering the Transition to Clean Energy through Batteries</h3>
          <p>AI-Driven Battery Analytics to make Clean Energy Safe Reliable and Affordable</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carusole}
          alt="Second slide"
          style={{ height: '500px', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h3>Improve Efficiency, Reduce Downtime, & Enhance Service Quality</h3>
          <p>Empowered Stakeholders Across the Battery Value Chain</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      {/* --- Banner Left, Content Right (Desktop style) --- */}
      <div style={{
        display: 'flex', flexDirection: 'row', alignItems: 'center',
        maxWidth: '1300px', margin: "40px auto 54px auto", padding: "0 16px",
        gap: '48px'
      }}>
        {/* Banner/image left */}
        <div style={{
          flex: '1 1 460px',
          minWidth: 340,
          maxWidth: 540,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '26px',
          overflow: 'hidden'
        }}>
          <img src={Banner} alt="Banner" style={{
            width: "100%",
            borderRadius: '24px',
            objectFit: "cover",
            boxShadow: "0 3px 12px rgba(0,0,0,0.10)"
          }} />
        </div>
        {/* Content right */}
        <div style={{
          flex: '2 1 600px',
          minWidth: 340
        }}>
          <h2 style={{
            fontWeight: 700,
            fontSize: '2.2rem',
            lineHeight: "1.3",
            marginBottom: "12px",
            color: "#161a24"
          }}>
            AI-DRIVEN BATTERY INTELLIGENCE FOR SMARTER ENERGY SYSTEMS
          </h2>
          <h4 style={{
            color: "#035BAA", fontWeight: 600,
            margin: "8px 0 18px 0", fontSize: "1.18rem"
          }}>
            iRasus is a Deep Tech organization developing innovative solutions for the E-Mobility, Stationary Energy Storage, and Battery Manufacturing sectors
          </h4>
          <p style={{
            color: "#232c32", fontWeight: 400, fontSize: "1.04rem",
            lineHeight: 1.56
          }}>
            We specialize in tailored solutions led by AI for battery management systems, including predictive maintenance, fault management, and performance optimization.<br /><br />
            Our tools, such as mobile and web apps, custom dashboards, and reporting systems, help clients monitor, analyze, and extend the lifespan of batteries. We empower stakeholders across the battery value chain to enhance efficiency, reduce downtime, and improve service quality.
          </p>
          <div style={{
            marginTop: 20,
            display: "flex",
            gap: "20px"
          }}>
            <button style={{
              background: "#035BAA",
              color: "#fff",
              border: "none",
              padding: "10px 26px",
              borderRadius: "8px",
              fontWeight: 600,
              fontSize: "1rem",
              cursor: "pointer"
            }}>Products</button>
            <button style={{
              background: "#fff",
              color: "#035BAA",
              border: "2px solid #035BAA",
              padding: "10px 26px",
              borderRadius: "8px",
              fontWeight: 600,
              fontSize: "1rem",
              cursor: "pointer"
            }}>Industries</button>
          </div>
        </div>
      </div>
      {/* <div style={{backgroundColor:'black',color:'blue'}}>
         Preksha-Mobile provides on-the-go visibility for both drivers and fleet administrators

        <div>THIS ENSURES PROACTIVE MAINTENANCE AND REAL-TIME MONITORING</div>
        <p>We also offer customized solutions, delivering tailored analytics, dashboards, and APIs to meet unique client needs. With robust data processing and battery data visualization, the Preksha Platform empowers organizations to optimize asset performance, enhance safety, and streamline operations for improved business outcomes.

Contact Us
</p>
<button>contact Us</button> */}
{/* <Carousel fade interval={2000} style={{ width: '100vw', height: '500px' }}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={geolocation}
          alt="First slide"
          style={{ height: '500px', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h3>Geolocation and Assest Tracking</h3>
          <p>Preskha offers real time tracking of battery location to prevent and optimize logistics</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Faultanddetection}
          alt="Second slide"
          style={{ height: '500px', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h1>Fault& Predictive Maintance </h1>
          <p>Preksha leverage AI-driven battery Analytics to predict degration and forcast Maintance needs ,enabling proactive </p>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Apiintegration}
          alt="First slide"
          style={{ height: '500px', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h1>API Integration</h1>
          <p>Preskha provides API Access for seamless integration  with third party tools and business systems,enabling custom Analytics and workflow automation</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      </div>
<div> */}
 <div
      style={{
        width: "100vw",
        background: "#05060a", // nearly black
        color: "#fff",
        padding: "60px 0 0 0",
        minHeight: "700px"
      }}
    >
      <div style={{
        maxWidth: "1350px",
        margin: "0 auto",
        padding: "0 30px 0 30px"
      }}>
        {/* Heading */}
        <h1
          style={{
            fontSize: "2.6rem",
            fontWeight: 700,
            marginBottom: "12px",
            color: "#fff"
          }}
        >
          Preksha-Mobile provides on-the-go visibility for both drivers and fleet administrators.
        </h1>
        <h2 style={{
          fontWeight: 400,
          fontSize: "2rem",
          margin: "0 0 38px 0",
          color: "#fff"
        }}>
          THIS ENSURES PROACTIVE MAINTENANCE AND REAL-TIME MONITORING.
        </h2>
        {/* Optional rich paragraph */}
        <div style={{
          marginBottom: "34px",
          maxWidth: "700px",
          color: "#A7B2D2",
          fontSize: "1.18rem",
          lineHeight: 1.6,
          fontWeight: 400
        }}>
          We also offer customized solutions, delivering tailored analytics, dashboards, and APIs to meet unique client needs. With robust data processing and battery data visualization, the Preksha Platform empowers organizations to optimize asset performance, enhance safety, and streamline operations for improved business outcomes.
        </div>
        {/* Carousel */}
        <Carousel
          fade
          interval={1000}
          style={{ width: "100%", maxWidth: "1100px", margin: "0 auto", borderRadius: "3px", overflow: "hidden", boxShadow: "0 0 28px rgba(0,0,0,0.3)",paddingBottom:'80px' }}
          indicators={true}
        >
         <Carousel.Item>
          
  <img
    className="d-block w-100"
    src={geolocation}
    alt="First slide"
    style={{
      height: "490px",
      objectFit: "cover",
       // subtle blur
    }}
  />

  {/* Move these styles to Carousel.Caption */}
  <Carousel.Caption
    style={{
      top: "20px",          // ⬆️ 20px from top
      bottom: "auto",       // override default bottom positioning
      position: "absolute", // ensure it positions correctly
      textAlign: "center",
    }}
  >
    <h3 style={{ fontWeight: 700, fontSize: "2rem", color: "#fff" }}>
      Geolocation and Asset Tracking
    </h3>
    <p style={{ fontWeight: 400, fontSize: "1.08rem", color: "#fff" }}>
      Preksha offers real time tracking of battery location to prevent and optimize logistics
    </p>
  </Carousel.Caption>
</Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Faultanddetection}
              alt="Second slide"
              style={{ height: "490px", objectFit: "cover" }}
            />
            <Carousel.Caption>
              <h3 style={{ fontWeight: 700, fontSize: "2rem", color: "#fff" }}>
                Fault & Predictive Maintenance
              </h3>
              <p style={{ fontWeight: 400, fontSize: "1.08rem", color: "#fff"}}>
                Preksha leverages AI-driven battery analytics to predict degradation and forecast maintenance needs, enabling proactive management.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Apiintegration}
              alt="Third slide"
              style={{ height: "490px", objectFit: "cover" }}
            />
            <Carousel.Caption>
              <h3 style={{ fontWeight: 700, fontSize: "2rem", color: "#fff" }}>
                API Integration
              </h3>
              <p style={{ fontWeight: 400, fontSize: "1.08rem", color: "#fff"}}>
                Preksha provides API Access for seamless integration with third party tools and business systems, enabling custom analytics and workflow automation
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>

      
</div>
    // </div>
  );
}
