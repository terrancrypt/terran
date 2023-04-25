import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__title section__title">Terran</div>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#project" className="footer__link">
              Projects
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a href="https://www.facebook.com/terrancrypt/" className="footer__social-link" target="_blank">
            <i className="bx bxl-facebook"></i>
          </a>

          <a href="https://www.instagram.com/ngoctuonggg/" className="footer__social-link" target="_blank">
            <i className="bx bxl-instagram"></i>
          </a>

          {/* <a href="#" className="footer__social-link" target="_blank">
            <i className="bx bxl-twitter"></i>
          </a> */}
        </div>

        <span className="footer__copy">&#169; Terrancypt. All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
