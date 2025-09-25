import React from "react";
// import FAQItem from "./FAQItem";
import {useState} from 'react';
import {FaPlus,FaMinus} from 'react-icons/fa';

const faqForSchools =[
    {
            question:'why is coding for kids important?',

      answer:'CodeVidhya is an EdTech company that provides online coding classes for kids'
    },
    {
      question:'why is coding for kids important?',
      answer:'The importance of coding for kids is beyond our imagination. Kids coding today will become creators of technology tomorrow. Our coding books for kids will help them achieve skills other than just coding. It will imbibe skills such as critical thinking, cognitive skills, and many other life skills which will help them in their future careers. Coding builds a strong foundation in other STEM subjects.'
    },
    {
              question:'what age group is coding program designed for?',

      answer:'Yes, absolutely! Our books for kids are important because it is one of the most in-demand skills in the current generation. Also, it is fun and engaging to learn. And lastly, it gives a kid many other interpersonal skills.'
       },
       {
                question:'what age group is coding program designed for?',

        answer:'Our books are designed to align with various school curriculums, including the National Education Policy (NEP) 2020. They complement and enhance the existing educational framework, making it easier for teachers to integrate coding into their classes.'
       },
       {
        question:'what support does Codevidhya provide for teachers implementing the program?',
        answer:'Codevidhya provides training sessions and resources for teachers to effectively implement the program. Additionally, our support team is available to answer any queries and provide assistance throughout the implementation process.'
        }
 
]
const faqForStudents = [
    {
              question:'what age group is coding program designed for?.',

      answer:'Classes are typically structured in a modular format, covering specific topics and projects to ensure a progressive and engaging learning experience.',
       },
       {
        question:'What coding languages or platforms do you teach?',
        answer: 'We focus on teaching foundational programming concepts using languages like Scratch, Python, and JavaScript, along with platforms suitable for young learners.'
       },

       {
         question:'what is the teacher-to-student ratio in your classes?',
         answer:'We maintain a 1:1 teacher-to-student ratio to ensure personalized attention and effective learning.'

       },
       {
        question:'what age group is coding program designed for?',
        answer:'Our coding programs are tailored for kids aged [5-14], ensuring age-appropriate content and engagement.'
       },
       {
        question:'Do kids need any prior coding experience to join  your programs?',
        answer: 'No prior experience is required. Our programs are designed for beginners and cater to a wide range of skill levels.'


       }
]

export default function FAQItem(){
  const [openSchool,setOpenSchool] = useState(null)
  const[openStudent,setOpenStudent] = useState(null);
  return (
        <div style={{
      display: "flex",
      gap: "64px",
      margin: "40px auto",
      maxWidth: "1400px",
      justifyContent: "center"
    }}>
      {/* For Schools */}
      <div style={{ flex: 1 }}>
        <div style={{
          textAlign: "center", fontWeight: "70", fontSize: "2rem",
          background: "#ff9355", color: "#fff", padding: "20px 0",
          borderRadius: "6px", maxWidth:'300px'
          , margin: "0 auto 18px",
        }}>For Schools</div>
        {faqForSchools.map((faq, idx) => (
          <div key={idx} style={{
            background: "#fff8f1",
            marginBottom: "24px",
            borderRadius: "14px",
            boxShadow: "0 2px 12px rgba(255,147,85,0.07)",
            padding: "24px 38px",
            position: "relative"
          }}>
            <div
              style={{ fontWeight: "700", color: "#ff9355", fontSize: "1.15rem", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer" }}
              onClick={() => setOpenSchool(openSchool === idx ? null : idx)}
            >
              {faq.question}
              <span>
                {openSchool === idx ? <FaMinus /> : <FaPlus />}
              </span>
            </div>
            {openSchool === idx && (
              <div style={{ marginTop: "18px", color: "#323232", fontWeight: 480 }}>
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
      {/* For Students */}
      <div style={{ flex: 1 }}>
        <div style={{
          textAlign: "center", fontWeight: "700", fontSize: "2rem",
          background: "#1273e6", color: "#fff", padding: "20px 0",
          borderRadius: "6px", marginBottom: "18px", maxWidth: 320, margin: "0 auto"
        }}>For Students</div>
        {faqForStudents.map((faq, idx) => (
          <div key={idx} style={{
            background: "#f5faff",
            marginBottom: "24px",
            borderRadius: "14px",
            boxShadow: "0 2px 12px rgba(16,123,230,0.08)",
            padding: "24px 38px",
            position: "relative"
          }}>
            <div
              style={{ fontWeight: "700", color: "#1273e6", fontSize: "1.15rem", display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer" }}
              onClick={() => setOpenStudent(openStudent === idx ? null : idx)}
            >
              {faq.question}
              <span>
                {openStudent === idx ? <FaMinus /> : <FaPlus />}
              </span>
            </div>
            {openStudent === idx && (
              <div style={{ marginTop: "18px", color: "#323232", fontWeight: 480 }}>
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
