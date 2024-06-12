import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [addCls, setAddCls] = useState(false);

  const showNavbar = () => {
    setAddCls((state) => !state);
    // this is test comment
  };

  return (
    <section>
      <header>
        <div id="logodiv">
          <a href="#">
            <img
              src=" https://drive.google.com/thumbnail?id=1IaAN_QyzOWGfOlVmk33P4Evu5W-jeVj_"
              alt="error"
            />
          </a>
        </div>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
        {/* #section-one */}
        <nav className={`${addCls ? "responsive_nav" : ""}`}>
          <a
            href="#section-one"
            onClick={() => {
              setAddCls((e) => !e);
            }}
          >
            Home
          </a>
          <a
            href="#section-2"
            onClick={() => {
              setAddCls((e) => !e);
            }}
          >
            About
          </a>
          <a
            href="#section-3"
            onClick={() => {
              setAddCls((e) => !e);
            }}
          >
            Services
          </a>
          <a
            href="#portfolio"
            onClick={() => {
              setAddCls((e) => !e);
            }}
          >
            Portfolio
          </a>
          <a
            href="#contact"
            onClick={() => {
              setAddCls((e) => !e);
            }}
          >
            Contact
          </a>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
      </header>
    </section>
  );
};

export default Navbar;
