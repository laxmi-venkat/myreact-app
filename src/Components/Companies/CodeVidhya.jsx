import React, { useState } from 'react';
import vidhya from '../../assets/codeVidhya.png';
import logo from '../../assets/logocodevidhya.png';
import child from '../../assets/codevidya/children.png';
import child2 from '../../assets/codevidya/children2.png';
import our from '../../assets/codevidya/Our-journey.png';
import group from '../../assets/codevidya/Group.png';
import children3 from '../../assets/codevidya/childern3.png';
import imgBrain from '../../assets/codevidya/thinking.png';
import imgBook from '../../assets/codevidya/Book.png';
import imgClock from '../../assets/codevidya/clock.png';
import imgLaptop from '../../assets/codevidya/laptop.png';
import imgPaint from '../../assets/codevidya/art.png';
import imgHandshake from '../../assets/codevidya/collabration.png'
import TabbedSection from './codevidhya/TabbedSection';
import FAQItem from './codevidhya/FAQItem';

const benefits = [
  {
    image: imgBrain,
    text: "Boosts Logical Thinking & Problem-Solving"
  },
  {
    image: imgLaptop,
    text: "Enhances Coding Quotient"
  },
  {
    image: imgBook,
    text: "Improves Academic Performance"
  },
 {
    image: imgPaint,
    text: "Develops Creativity & Imagination"
  },
  {
    image: imgClock,
    text: "Make Kids Future Ready"
  },
  {
    image: imgHandshake,
    text: "Builds Collaboration Skills"
  },
];


