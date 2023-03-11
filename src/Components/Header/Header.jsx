import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  /*=============== Toggle Menu ===============*/
  const [Toggle, ShowMenu] = useState(false);

  return (
    <div className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Terran
        </a>
        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                <i class="uil uil-estate nav__icon"></i> Home
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i class="uil uil-user nav__icon"></i> About
              </a>
            </li>

            <li className="nav__item">
              <a href="#skill" className="nav__link">
                <i class="uil uil-file-alt nav__icon"></i> Skill
              </a>
            </li>

            <li className="nav__item">
              <a href="#services" className="nav__link">
                <i class="uil uil-briefcase nav__icon"></i> Services
              </a>
            </li>

            <li className="nav__item">
              <a href="#portfolio" className="nav__link">
                <i class="uil uil-scenery nav__icon"></i> Portfolio
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i class="uil uil-message nav__icon"></i> Contact
              </a>
            </li>
          </ul>

          <i
            class="uil uil-times nav__close"
            onClick={() => {
              ShowMenu(!Toggle);
            }}
          ></i>
        </div>

        <div
          className="nav__toggle"
          onClick={() => {
            ShowMenu(!Toggle);
          }}
        >
          <i class="uil uil-apps"></i>
        </div>
      </nav>
    </div>
  );
};

export default Header;
