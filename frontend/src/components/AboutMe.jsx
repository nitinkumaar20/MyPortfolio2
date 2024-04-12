import React from "react";

const AboutMe = () => {
  return (
    <section className="about-sec " id="section-2">
      <div
        style={{
          padding:'0 16rem',
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
       
          
        }}
      >
        {/* <marquee scrollamount="10"> */}
        <ul
          style={{
           
            gap: "8rem",
            fontSize: "5rem",
            display: "flex",
            textDecoration: "none",
            listStyle: "none",
            margin:'2rem 0'
          }}
        >

          <li>A</li>
          <li>B</li>
          <li>O</li>
          <li>U</li>
          <li>T</li>
          <li>M</li>
          <li>E</li>

        </ul>
        {/* </marquee> */}
      </div>

{/* /////////////////////////image and text /////////////////////////////////////////////////  */}

        <div className='row' style={{justifyContent:'center',padding:'0 16rem'}}>

        <div className="col-md-6 img-dev" style={{justifyContent:'center',alignItems:'center',display:'flex'}}>
          <img
            className="w-75 h-100"
            src="https://drive.google.com/thumbnail?id=1ZbOzj2R3IVdOyg2xRxTHP9AcATYRF7bz&sz=w1000"
            alt="Error"
            />
        </div>
        <div className="col-md-6" style={{justifyContent:'center',display:'flex',alignContent:'center'}}>
          <div className="py-md-5 px-0 ">

          <h3 style={{fontSize:'3rem',lineHeight:'1rem'}}>LET’S</h3>
  <h1 style={{fontSize:'3rem',lineHeight:'4rem'}}>
  INTRODUCE ABOUT</h1>
  <h3 style={{fontSize:'3rem',lineHeight:'1rem'}}>
  MYSELF</h3>

        <h4 style={{lineHeight:'2rem',padding:'2rem 0'}}>I am Nitin Kumar a Web Developer and Graphic Designer, I completed my B.Tech in Computer Science Engineering from the Phonics Group of Institutions.</h4>

        <h4  style={{lineHeight:'2rem',padding:'2rem 0'}}>I have Experience in React, Node, MongoDB, JavaScript, HTML, CSS, and Bootstrap and PhotoShop. And I love to create beautiful and efficient websites for my customers. I love going through the entire process with the customer from concept, to design and then development and launch.</h4>

      
  
          </div>
        </div>
        
            </div>
    </section>
  );
};

export default AboutMe;
