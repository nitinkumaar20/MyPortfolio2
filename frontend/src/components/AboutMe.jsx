import React from "react";
import { motion } from "framer-motion"

import storyImg from '../assets/images/storyimg.png'
const AboutMe = () => {
  const variants = {
    visible:{x:0},
    hidden:{x:100},
    }
  return (
    <section className="about-sec " id="section-2">
      <motion.div 
      className="section-heading"
   
      >
        {/* <marquee scrollamount="10"> */}
        <ul
    
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
      </motion.div>

{/* /////////////////////////image and text /////////////////////////////////////////////////  */}

        <div className='row about-div' >

        <div className="col-md-6 img-dev"  >
          <img
            className="w-75 h-100"
            src="https://drive.google.com/thumbnail?id=1ZbOzj2R3IVdOyg2xRxTHP9AcATYRF7bz&sz=w1000"
            // src={storyImg}
            alt="Error"
            />
        </div>
        <div className="col-md-6 text-div" >
          <motion.div className="py-md-5 px-0 " initial="hidden" variants={variants} whileInView="visible" viewport={{once:true}} transition={{duration:.5}} >

          <motion.h3 initial="hidden" variants={variants} whileInView="visible" viewport={{once:true}} transition={{duration:.7}}   style={{fontSize:'3rem',lineHeight:'1rem'}}>LET’S</motion.h3>

  <motion.h1 initial="hidden" variants={variants} whileInView="visible" viewport={{once:true}} transition={{duration:.5}}  style={{fontSize:'3rem',lineHeight:'4rem',color:' #118868'}}>
  INTRODUCE ABOUT</motion.h1>

  <motion.h3 initial="hidden" variants={variants} whileInView="visible" viewport={{once:true}} transition={{duration:.3}}  style={{fontSize:'3rem',lineHeight:'1rem'}}>
  MYSELF</motion.h3>

        <h4 style={{lineHeight:'2rem',padding:'2rem 0'}}>I am Nitin Kumar a Web Developer and Graphic Designer, I completed my B.Tech in Computer Science Engineering from the Phonics Group of Institutions.</h4>

        <h4  style={{lineHeight:'2rem',padding:'2rem 0'}}>I have Experience in <span style={{fontSize:'1.5rem',lineHeight:'2rem',padding:'2rem 0,',color:'#10537a'}}> React, Node, MongoDB, JavaScript, HTML, CSS, and Bootstrap and PhotoShop.</span> And I love to create beautiful and efficient websites for my customers. I love going through the entire process with the customer from concept, to design and then development and launch.</h4>

      
  
          </motion.div>
        </div>
        
            </div>
    </section>
  );
};

export default AboutMe;
