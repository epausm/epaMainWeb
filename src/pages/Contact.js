import React from "react";
import PizzaLeft from "../assets/contactus.jpg";
import "../styles/Contact.css";
import Typography from '@mui/material/Typography';

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${PizzaLeft})` }}
      ></div>
      <div className="rightSide">
      <Typography variant="h4">
          Contact Us
        </Typography>
        {/*<h1> Contact Us</h1>*/}
        
        <div className="admin">
        <Typography variant="h6">
          Admin
        </Typography>
        <Typography variant="h6">
        Nur Arina Izzati
        </Typography>
        <Typography variant="h6">
        arinaizzati@student.usm.my
        </Typography>
        {/*<h3>Admin</h3>
        <p>Nur Arina Izzati</p>
  <p>arinaizzati@student.usm.my</p>*/}
        </div>
      </div>
    </div>
  );
}

export default Contact;