import "./Navbar2.css";
import img from "../../assets/Group 5085.jpg";
import { logo } from "../../assets/svgs/logo";

import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { newLogo } from "assets/svgs/newLogo";
import edfry from "assets/svgs/Group 5086.png";
const Navbar2 = () => {
  const location = useLocation();
  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo"><img style={{marginLeft: "-589px"}} src={edfry}/></div>
        <ul className="navbar-menu">
        <li className={`navbar-item ${location.pathname === '/' ? 'active' : ''}`}>
          <Link to="/">Home</Link>
        </li>
        <li className={`navbar-item ${location.pathname === '/immigration' ? 'active' : ''}`}>
          <Link to="/immigration">Immigration</Link>
        </li>
        <li className={`navbar-item ${location.pathname === '/admission' ? 'active' : ''}`}>
          <Link to="/admission">Admission</Link>
        </li>
        </ul>
        {/* {user?.displayName ? (
            <nav>
            <ul>
              <a className="display-picture" onClick={toggleCard}>
                <li>
                  <img src={user?.photoURL} alt="" />
                </li>
              </a>
            </ul>
            <div className={`cards ${isCardVisible ? '' : 'hiddens'}`}>
              <ul className="cardClass">
                <li className="cardList">
                  <a className="cardLink" href="#">
                    Profile
                  </a>
                </li>
                <li className="cardList">
                  <a className="cardLink" href="#">
                    Account
                  </a>
                </li>
                <li className="cardList">
                  <a className="cardLink" href="#">
                    Settings
                  </a>
                </li>
                <li className="cardList">
                  <a className="cardLink" href="#" onClick={handleSignOut}>
                    Log Out
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        ) : (
          // <button onClick={handleSignOut}>Logout</button>
          // <Link to="/signup">Sign in</Link>
          <p></p>
        )} */}
      </nav>
    </>
  );
};
export default Navbar2;

// function Navbar2() {
//   const location = useLocation();

//   return (
//     <nav className="navbar">
//       <ul className="navbar-list">
//         <li className={`navbar-item ${location.pathname === '/' ? 'active' : ''}`}>
//           <Link to="/">Home</Link>
//         </li>
//         <li className={`navbar-item ${location.pathname === '/immigration' ? 'active' : ''}`}>
//           <Link to="/immigration">Immigration</Link>
//         </li>
//         <li className={`navbar-item ${location.pathname === '/admission' ? 'active' : ''}`}>
//           <Link to="/admission">Admission</Link>
//         </li>
//         {/* Add more navbar items and links as needed */}
//       </ul>
//     </nav>
//   );
// }