export default function CodeVidhya({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ background: '#fff', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      {/* ---------- Header ---------- */}
      <header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1.5rem 4vw',
          borderBottom: '1px solid #eee',
        }}
      >
        <img src={logo} alt="Codevidhya Logo" style={{ height: '2.4rem' }} />
      </header>

      {/* ---------- Hero Section ---------- */}
      <main
        style={{
          maxWidth: '1380px',
          margin: '0 auto',
          padding: '2.5rem 4vw',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          minHeight: '75vh',
          gap: '2rem',
        }}
      >
        {/* Left */}
        <section style={{ flex: '1 1 440px', minWidth: 330, maxWidth: 700 }}>
          <h1 style={{ fontSize: '3.5rem', lineHeight: 1.1, fontWeight: 800, margin: 0 }}>
            <span style={{ color: '#1792e6' }}>Coding</span>{' '}
            <span style={{ color: '#333' }}>Curriculum</span>
            <br />
            <span style={{ color: '#1792e6' }}>for Kids</span>
          </h1>
          <p
            style={{
              color: '#222',
              fontSize: '1.18rem',
              marginTop: '2.2rem',
              marginBottom: '0.7rem',
              maxWidth: 600,
            }}
          >
            We mentor young learners to thrive in this new world, providing education that equips them with future skills and empowers them to become architects of their own lives.
          </p>
          <p
            style={{
              color: '#222',
              fontSize: '1.13rem',
              marginBottom: '1.7rem',
              maxWidth: 600,
            }}
          >
            Our comprehensive coding curriculum, designed by industry experts, caters to individual learners through live 1:1 online classes and extends to schools with a unique offline curriculum.
          </p>
          <div style={{ display: 'flex', gap: '2.5rem', marginTop: '2.2rem', flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontSize: '2rem', fontWeight: 700, color: '#1792e6' }}>200+</div>
              <div
                style={{
                  color: '#666',
                  marginTop: '0.2rem',
                  fontSize: '1rem',
                  borderLeft: '3px solid #ffa064',
                  paddingLeft: 10,
                }}
              >
                Futuristic Schools
              </div>
            </div>
            <div>
              <div style={{ fontSize: '2rem', fontWeight: 700, color: '#1792e6' }}>40+</div>
              <div
                style={{
                  color: '#666',
                  marginTop: '0.2rem',
                  fontSize: '1rem',
                  borderLeft: '3px solid #ffa064',
                  paddingLeft: 10,
                }}
              >
                Countries' Learners
              </div>
            </div>
            <div>
              <div style={{ fontSize: '2rem', fontWeight: 700, color: '#1792e6' }}>1,00,000+</div>
              <div
                style={{
                  color: '#666',
                  marginTop: '0.2rem',
                  fontSize: '1rem',
                  borderLeft: '3px solid #ffa064',
                  paddingLeft: 10,
                }}
              >
                Student Coders
              </div>
            </div>
          </div>
        </section>

        {/* Right Illustration */}
        <section
          style={{
            flex: '1 1 420px',
            minWidth: 320,
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img src={vidhya} alt="Hero Illustration" style={{ width: '100%', maxWidth: 480 }} />
        </section>
      </main>

      {/* ---------- Two Column Curriculum ---------- */}
   <main
  style={{
    display: 'flex',
    gap: '36px',
    justifyContent: 'center',
    alignItems: 'stretch', // ensures equal height
    margin: '50px auto',
    maxWidth: '1400px',
    padding: '0 24px',
  }}
>
  {/* For Schools */}
  <section
    style={{
      width: '40rem',
      minHeight: '660px', // use minHeight to ensure the same
      border: '1.5px solid red',
      padding: '38px 34px 32px 34px',
      borderRadius: '12px',
      display: 'flex',
      flexDirection: 'column',
      background: "#fff",
      boxSizing: "border-box",
      flex: 1, // makes width stretch equally
    }}
  >
    <img src={child} alt="Child 1" style={{ maxWidth: '85%', marginBottom: '38px', alignSelf: 'center' }} />
    <div>
      <h1 style={{ color: 'red', display:"inline"}}>
        For Schools
      </h1>
      <span style={{ color: 'black', fontSize:"2.6rem", fontWeight: "600", marginLeft: "8px" }}>
        Classroom Coding Curriculum
      </span>
      <p style={{
        fontSize: "1.22rem",
        color: "#232323",
        marginTop: "18px",
        marginBottom: "0"
      }}>
        Our contemporary coding curriculum effortlessly integrates into school classrooms,
        eliminating the need for outdated computer science textbooks.
      </p>
    </div>
  </section>

  {/* For Individual Students */}
  <section
    style={{
      width: '40rem',
      minHeight: '660px',
      border: '1.5px solid green',
      padding: '38px 34px 32px 34px',
      borderRadius: '12px',
      display: 'flex',
      flexDirection: 'column',
      background: "#fff",
      boxSizing: "border-box",
      flex: 1, // stretch equally
    }}
  >
    <img src={child2} alt="Child 2" style={{ maxWidth: '85%', marginBottom: '38px', alignSelf: 'center' }} />
    <div>
      <h1 style={{ fontSize: "2.6rem", color: "#232323", fontWeight: "700" }}>
        For Individual Students
      </h1>
      <span style={{ fontWeight: "500", fontSize: "1.28rem", color: "#222"}}>
        Live 1:1 Classes
      </span>
      <p style={{
        fontSize: "1.10rem",
        color: "#232323",
        marginTop: "10px"
      }}>
        Unlock personalised 1:1 live learning for your child, tailored to maximise their potential.
      </p>
      <p style={{
        fontSize: "1.10rem",
        color: "#232323"
      }}>
        Catering to ages 6 to 16, our diverse courses range from beginner levels like Scratch,
        App and Web Development, to advanced subjects like Data Analysis and Artificial Intelligence.
      </p>
      <p style={{
        fontSize: "1.10rem",
        color: "#232323"
      }}>
        Click below to book a Free trial class, and let's determine the ideal coding journey for your child.
      </p>
    </div>
  </section>
</main>


<main>
 <div style={{
      width: "100vw",
      maxWidth: "1800px",
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      gap: "64px",
      padding: "54px 28px 42px 28px",
      background: "#fff",
      minHeight: "420px"
    }}>
      {/* Left illustration */}
      <div style={{
        flex: "1 1 400px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minWidth: "340px"
      }}>
        <img src={
          children3
        } alt="Main Illustration" style={{ width: "78%", maxWidth: "410px" }}/>
      </div>
      {/* Right grid */}
      <div style={{
        flex: "2 2 650px"
      }}>
        {/* Title */}
        <h1 style={{
          fontSize: "3rem",
          fontWeight: "700",
          marginBottom: "40px",
          color: "#303030"
        }}>
          Benefits of <span style={{ color: "#137ef5" }}>Coding for Kids</span>
        </h1>
        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "28px"
        }}>
          {benefits.map((item, idx) => (
            <div
              key={idx}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "18px 26px",
                background: "#fafcff",
                borderRadius: "18px",
                boxShadow: "0 1px 10px rgba(20,70,170,0.06)",
                border: "1.5px solid #f2eced",
                minHeight: "94px"
              }}
            >
              <img src={item.image} alt="" style={{ width: "54px", height: "54px", marginRight: "22px" }} />
              <span style={{ fontWeight: "500", color: "#1670c3", fontSize: "1.14rem" }}>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>

</main>


      {/* ---------- About Us Section ---------- */}
      <main style={{ maxWidth: "1100px", margin: "54px auto", padding: "0 24px",  }}>
        <section >
          <h3 style={{justifyContent:'center',textAlign:'center',color:'darkblue'}}>ABOUT US</h3>
          <h2 style={{color:'blue',justifyContent:'center',textAlign:'center'}}>We're here to help you find the best way to success</h2>
          <p>
            Codevidhya is an Edtech company that aims to facilitate young minds into the coding world. Our integral vision as an organization is to help kids learn, adapt and conquer the demanding future of 21st-century skills. We provide a knowledgeable yet fun-filled platform for young coders to ace and master the skill of coding. The team parallelly works to nurture skill development as regards creative thinking, critical thinking, problem-solving ability, and much more. Our well-thought-out curriculum keeps in mind the important aspect of brain development thus motivating children to not only understand coding but also fall in love with its concept and creation.
          </p>
          <img src={our} style={{ maxWidth: "400%", marginRight: "34px" }} alt="Our Journey" />
          {/* <img src={group} style={{ maxWidth: "400px" }} alt="Group" /> */}
        </section>
      </main>
           <TabbedSection/>
      {/* ---------- Features Row ---------- */}
      {/* <main style={{ maxWidth: "1100px", margin: "30px auto", padding: "0 24px"}}>
        
      </main> */}

      {/* ---------- Example Section ---------- */}
      <main>
      
      </main>

      {/* ---------- FAQ ---------- */}
      {/* <div className='border-b border-gray-300 py-3'>
        <button onClick={() => setOpen(!open)}
            className ="flex w-full justify-between items-center text-left">
            <span className='font-medium text-lg'>{question}</span>
            <span className='text-xl transition-transform duration-200'>{open ? "-" :"+"}</span>
        </button>
        {open && (
          <div className="mt-2 text-gray-700">
            {answer}
          </div>
        )}
      </div> */}
      <FAQItem/>


    </div>
  );
}
