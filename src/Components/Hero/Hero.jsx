import React from "react";
import "./Hero.css";
import profile_img from "../../assets/hero.png";

const Hero = () => {
  return (
    <div id="hero" className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span>I'm Saad Sayed,</span> frontend developer based in Egypt.
      </h1>
      <p>
        I’m a passionate Front-End Developer who enjoys creating attractive and
        user-friendly website interfaces.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <a className="anchor-link" href="#contact">
            Connect With Me
          </a>
        </div>
        <div className="hero-resume">
          <a
            className="anchor-link"
            href="https://drive.google.com/file/d/1CyChFQKrrGqZDzKOj7Uo19XXnkroMs4O/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            My resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
