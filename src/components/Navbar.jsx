import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [addCls, setAddCls] = useState(false);

  const showNavbar = () => {
    setAddCls((state) => !state);
  };

  const [scrollCls, setScrollCls] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      if (scrollPercent > 10) {
        setScrollCls(true);
      } else {
        setScrollCls(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className={`header ${scrollCls ? "header-bg-blurr" : ""}`}>
      {/* <h3>LOGO</h3> */}
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
        <button className="nav-btn nav-close-btn " onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
    </header>
      // <hr style={{display:scrollCls ?'':'none'}} />
  );
};

export default Navbar;
