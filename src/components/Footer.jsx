

import { motion } from "framer-motion"



const Footer = () => {
  const variants = {
    visible: { x: 5 },
    hidden: { x: 0 },
  };

  return (
    <section className="foter">
      <footer style={{ padding: "2rem 10rem", overflow: "hidden" }} id="footer">
        <div className="row">
          <motion.div className="col-md-6">
            <h4 style={{ fontWeight: "600" }}>Get in Touch Social Links</h4>
            <h6>You can contact me in different social links given below. </h6>
            <motion.div className="d-flex gap-3 logos">
              <a href="https://www.instagram.com/nitinkumaar20/" target="_new">
                <motion.img
                  initial={{ y: 30 }}
                  whileInView={{ y: 0, transition: 2 }}
                  whileHover={{ y: 3 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.1 }}
                  className="img-sz"
                  src="https://drive.google.com/thumbnail?id=11frbUW4tMzluvv-Oov9CeDlM6ucBRTRP&sz=w1000"
                  alt="error"
                />
              </a>

              <a href="https://wa.me/6396200378" target="_new">
                <motion.img
                  initial={{ y: -50 }}
                  whileInView={{ y: 0, transition: 2 }}
                  whileHover={{ y: 3 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.1 }}
                  className="img-sz"
                  src="https://drive.google.com/thumbnail?id=1a4VQwKu67oZOJz3L3MNXV-TLVkjv_kIp&sz=w1000"
                  alt="error"
                />
              </a>

              <a href="https://www.linkedin.com/in/nitink4800/" target="_new">
                {/* https://drive.google.com/file/d/1yliVlKIY9U5xLCLgf-XfECBV-q1ByAMk/view?usp=sharing */}
                <motion.img
                  initial={{ y: 30 }}
                  whileInView={{ y: 0, transition: 2 }}
                  whileHover={{ y: 3 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.1 }}
                  className="img-sz"
                  src="https://drive.google.com/thumbnail?id=1yliVlKIY9U5xLCLgf-XfECBV-q1ByAMk&sz=w1000"
                  alt="error"
                />
              </a>
            </motion.div>
          </motion.div>

          <motion.div className="col-md-3 quick-link">
            <ul
              style={{
                fontSize: "1.1rem",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                color: "white",
              }}
            >
              <h4 style={{ color: "red" }}>Quick Links</h4>
              <motion.a
                variants={variants}
                initial="hidden"
                whileHover="visible"
                href="#section-one"
                className="foter-nav-effect"
                style={{
                  listStyle: "none",
                  textDecoration: "none",
                  color: "black",
                }}
              >
                Home
              </motion.a>
              <motion.a
                variants={variants}
                initial="hidden"
                whileHover="visible"
                href="#section-2"
                className="foter-nav-effect"
                style={{
                  listStyle: "none",
                  textDecoration: "none",
                  color: "black",
                }}
              >
                About
              </motion.a>
              <motion.a
                variants={variants}
                initial="hidden"
                whileHover="visible"
                href="#section-3"
                className="foter-nav-effect"
                style={{
                  listStyle: "none",
                  textDecoration: "none",
                  color: "black",
                }}
              >
                Services
              </motion.a>
              <motion.a
                variants={variants}
                initial="hidden"
                whileHover="visible"
                href="#portfolio"
                className="foter-nav-effect"
                style={{
                  listStyle: "none",
                  textDecoration: "none",
                  color: "black",
                }}
              >
                Portfolio
              </motion.a>
              <motion.a
                variants={variants}
                initial="hidden"
                whileHover="visible"
                href="#contact"
                className="foter-nav-effect"
                style={{
                  listStyle: "none",
                  textDecoration: "none",
                  color: "black",
                }}
              >
                Contact
              </motion.a>
            </ul>
          </motion.div>

          <motion.div
            className="col-md-3 our-services"
            initial={{ x: 200 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <ul
              style={{
                fontSize: "1.1rem",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                color: "white",
              }}
            >
              <h4 style={{ color: "red" }}>Our Services</h4>
              <motion.a
                variants={variants}
                initial="hidden"
                whileHover="visible"
                href="#contact"
                className="foter-nav-effect"
                style={{
                  listStyle: "none",
                  textDecoration: "none",
                  color: "black",
                }}
              >
                Web Designing & Development
              </motion.a>
              <motion.a
                variants={variants}
                initial="hidden"
                whileHover="visible"
                href="#contact"
                className="foter-nav-effect"
                style={{
                  listStyle: "none",
                  textDecoration: "none",
                  color: "black",
                }}
              >
                Photoshop Editing
              </motion.a>
              <motion.a
                variants={variants}
                initial="hidden"
                whileHover="visible"
                href="#contact"
                className="foter-nav-effect"
                style={{
                  listStyle: "none",
                  textDecoration: "none",
                  color: "black",
                }}
              >
                Graphic Designing
              </motion.a>
            </ul>
          </motion.div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
