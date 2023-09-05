import "./Navbar2.css";
import img from "../../assets/Group 5085.jpg";
import { logo } from "../../assets/svgs/logo";
const Navbar2 = () => {
  return (
    <>
   <nav class="navbar">
    <div class="navbar-logo">
    {logo}
    </div>
    <ul class="navbar-menu">
      <li><a href="/home">Home</a></li>
      <li><a href="/immigration">Immigration</a></li>
      <li><a href="/admission">Admission</a></li>
    </ul>
    <button class="login-button">Login</button>
  </nav>

    </>
  );
};
export default Navbar2;
