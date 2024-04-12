import React from "react";
import { useRef,useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
//   const navRef = useRef();
  const [addCls, setAddCls] = useState(false);

  const showNavbar = () => {
    setAddCls((state)=>!state);
    // navRef.current.classList.toggle(`responsive_nav`);
  };

  return (
    <header>
      {/* <h3>LOGO</h3> */}
      <div id="logodiv">
                <a href="#">
                  
                    <img src=" https://drive.google.com/thumbnail?id=1IaAN_QyzOWGfOlVmk33P4Evu5W-jeVj_" alt="error"/>
                   
                </a>
            </div>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
      <nav className={`${addCls?'responsive_nav':''}`}>
        <a href="#section-one">Home</a>
        <a href="#section-2">About</a>
        <a href="#section-3">Services</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
