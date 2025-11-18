import React, { useRef, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/saad-logo-3.svg";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";
import underline from "../../assets/nav-menu.svg";

const Navbar = () => {
  const [menu, setmenu] = useState("home");
  const menuRef = useRef();
  const openMenu = () => {
    menuRef.current.style.right = "0";
  };
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };
  return (
    <div className="navbar">
      <img className="logo" src={logo} alt="" />
      <img src={menu_open} onClick={openMenu} alt="" className="nav-mob-open" />
      <ul ref={menuRef} className="nav-menu">
        <img
          src={menu_close}
          onClick={closeMenu}
          alt=""
          className="nav-mob-close"
        />
        <li>
          <a
            onClick={() => setmenu("home")}
            className="anchor-link"
            href="#home"
          >
            <p>Home</p>
          </a>
          {menu === "home" ? <img src={underline} alt="" /> : <></>}{" "}
        </li>
        <li>
          <a
            onClick={() => setmenu("about")}
            className="anchor-link"
            href="#about"
          >
            <p>About Me</p>
          </a>
          {menu === "about" ? <img src={underline} alt="" /> : <></>}{" "}
        </li>
        <li>
          <a
            onClick={() => setmenu("services")}
            className="anchor-link"
            href="#services"
          >
            <p>Services</p>
          </a>
          {menu === "services" ? <img src={underline} alt="" /> : <></>}{" "}
        </li>
        <li>
          <a
            onClick={() => setmenu("portfolio")}
            className="anchor-link"
            href="#work"
          >
            <p>Portfolio</p>
          </a>
          {menu === "portfolio" ? <img src={underline} alt="" /> : <></>}{" "}
        </li>
        <li>
          <a
            onClick={() => setmenu("contact")}
            className="anchor-link"
            href="#contact"
          >
            <p>Contact</p>
          </a>
          {menu === "contact" ? <img src={underline} alt="" /> : <></>}{" "}
        </li>
      </ul>
      <div className="nav-connect">
        <a className="anchor-link" href="#contact">
          Connect With Me
        </a>
      </div>
    </div>
  );
};

export default Navbar;
