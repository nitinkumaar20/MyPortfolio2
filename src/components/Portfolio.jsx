import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <section
      style={{
        padding: "0 10rem",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingBottom: "2rem",
      }}
      id="portfolio"
    >
      <div className="section-heading">
        {/* <marquee scrollamount="10"> */}
        <ul>
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

      <div className="services-heading2 ">
        <motion.h1
          initial={{ y: 200 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
        {"here's"} my past projects
        </motion.h1>
      </div>

      {/* //////////////////////////////////// web Portion ////////////////////////////////////////////////// */}

      <div className="services-box my-4 ">
        <motion.div
          className="main m-0 p-0"
          style={{ objectFit: "cover" }}
          initial={{ x: -200 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <img
            style={{ width: "27rem", height: "14rem" }}
            src="https://drive.google.com/thumbnail?id=1CxsngU4qWCbr_BdMoVDrChUO4YM7sNNa&sz=w1000"
            alt="error"
          />
          <a
            href="https://nitinkumaar20.github.io/Quiz.github.io/"
            target="_port"
            style={{
              textDecoration: "none",
              color: "white",
              fontSize: ".5rem",
            }}
          >
            {" "}
            <h3
              className="prev"
              style={{
                cursor: "pointer",
                objectFit: "cover",
              }}
            >
              <p className="text-danger h3">Quiz App</p> Preview
            </h3>
          </a>
        </motion.div>
        <div className="main ">
          <img
            style={{ width: "27rem", height: "14rem" }}
            src="https://drive.google.com/thumbnail?id=1HAa4HUeI_OD_ujk9nO-94_YharlrVsqq&sz=w1000"
            alt="error"
          />

          <a
            href="https://github.com/nitinkumaar20/Student-Registration-Portal"
            target="_port"
            style={{ textDecoration: "none", color: "red", fontSize: "1rem" }}
          >
            <h3
              className="prev "
              style={{
                objectFit: "cover",
                cursor: "pointer",
              }}
            >
              <p className="text-danger h5">Student Registartion portal</p>
              Preview
            </h3>
          </a>
        </div>
        <motion.div
          className="main"
          initial={{ x: 200 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <img
            style={{ width: "27rem", height: "14rem", padding: "0" }}
            src="https://drive.google.com/thumbnail?id=1TzOshuawxN_ZAs95c-_Es0V3F_PS6uiA&sz=w1000"
            alt="error"
          />

          <a
            href="https://nitinkumaar20.github.io/text_editor/"
            target="_port"
            style={{ textDecoration: "none", color: "white", fontSize: "2rem" }}
          >
            {" "}
            <h3
              className="prev"
              style={{
                cursor: "pointer",
              }}
            >
              {" "}
              <p className="text-danger h2">Text Editor</p> Preview
            </h3>
          </a>
        </motion.div>
      </div>

      {/* //////////////////////////////////// graphic Portion ////////////////////////////////////////////////// */}

      <motion.div className="services-box " id="graphic-portion">
        <motion.div
          className="main"
          initial={{ x: -200 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <img
            style={{ width: "27rem", height: "14rem" }}
            src="https://drive.google.com/thumbnail?id=1740pj7IKCb8oQoBK_VCy5zqZZ49VoY_y&sz=w1000"
            alt="error"
          />

          <a
            href="https://drive.google.com/drive/folders/1QDu6Hb0GmZlm1tbC2cqaOUDckxY1kBcY"
            target="_port"
            style={{ textDecoration: "none", color: "white", fontSize: "2rem" }}
          >
            {" "}
            <h2
              className="prev"
              style={{
                cursor: "pointer",
                color: "white",
              }}
            >
              <p className="text-danger h3">Graphic Design Work</p>Preview
            </h2>
          </a>
        </motion.div>

        <div className="main">
          <img
            style={{ width: "27rem", height: "14rem" }}
            src="https://drive.google.com/thumbnail?id=10mxGGY9y-VAJx2SA_WcPGubZYpu_A9UD&sz=w1000"
            alt="error"
          />
          <a
            href="https://drive.google.com/drive/folders/1QDu6Hb0GmZlm1tbC2cqaOUDckxY1kBcY"
            target="_port"
            style={{ textDecoration: "none", color: "white", fontSize: "2rem" }}
          >
            {" "}
            <h2
              className="prev"
              style={{
                cursor: "pointer",
                color: "white",
              }}
            >
              <p className="text-danger h3">Graphic Design Work</p>Preview
            </h2>
          </a>
        </div>

        <motion.div
          className="main"
          initial={{ x: 200 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <img
            style={{ width: "27rem", height: "14rem" }}
            src="https://drive.google.com/thumbnail?id=1hLCkErZvMcsEBsNA7iPxH0yLsXTR4iBo&sz=w1000&sz=w1000"
            alt="error"
          />
          <a
            href="https://drive.google.com/drive/folders/1QDu6Hb0GmZlm1tbC2cqaOUDckxY1kBcY"
            target="_port"
            style={{ textDecoration: "none", color: "white", fontSize: "1rem" }}
          >
            {" "}
            <h2
              className="prev"
              style={{
                cursor: "pointer",
                color: "white",
              }}
            >
              <p className="text-danger h3">Graphic Design Work</p>Preview
            </h2>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Portfolio;
