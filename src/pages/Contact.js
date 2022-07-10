import React from "react";
import csSchool from "../assets/csusm.jpg";
import "../styles/Contact.css";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${csSchool})` }}
      ></div>
      <div className="rightSide">
      <Box sx={{ width: '100%', maxWidth: 500 }}>
      <Typography variant="h4" gutterBottom component="div">
          Contact Us
        </Typography>
        {/*<h1> Contact Us</h1>*/}
        
        <div className="admin">
        <Typography variant="h6" gutterBottom component="div">
          Admin
        </Typography>
        <Typography variant="h6" gutterBottom component="div">
        Nur Arina Izzati
        </Typography>
        <Typography variant="h6" gutterBottom component="div">
        arinaizzati@student.usm.my
        </Typography>
        {/*<h3>Admin</h3>
        <p>Nur Arina Izzati</p>
  <p>arinaizzati@student.usm.my</p>*/}
        </div>
        </Box>
      </div>
    </div>
  );
}

export default Contact;