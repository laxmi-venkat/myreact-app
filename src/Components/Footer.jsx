import React,{useState,useEffect} from "react";
import { 
  FaFacebook, 
  FaInstagram, 
  FaYoutube, 
  FaTwitter,
  FaLinkedin
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const [currentTime,setCurrentTime] = useState(new Date());
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(()=>{
    const timer = setInterval (()=> setCurrentTime(new Date()),1000);
    return () => clearInterval(timer);
  },[])
  return (
    <footer className="footer" style={{ backgroundColor: '#f5f5f5', paddingTop: '60px', paddingBottom: '40px' }}>
      {/* Main container */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 40px',
        gap: '80px'
      }}>
        
        {/* Left Section - Logo */}
        <div style={{ flex: '0 0 auto' }}>
          <Link
          to= "/"
          onClick={()=> setActiveDropdown(null)}
          style={{
            width: '50px',
            height: '50px',
            backgroundColor: '#ff6600',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '28px',
            fontWeight: 'bold',
            color: 'white',
            fontFamily: 'Arial, sans-serif',
            textDecoration:'none',
            
          }}>
            T
          </Link>
        </div>

        {/* Programs Column */}
        <div style={{ flex: '1', minWidth: '180px' }}>
          <h3 style={{
            fontSize: '16px',
            fontWeight: '600',
            marginBottom: '20px',
            color: '#333',
            fontFamily: 'Arial, sans-serif'
          }}>
            Programs
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <p style={{ margin: '0', fontSize: '14px', color: '#666', cursor: 'pointer', fontFamily: 'Arial, sans-serif' }}>Entrepreneurship</p>
            <p style={{ margin: '0', fontSize: '14px', color: '#666', cursor: 'pointer', fontFamily: 'Arial, sans-serif' }}>Steps to Run a Startup </p>
            <p style={{ margin: '0', fontSize: '14px', color: '#666', cursor: 'pointer', fontFamily: 'Arial, sans-serif' }}>Work at a Startup</p>

          </div>
        </div>

        {/* Company Column */}
        <div style={{ flex: '1', minWidth: '180px' }}>
          <h3 style={{
            fontSize: '16px',
            fontWeight: '600',
            marginBottom: '20px',
            color: '#333',
            fontFamily: 'Arial, sans-serif'
          }}>
            Company
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <p style={{ margin: '0', fontSize: '14px', color: '#666', cursor: 'pointer', fontFamily: 'Arial, sans-serif' }}>Super Chat</p>
            <p style={{ margin: '0', fontSize: '14px', color: '#666', cursor: 'pointer', fontFamily: 'Arial, sans-serif' }}>IRasus</p>
            <p style={{ margin: '0', fontSize: '14px', color: '#666', cursor: 'pointer', fontFamily: 'Arial, sans-serif' }}>CodeVidhaya</p>
            <p style={{ margin: '0', fontSize: '14px', color: '#666', cursor: 'pointer', fontFamily: 'Arial, sans-serif' }}>BioHeaven360</p>
            <p style={{ margin: '0', fontSize: '14px', color: '#666', cursor: 'pointer', fontFamily: 'Arial, sans-serif' }}>ThagamCapital</p>
            <p style={{ margin: '0', fontSize: '14px', color: '#666', cursor: 'pointer', fontFamily: 'Arial, sans-serif' }}>How We Found</p>
            <p style={{ margin: '0', fontSize: '14px', color: '#666', cursor: 'pointer', fontFamily: 'Arial, sans-serif' }}>Requirements For Funding</p>
            <p style={{ margin: '0', fontSize: '14px', color: '#666', cursor: 'pointer', fontFamily: 'Arial, sans-serif' }}>People</p>
            
          </div>
        </div>

        {/* Resources Column */}
        <div style={{ flex: '1', minWidth: '180px' }}>
          <h3 style={{
            fontSize: '16px',
            fontWeight: '600',
            marginBottom: '20px',
            color: '#333',
            fontFamily: 'Arial, sans-serif'
          }}>
            Resources
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <p style ={{margin:'0', fontSize:'14px',color:'#666',cursor:'pointer'}}>NDA</p>
            <p style={{ margin: '0', fontSize: '14px', color: '#666', cursor: 'pointer', fontFamily: 'Arial, sans-serif' }}>Startup Directory</p>
            <p style={{ margin: '0', fontSize: '14px', color: '#666', cursor: 'pointer', fontFamily: 'Arial, sans-serif' }}>Startup Library</p>
            <p style={{ margin: '0', fontSize: '14px', color: '#666', cursor: 'pointer', fontFamily: 'Arial, sans-serif' }}>Terms of Investemnts</p>
            {/* <p style={{ margin: '0', fontSize: '14px', color: '#666', cursor: 'pointer', fontFamily: 'Arial, sans-serif' }}>SAFE</p>
            <p style={{ margin: '0', fontSize: '14px', color: '#666', cursor: 'pointer', fontFamily: 'Arial, sans-serif' }}>Hacker News</p>
            <p style={{ margin: '0', fontSize: '14px', color: '#666', cursor: 'pointer', fontFamily: 'Arial, sans-serif' }}>Launch YC</p>
            <p style={{ margin: '0', fontSize: '14px', color: '#666', cursor: 'pointer', fontFamily: 'Arial, sans-serif' }}>YC Deals</p> */}
          </div>
        </div>

        {/* Apply Button Section */}
        <div style={{ flex: '0 0 auto', textAlign: 'right' }}>
          <p style={{ 
            fontSize: '16px', 
            color: '#666', 
            marginBottom: '12px',
            fontFamily: 'Arial, sans-serif',
            fontWeight:'bold'
          }}>
            Make something people want.
          </p>
          <button style={{
            backgroundColor: '#ff6600',
            color: 'white',
            border: 'none',
            padding: '8px 16px',
            fontSize: '14px',
            fontWeight: '600',
            cursor: 'pointer',
            borderRadius: '4px',
            fontFamily: 'Arial, sans-serif'
          }}>
            Apply
          </button>
        </div>
      </div>
     <hr></hr>
      {/* Bottom Section */}
      <div style={{
        maxWidth: '1200px',
        margin: '40px auto 0',
        padding: '0 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <p style={{ 
          margin: '0', 
          fontSize: '14px', 
          color: '#666',
          fontFamily: 'Arial, sans-serif'
        }}>
        &copy; {currentTime.getFullYear()}
         <span style={{
          marginRight:'45em',
          paddingTop:'1px',
          paddingLeft:'2px',
          fontWeight:'bold'
        }}>
         Thangam Captial
         </span>
        </p> 
       
        
        <div style={{
          display: 'flex',
          gap: '16px',
          fontSize: '20px'
        }}>
          <FaTwitter style={{ color: '#666', cursor: 'pointer' }} />
          <FaFacebook style={{ color: '#666', cursor: 'pointer' }} />
          <FaInstagram style={{ color: '#666', cursor: 'pointer' }} />
          <FaLinkedin style={{ color: '#666', cursor: 'pointer' }} />
          <FaYoutube style={{ color: '#666', cursor: 'pointer' }} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;