import "./Navbar2.css";
import img from "../../assets/Group 5085.jpg";
import { logo } from "../../assets/svgs/logo";

import { Link, NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import { newLogo } from "assets/svgs/newLogo";
import edfry from "assets/svgs/Group 5086.png";
import { Hamburger } from "./Hamburger";
import { Logo } from "./Logo";
// const Navbar2 = () => {
//   const location = useLocation();
//   return (
//     <>
//       <nav className="navbar">
//         <div className="navbar-logo">
//           <img style={{ marginLeft: "-589px" }} src={edfry} />
//         </div>
//         <ul className="navbar-menu">
//           <li
//             className={`navbar-item ${
//               location.pathname === "/" ? "active" : ""
//             }`}
//           >
//             <Link to="/">Home</Link>
//           </li>
//           <li
//             className={`navbar-item ${
//               location.pathname === "/immigration" ? "active" : ""
//             }`}
//           >
//             <Link to="/immigration">Immigration</Link>
//           </li>
//           <li
//             className={`navbar-item ${
//               location.pathname === "/admission" ? "active" : ""
//             }`}
//           >
//             <Link to="/admission">Admission</Link>
//           </li>
//         </ul>
//         {/* {user?.displayName ? (
//             <nav>
//             <ul>
//               <a className="display-picture" onClick={toggleCard}>
//                 <li>
//                   <img src={user?.photoURL} alt="" />
//                 </li>
//               </a>
//             </ul>
//             <div className={`cards ${isCardVisible ? '' : 'hiddens'}`}>
//               <ul className="cardClass">
//                 <li className="cardList">
//                   <a className="cardLink" href="#">
//                     Profile
//                   </a>
//                 </li>
//                 <li className="cardList">
//                   <a className="cardLink" href="#">
//                     Account
//                   </a>
//                 </li>
//                 <li className="cardList">
//                   <a className="cardLink" href="#">
//                     Settings
//                   </a>
//                 </li>
//                 <li className="cardList">
//                   <a className="cardLink" href="#" onClick={handleSignOut}>
//                     Log Out
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </nav>
//         ) : (
//           // <button onClick={handleSignOut}>Logout</button>
//           // <Link to="/signup">Sign in</Link>
//           <p></p>
//         )} */}
//       </nav>
//     </>
//   );
// };
// export default Navbar2;



const Navbar2 = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbarxs">
      <div className="containerxs">
        <div className="logoxs">
          <Logo />
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/immigration">Immigration</NavLink>
            </li>
            <li>
              <NavLink to="/admission">Admission</NavLink>
            </li>
            
          </ul>
          
        </div>
        
      </div>
    </nav>
  );
};
export default Navbar2
// const Home = () => <h2>You are in the Home</h2>;
// const Blogs = () => <h2>You are in the Blogs</h2>;
// const Projects = () => <h2>You are in the Projects</h2>;
// const About = () => <h2>You are in the About</h2>;
// const Contact = () => <h2>You are in the Contact</h2>;

// const App = () => {
//   return (
//     <>
//       <Navbar />
//       <Switch>
//         <Route exact path="/" component={Home} />
//         <Route path="/blogs" component={Blogs} />
//         <Route path="/projects" component={Projects} />
//         <Route path="/about" component={About} />
//         <Route path="/contact" component={Contact} />
//       </Switch>
//     </>
//   );
// };



