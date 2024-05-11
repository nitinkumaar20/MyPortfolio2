import React from 'react'
import { motion } from "framer-motion"
import Navbar from './Navbar'

export const Home = () => {
  
  return (
    <>
    <Navbar/>
    <section id="section-one">
    {/* <!-------- left side section -------> */}
    <motion.div id="leftbox" initial={{ x:-200}} whileInView={{x:0}} viewport={{once:true}} transition={{duration:.5}}>
        <h3>Hi, I am</h3>
        <h1>NITIN KUMAR</h1>
        <p>Web Developer and Graphic Designer</p>
        <div style={{display:'flex',justifyContent:'flex-start',alignItems:'center',gap:'2rem',fontSize:'2rem'}}> 

        <button><a style={{textDecoration:'none',fontSize:'1.5rem',color:'white'}} href="#contact">Hire Me</a></button>
        <button><a style={{textDecoration:'none',fontSize:'1.5rem',color:'white'}} href="https://drive.google.com/file/d/15s67VXhiTF8GmoQAWUhlmz6IsAH7gTDV/view " target='_blank'>Resume</a></button>
        </div>

    </motion.div>
    {/* <!-- right side section  ------------> */}
    <motion.div id="rightbox" >

        <motion.img src="https://drive.google.com/thumbnail?id=1m5dKHwQ4hsymrDNcel-NqtqU0fPA0f-e&sz=w1000" initial={{scale:0.5}} animate={{scale:1}} transition={{duration:.5}}   whileTap={{ scale: 1.1 }} alt="error"/>
      
        
    </motion.div>

</section>
</>
  )
}
