import React, { useState } from "react";
import Logo from "../assets/usmlogo.png";
//import cslogo from "../assets/cslogo.jpg";
import { Link } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} alt="logo"/>
        {/*<img src={CsLogo}/>*/}
        <div className="headerLinks">
        <Link to="/"> ePenasihat Akademik </Link>
        </div>
        
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/about"> About </Link>
          <Link to="/contact"> Contact </Link>
          {/* Admin login page */}
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link>
       {/* <Link to="/course"> Course </Link> */}
        {/*<Link to="/advisor"> Advisor </Link>*/}
       {/* Admin login page */}
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;