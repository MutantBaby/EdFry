import { discord } from "../../assets/svgs/discord";
import { facebook } from "../../assets/svgs/facebook2";
import { instagram } from "../../assets/svgs/instagram";
import { linkedin } from "../../assets/svgs/linkedin";
import { logo } from "../../assets/svgs/logo";
import { massenger } from "../../assets/svgs/massenger";
import { snapchat } from "../../assets/svgs/snapchat";
import { twitter } from "../../assets/svgs/twitter";
import { whatsapp } from "../../assets/svgs/whatsapp";
import { youtube } from "../../assets/svgs/youtube";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer__addr">
          <h1 className="footer__logo">{logo}</h1>

          <p className="footer_text">Terms of Services | Privacy Policy</p>

          <p className="footer_text">Connect with us</p>
          <div className="social-icons">
            <div className="icon-row">
              <a href="#" className="icon">
                {whatsapp}
              </a>
              <a href="https://instagram.com/edfry.i?igshid=MzRlODBiNWFlZA==" className="icon">
                {massenger}
              </a>
              <a href="https://instagram.com/edfry.i?igshid=MzRlODBiNWFlZA==" className="icon">
                {instagram}
              </a>
            </div>
            <div className="icon-row">
              <a href="https://www.youtube.com/@edfry.tutoring" className="icon">
                {youtube}
              </a>
              <a href="#" className="icon">
                {twitter}
              </a>
              <a href="#" className="icon">
                {linkedin}
              </a>
            </div>
            <div className="icon-row">
              <a href="#" className="icon">
                {snapchat}
              </a>
              <a href="#" className="icon">
                {facebook}
              </a>
              <a href="#" className="icon">
                {discord}
              </a>
            </div>
          </div>
        </div>

        <ul className="footer__nav">
          <li className="nav__item">
            <h2 className="nav__title">Online Tutors in popular Subjects</h2>

            <ul className="nav__ul">
              <li>
                <a href="#">Basic Math Tutors</a>
              </li>
              <li>
                <a href="#">Algebra Tutors</a>
              </li>
              <li>
                <a href="#">English Tutors</a>
              </li>
              <li>
                <a href="#">Writing Tutors</a>
              </li>
              <li>
                <a href="#">Geometry Tutors</a>
              </li>
              <li>
                <a href="#">Statistics Tutors</a>
              </li>
              <li>
                <a href="#">Programming Tutors</a>
              </li>
              <li>
                <a href="#">View All </a>
              </li>
            </ul>
          </li>

          <li className="nav__item ">
            <h2 className="nav__title">Get to know us</h2>
            <ul className="nav__ul">
              <li>
                <a href="#">About Us</a>
              </li>

              <li>
                <a href="#">Help Center</a>
              </li>

              <li>
                <a href="#">Blog</a>
              </li>

              <li>
                <a href="#">Honor Code</a>
              </li>

              <li>
                <a href="#">Accessibility</a>
              </li>

              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
            </ul>
          </li>

          <li className="nav__item">
            <h2 className="nav__title">Learn With Us</h2>

            <ul className="nav__ul">
              <li>
                <a href="#">Demo Lesson Space</a>
              </li>

              <li>
                <a href="#">Subjects</a>
              </li>

              <li>
                <a href="#">Browse Tutors</a>
              </li>
              <li>
                <a href="#">Test Prep Courses</a>
              </li>

              <li>
                <a For href="#">
                  For Parents
                </a>
              </li>

              <li>
                <a href="#">COVID-19</a>
              </li>
            </ul>
          </li>
        </ul>
      </footer>
      <div className="legal__links">
        <span className="textFooter">
          Made in Pakistan by <span className="heart">♥</span> @2022 Edfry
        </span>
      </div>
    </>
  );
};
export default Footer;
