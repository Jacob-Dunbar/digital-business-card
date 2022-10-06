import React from "react";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__name">Jacob Dunbar</h1>
      <h3 className="header__title">Frontend Developer</h3>
      <p className="header__url">mywebite@url.com</p>

      <div className="header__btns">
        <button className="header__btn">
          <i className="fa fa-envelope icon"></i>Email
        </button>
        <button className="header__btn linkedin">
          <i className="fab fa-linkedin icon"></i>LinkedIn
        </button>
      </div>
    </header>
  );
};

export default Header;
