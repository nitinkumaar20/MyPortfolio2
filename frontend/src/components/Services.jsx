import React from 'react'
import { motion } from "framer-motion"


const Services = () => {
  return (
<section id="section-3">
        <div id="services-heading">
        {/* <marquee scrollamount="10"> */}
            <ul>
                <li>S</li>
                <li>E</li>
                <li>R</li>
               <li>V</li>
                <li>I</li>
                <li>C</li>
                <li>E</li>
                <li>S</li>
            </ul>
            {/* </marquee> */}
           </div>
           <div class="services-heading2">
               <motion.h1 initial={{y:100}} whileInView={{y:0}} viewport={{once:true}} transition={{duration:.5}}>We do awesome services for our clients.</motion.h1>
           </div>
           <div class="services-box">

  {/* //////////////////   web development ///////////////////////////////////////////////// */}

           <motion.div initial={{ scale:0}} whileInView={{scale:1}} viewport={{once:true}} transition={{duration:.5}} className='boxes web'>
    
                <img src="https://drive.google.com/thumbnail?id=1t9D5fqHashvYVTIycVnp9u84Y2LmOcqJ&sz=w1000"  alt="error"/>

                   <h2>Web Development</h2>
                   <p>I provide web development services with treandy techologies like React, Node, Express, MongoDB, Bootstrape.</p>
               </motion.div>

  {/* //////////////////   photoshop ///////////////////////////////////////////////// */}

               <motion.div initial={{ scale:0}} whileInView={{scale:1}}viewport={{once:true}} transition={{duration:.5}} id="photoshop" className='boxes'>

                <img src="https://drive.google.com/thumbnail?id=1vtNs2y-ZnSToZh_FPt0Be1dpKoFGkqlK&sz=w1000" alt="error"/>

                   <h2>Photoshop Editing</h2>
                   <p>I provide Photoshop Editing Retouching serives for any Ecommerce and Personal use.</p>
               </motion.div>

  {/* //////////////////  graphic design ///////////////////////////////////////////////// */}

               <motion.div id="graphic" className='boxes' initial={{ scale:0}} whileInView={{scale:1}} viewport={{once:true}} transition={{duration:.5}}>
   
             <img src="https://drive.google.com/thumbnail?id=13Ci3ScBkCwTttbtwryur_zAgw0uNck6C&sz=w1000" alt="error"/>
           
                <h2>Graphic Design</h2>
                <p>I provide Graphic design services for their branding and Ecommerce store Purspose like Amazone graphics and Banners logo Design etc.</p>
            </motion.div>
           </div>

    </section>
  )
}

export default Services