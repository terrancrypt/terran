import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  /*=============== Change Background Header ===============*/
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 200) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });

  /*=============== Toggle Menu ===============*/
  const [Toggle, ShowMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  return (
    <div className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Terran
        </a>
        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                onClick={() => setActiveNav("#home")}
                href="#home"
                className={
                  activeNav === "#home" ? "nav__link active-link" : "nav__link"
                }
              >
                <i class="uil uil-estate nav__icon"></i> Home
              </a>
            </li>

            <li className="nav__item">
              <a
                onClick={() => setActiveNav("#about")}
                className={
                  activeNav === "#about" ? "nav__link active-link" : "nav__link"
                }
                href="#about"
              >
                <i class="uil uil-user nav__icon"></i> About
              </a>
            </li>

            <li className="nav__item">
              <a onClick={() => setActiveNav("#skills")}
                className={
                  activeNav === "#skills" ? "nav__link active-link" : "nav__link"
                }
              href="#skills">
                <i class="uil uil-file-alt nav__icon"></i> Skill
              </a>
            </li>

            <li className="nav__item">
              <a onClick={() => setActiveNav("#project")}
                className={
                  activeNav === "#project" ? "nav__link active-link" : "nav__link"
                }
              href="#project">
                <i class="uil uil-scenery nav__icon"></i> Project
              </a>
            </li>

            <li className="nav__item">
              <a onClick={() => setActiveNav("#contact")}
                className={
                  activeNav === "#contact" ? "nav__link active-link" : "nav__link"
                }
              href="#contact">
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
