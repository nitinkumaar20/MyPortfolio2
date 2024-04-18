import React from "react";
import banner1 from '../assets/images/banner.jpg'
import banner2 from '../assets/images/banner2.jpg'
import banner3 from '../assets/images/retouch.jpg'

const Portfolio = () => {
  return (
    <section style={{padding:'2rem 16rem',overflow:'hidden'}} id="portfolio">
       <div className="section-heading">
        {/* <marquee scrollamount="10"> */}
            <ul   >
                <li>P</li>
                <li>O</li>
                <li>R</li>
               <li>T</li>
                <li>F</li>
                <li>O</li>
                <li>L</li>
                <li>I</li>
                <li>O</li>
            </ul>
            {/* </marquee> */}
           </div>

           <div class="services-heading2 "  style={{}}>
        
           <h1>Here's my past projects</h1>
           </div>

           {/* //////////////////////////////////// web Portion ////////////////////////////////////////////////// */}


      <div className="services-box my-4 " >

<div className="main m-0 p-0" style={{objectFit:'cover'}} >
  <img
    style={{ width: "33rem", height: "20rem",padding:'0'}}
    src="https://drive.google.com/thumbnail?id=1CxsngU4qWCbr_BdMoVDrChUO4YM7sNNa&sz=w1000"

    alt="error"
  />
 <a  href="https://nitinkumaar20.github.io/Quiz.github.io/" target="_port" style={{textDecoration:'none',color:'white',fontSize:'2rem'}}> <h3 className="prev h1" style={{cursor:'pointer',objectFit:'cover',display:'flex',flexDirection:'column'}}><p className="text-danger h1">Quiz App</p> Preview</h3></a>
</div>
<div className="main "  >
  <img
    style={{ width: "33rem", height: "20rem", padding:'0'}}
  
  
    src="https://drive.google.com/thumbnail?id=1HAa4HUeI_OD_ujk9nO-94_YharlrVsqq&sz=w1000"

    alt="error"
  />
  
    <a href="https://github.com/nitinkumaar20/Student-Registration-Portal" target="_port" style={{textDecoration:'none',color:'red',fontSize:'2rem'}}><h3 className="prev h1" style={{cursor:'pointer',display:"flex",flexDirection:'column'}}><p className="text-danger h1">Student Registartion portal</p>Preview</h3></a>
</div>
<div className="main" >
  <img
    style={{ width: "33rem", height: "20rem",padding:'0'}}
    src="https://drive.google.com/thumbnail?id=1TzOshuawxN_ZAs95c-_Es0V3F_PS6uiA&sz=w1000"
    alt="error"
  />

 <a  href="https://nitinkumaar20.github.io/text_editor/" target="_port" style={{textDecoration:'none',color:'white',fontSize:'2rem'}}> <h3 className="prev h1" style={{cursor:'pointer',display:'flex',flexDirection:'column'}}> <p className="text-danger h1">Text Editor</p> Preview</h3></a>
</div>

</div>
           
   
{/* //////////////////////////////////// graphic Portion ////////////////////////////////////////////////// */}

      <div className="  services-box "  id="graphic-portion" >
        <div className="main">
        
        <img
          style={{ width: "33rem", height: "20rem"}}
          src="https://drive.google.com/thumbnail?id=1740pj7IKCb8oQoBK_VCy5zqZZ49VoY_y&sz=w1000"
          alt="error"
          
          />

<a  href="https://drive.google.com/drive/folders/1QDu6Hb0GmZlm1tbC2cqaOUDckxY1kBcY" target="_port" style={{textDecoration:'none',color:'white',fontSize:'2rem'}}> <h1 className="prev" style={{cursor:'pointer',color:'white',display:'flex',flexDirection:'column'}}><p className="text-danger h1">Graphic Design Work</p>Preview</h1></a>
          </div>


          <div className="main">

         <img
          style={{ width: "33rem", height: "20rem"}}
          
          src="https://drive.google.com/thumbnail?id=10mxGGY9y-VAJx2SA_WcPGubZYpu_A9UD&sz=w1000"
          
          alt="error"
          
          />
              <a  href="https://drive.google.com/drive/folders/1QDu6Hb0GmZlm1tbC2cqaOUDckxY1kBcY" target="_port" style={{textDecoration:'none',color:'white',fontSize:'2rem'}}> <h1 className="prev" style={{cursor:'pointer',color:'white',display:'flex',flexDirection:'column'}}><p className="text-danger h1">Graphic Design Work</p>Preview</h1></a>
          </div>


          <div className="main">

         <img
          style={{ width: "33rem", height: "20rem"}}
          
          src="https://drive.google.com/thumbnail?id=1hLCkErZvMcsEBsNA7iPxH0yLsXTR4iBo&sz=w1000&sz=w1000"
          alt="error"
          
          />
              <a  href="https://drive.google.com/drive/folders/1QDu6Hb0GmZlm1tbC2cqaOUDckxY1kBcY" target="_port" style={{textDecoration:'none',color:'white',fontSize:'2rem'}}> <h1 className="prev" style={{cursor:'pointer',color:'white',display:'flex',flexDirection:'column'}}><p className="text-danger h1">Graphic Design Work</p>Preview</h1></a>
          </div>
  
      </div>


    </section>
  );
};

export default Portfolio;
