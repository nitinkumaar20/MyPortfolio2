
import { motion } from "framer-motion"


export const Home = () => {
  const variants = {
    visible:{x:0,},
    hidden:{x:-100},
    }
  return (
    <>
    {/* <Navbar/> */}
    <section id="section-one">
    {/* <!-------- left side section -------> */}
    <div id="leftbox" >

        <motion.h3 initial="hidden" variants={variants} whileInView="visible" viewport={{once:true}} transition={{duration:.7}}>Hi, I am</motion.h3>

        <motion.h1 initial="hidden" variants={variants} whileInView="visible" viewport={{once:true}}  transition={{duration:.5}} >NITIN KUMAR</motion.h1>
        <motion.p initial="hidden" variants={variants} whileInView="visible" viewport={{once:true}} transition={{duration:.3}}>Web Developer and Graphic Designer</motion.p>


        <motion.div initial="hidden" variants={variants} whileInView="visible" viewport={{once:true}}  transition={{duration:.7}} style={{display:'flex',justifyContent:'flex-start',alignItems:'center',gap:'2rem'}}> 

        <button><a  href="https://wa.me/" target='_blank'>Hire Me</a></button>

        <button><a  href="https://drive.google.com/file/d/1nYL9RwKP3iNna6nISTLNiOUhVEKRRrzc/view " target='_blank'>Resume</a></button>
        </motion.div>

    </div>


    {/* <!-- right side section  ------------> */}
    <motion.div id="rightbox" >

        <motion.img src="https://drive.google.com/thumbnail?id=1m5dKHwQ4hsymrDNcel-NqtqU0fPA0f-e&sz=w1000" initial={{scale:0.5}} animate={{scale:1}} transition={{duration:.5}}   whileTap={{ scale: 1.1 }} alt="error"/>
      
        
    </motion.div>

</section>
</>
  )
}
