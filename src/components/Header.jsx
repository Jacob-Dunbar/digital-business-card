import React from "react";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__name">Jacob Dunbar</h1>
      <h3 className="header__title">Frontend Developer</h3>
      <p className="header__url">mywebite@url.com</p>

      <div className="header__btns">
        <button className="header__btns--email">
          <i className="fa fa-envelope"></i>Email
        </button>
        <button className="header__btns--linkedin">
          <i className="fab fa-linkedin"></i>LinkedIn
        </button>
      </div>
    </header>
  );
};

export default Header;
