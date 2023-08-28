import "./Navbar.css";
import img from "../../assets/Group 5085.jpg";
import { logo } from "../../assets/svgs/logo";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      {/* <nav classNameName="navbar">
        <div classNameName="navbar-container containers">
         
        {logo}
          <p classNameName="edfry">edfry</p>
        </div>
      </nav> */}

      {/* <nav className="nav">
        <input type="checkbox" id="nav-check" />
        <div className="nav-header">
          <div className="nav-title">{logo}</div>
        </div>

        <ul className="nav-list">
          <li>
            <a href="#" className="buttonNav">
              Login
            </a>
          </li>
        </ul>
      </nav> */}
      <div className="navbar">
        <a href="#" className="logo">
          {logo}
        </a>
        <button className="login-button">
          <Link to={"/"} style={{ color: "white", textDecoration: "none" }}>
            Login
          </Link>
        </button>
      </div>
    </>
  );
};
export default Navbar;
