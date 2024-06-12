import { motion } from "framer-motion";

const AboutMe = () => {
  const variants = {
    visible: { x: 0 },
    hidden: { x: 100 },
  };
  return (
    <section className="about-sec " id="section-2">
      <motion.div className="section-heading">
        <ul>
          <li>A</li>
          <li>B</li>
          <li>O</li>
          <li>U</li>
          <li>T</li>
          <li>M</li>
          <li>E</li>
        </ul>
      </motion.div>

      {/* ///////////////////image and text ///////////////////////////  */}
      <div className="row about-div">
        <div className="col-md-6 img-dev">
          <img
            src="https://drive.google.com/thumbnail?id=1ZbOzj2R3IVdOyg2xRxTHP9AcATYRF7bz&sz=w1000"
            alt="Error"
          />
        </div>
        <div className="col-md-6 text-div">
          <motion.div
            className="py-md-5 px-0 "
            initial="hidden"
            variants={variants}
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.h3
              initial="hidden"
              variants={variants}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              LET’S
            </motion.h3>

            <motion.h1
              initial="hidden"
              variants={variants}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              INTRODUCE ABOUT
            </motion.h1>

            <motion.h3
              initial="hidden"
              className="h3-MYSELF"
              variants={variants}
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
            >
              MYSELF
            </motion.h3>

            <h6 className="h6-1">
              I am Nitin Kumar a Web Developer and Graphic Designer, I completed
              my B.Tech in Computer Science Engineering from the Phonics Group
              of Institutions.
            </h6>

            <h6 className="h6-2">
              I have Experience in{" "}
              <span style={{ color: "#10537a" }}>
                {" "}
                React, Node, MongoDB, JavaScript, HTML, CSS, and Bootstrap and
                PhotoShop.
              </span>{" "}
              And I love to create beautiful and efficient websites for my
              customers. I love going through the entire process with the
              customer from concept, to design and then development and launch.
            </h6>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
