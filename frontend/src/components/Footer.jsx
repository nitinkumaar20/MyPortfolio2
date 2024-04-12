import React from 'react'

const Footer = () => {
  return (
    <footer style={{padding:'2rem 16rem',overflow:'hidden'}} id='footer'>
<div className='row' >
<div className='col-md-6'>
    <h2>Get in Touch Social Links</h2>
    <h4>You can contact me in different social links given below. </h4>
    <div className='d-flex gap-4'>

<a href=""><img className='img-sz' src="https://drive.google.com/thumbnail?id=11frbUW4tMzluvv-Oov9CeDlM6ucBRTRP&sz=w1000" alt="error" /></a>

<a href="">

<img className='img-sz' src="https://drive.google.com/thumbnail?id=1a4VQwKu67oZOJz3L3MNXV-TLVkjv_kIp&sz=w1000" alt="error" />
</a>

<a href="">

<img className='img-sz' src="https://drive.google.com/thumbnail?id=1DekEzod27E5i5I1yL3kVp4OWGbNW1zcG&sz=w1000" alt="error" />
</a>
    </div>
</div>

<div className='col-md-3'>
<ul style={{fontSize:'2.4rem',display:'flex',flexDirection:'column',gap:'1rem',color:'white'}}>
  <h4 style={{color:'black'}}>Quick Links</h4>
        <a href="#section-one" className='foter-nav-effect' style={{listStyle:'none',textDecoration:'none',color:'black'}}>Home</a>
        <a href="#section-2" className='foter-nav-effect' style={{listStyle:'none',textDecoration:'none',color:'black'}}>About</a>
        <a href="#section-3" className='foter-nav-effect' style={{listStyle:'none',textDecoration:'none',color:'black'}}>Services</a>
        <a href="#portfolio" className='foter-nav-effect' style={{listStyle:'none',textDecoration:'none',color:'black'}}>Portfolio</a>
        <a href="#contact" className='foter-nav-effect' style={{listStyle:'none',textDecoration:'none',color:'black'}}>Contact</a>
</ul>
      
</div>


<div className='col-md-3'>
<ul style={{fontSize:'2.4rem',display:'flex',flexDirection:'column',gap:'1rem',color:'white'}}>
  <h4 style={{color:'black'}}>Our Services</h4>
        <a href="#contact" className='foter-nav-effect' style={{listStyle:'none',textDecoration:'none',color:'black'}}>Web Designing & Development</a>
        <a href="#contact" className='foter-nav-effect' style={{listStyle:'none',textDecoration:'none',color:'black'}}>Photoshop Editing</a>
        <a href="#contact" className='foter-nav-effect' style={{listStyle:'none',textDecoration:'none',color:'black'}}>Graphic Designing</a>
        
    
</ul>
      
</div>


</div>
    </footer>
  )
}

export default Footer