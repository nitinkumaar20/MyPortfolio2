import React from 'react'

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
               <h1>We do awesome services for our clients.</h1>
           </div>
           <div class="services-box">
           <div  className='boxes web'>
    
                <img src="https://drive.google.com/thumbnail?id=1t9D5fqHashvYVTIycVnp9u84Y2LmOcqJ&sz=w1000"  alt="error"/>

                   <h2>Web Development</h2>
                   <p>I provide web development services with treandy techologies like React, Node, Express, MongoDB, Bootstrape.</p>
               </div>
               <div id="photoshop" className='boxes'>
               {/* https://drive.google.com/file/d/1vtNs2y-ZnSToZh_FPt0Be1dpKoFGkqlK/view?usp=sharing */}
                <img src="https://drive.google.com/thumbnail?id=1vtNs2y-ZnSToZh_FPt0Be1dpKoFGkqlK&sz=w1000" alt="error"/>

                   <h2>Photoshop Editing</h2>
                   <p>I provide Photoshop Editing Retouching serives for any Ecommerce and Personal use.</p>
               </div>
               <div id="graphic" className='boxes'>
               {/* https://drive.google.com/file/d/1qh7wHG_DadMSdnxtjR661QQ9rqbH2c_k/view?usp=sharing */}
             <img src="https://drive.google.com/thumbnail?id=1qh7wHG_DadMSdnxtjR661QQ9rqbH2c_k&sz=w1000" alt="error"/>
           
                <h2>Graphic Design</h2>
                <p>I provide Graphic design services for their branding and Ecommerce store Purspose like Amazone graphics and Banners logo Design etc.</p>
            </div>
           </div>

    </section>
  )
}

export default Services