import React from "react";
import github from "../assets/square-github.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <i className="fab fa-linkedin"></i>
      <img src={github} alt="" />
      <i className="fab fa-instagram"></i>
      <i className="fab fa-facebook"></i>
      <i className="fab fa-twitter"></i>
    </footer>
  );
};

export default Footer;
