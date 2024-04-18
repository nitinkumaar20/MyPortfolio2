import React from 'react'

export const Home = () => {
  return (
    <section id="section-one">
    {/* <!-------- left side section -------> */}
    <div id="leftbox">
        <h3>Hi, I am</h3>
        <h1>NITIN KUMAR</h1>
        <p>Web Developer and Graphic Designer</p>
        <div style={{display:'flex',justifyContent:'flex-start',alignItems:'center',gap:'2rem',fontSize:'2rem'}}> 

        <button><a style={{textDecoration:'none',fontSize:'1.5rem',color:'white'}} href="#contact">Hire Me</a></button>
        <button><a style={{textDecoration:'none',fontSize:'1.5rem',color:'white'}} href="https://drive.google.com/file/d/15s67VXhiTF8GmoQAWUhlmz6IsAH7gTDV/view " target='_blank'>Resume</a></button>
        </div>

    </div>
    {/* <!-- right side section  ------------> */}
    <div id="rightbox">

        <img src="https://drive.google.com/thumbnail?id=1m5dKHwQ4hsymrDNcel-NqtqU0fPA0f-e&sz=w1000" alt="error"/>
      
        
    </div>

</section>
  )
}
