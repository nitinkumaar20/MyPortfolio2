import { React, useState, useRef } from "react";
import { Inputitem } from "./Inputitem";

import { FaSquareInstagram } from "react-icons/fa6";
import { IoMdDoneAll } from "react-icons/io";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

import ClipLoader from "react-spinners/ClipLoader";

const Contact = () => {
  const [message, setMessage] = useState({
    Fname: "",
    Lname: "",
    phone: "",
    message: "",
    email: "",
  });
  const [success, setSuccess] = useState(true);
  const [loadershow, setLoadershow] = useState(false);

  const form = useRef();
  const data = {
    from_name: message.Fname + " " + message.Lname,
    from_email: message.email,
    to_name: "Nitin kumar",
    messagdsd: message.message,
  };
  console.log(data);
  const sendEmail = (e) => {
    e.preventDefault();
    if(localStorage.getItem("email") != message.email || localStorage.getItem("email") === null){

   
    setLoadershow(true);
    emailjs
      .send("", "", data, {
        publicKey: "",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          localStorage.setItem("email",message.email);
          setSuccess(false);
          toast("Message sent succeasful");
          setLoadershow(false);
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast("FAILED", error.text);
          setLoadershow(false);
        }
      );
    }else{
      toast("FAILED already send message with this mail");

    }
  };

  const onchange = (e) => {
    setMessage({ ...message, [e.target.name]: e.target.value });
  };

  const variants = {
    visible: { x: 0 },
    hidden: { x: -200 },
  };
  return (
    <>
      <ToastContainer />
      <section style={{ padding: "2rem 16rem" }} id="contact">
        {success ? (
          <div>
            <div className="div-center my-4">
              <h1 style={{ color: "#118868" }}>CONTACT</h1>
            </div>

            <motion.form className="row " ref={form} onSubmit={sendEmail}>
              <Inputitem
                initial={{ x: -200 }}
                whileInView={{ x: 0 }}
                input={"First Name"}
                value={message.Fname}
                type={"text"}
                id={"Fname"}
                name={"Fname"}
                onChangeData={onchange}
              />

              <Inputitem
                input={"Last Name"}
                value={message.Lname}
                type={"text"}
                id={"Lname"}
                name={"Lname"}
                onChangeData={onchange}
              />

              <Inputitem
                input={"Email"}
                value={message.email}
                type={"email"}
                id={"email"}
                name={"email"}
                onChangeData={onchange}
              />

              <Inputitem
                input={"Phone No"}
                value={message.phone}
                type={"tel"}
                id={"Pno"}
                name={"phone"}
                pattern={"[0-9]{10}"}
                onChangeData={onchange}
              />

              <label
                htmlFor="message"
                style={{ fontSize: "1rem", marginTop: "1rem" }}
              >
                Message
              </label>
              <textarea
                id="message"
                cols="30"
                rows="5"
                style={{
                  fontSize: "1rem",
                  outline: "none",
                  borderRadius: "2rem",
                  marginTop: ".5rem",
                }}
                placeholder="Enter message"
                name="message"
                value={message.message}
                onChange={onchange}
              ></textarea>
              <div className="div-center mt-4 ">
                {/* //////////////////////////////////// sumbmit button .////////////////////////////////////////////// */}

                <motion.button
                  initial={{ y: -100 }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.1 }}
                  className={`btn-all ${loadershow ? "d-none" : ""}`}
                  type="submit"
                  style={{ fontSize: "1rem" }}
                >
                  Submit
                </motion.button>

                {/* ///////////////////////////////////////////// loader /////////////////////////////////////
                 */}
                <ClipLoader
                  color="#24fc03"
                  loading={loadershow}
                  size={50}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              </div>
            </motion.form>
          </div>
        ) : (
          <div
            style={{
              padding: "0rem 10rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h2>Message send Succesful</h2>
            <IoMdDoneAll
              style={{
                fontSize: "5rem",
                margin: "0 1rem",
                color: "#1aff34",
                padding: "0",
              }}
            />
          </div>
        )}
      </section>
    </>
  );
};

export default Contact;
