import React from "react";
import "../styles/Admin.css";
import csHeader from "../assets/usmheader.jpg";
import Button from '@mui/material/Button';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from '@mui/material/Link';

function Menu() {
  return (
    <div className="menu" style={{ backgroundImage: `url(${csHeader})` }}>
      {/* style={{ backgroundImage: `url("http://www.usm.my/templates/yootheme/cache/header-tapakkonvo-f254dd31.jpeg")` }}*/}
      <div className="homeBg" ></div>
        <strong>
        <h1 className="menuTitle" >Universiti Sains Malaysia</h1>
      </strong>
      <strong>
        <h3 className="menuText">School of Computer Sciences </h3>
      </strong>
      <strong>
        <h3 className="menuText">Nurturing Empowering Future Talents </h3>
      </strong>
      
      <div className="accordian">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Academic Calendar</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <Link href="https://storage.googleapis.com/epa-admin-d2fa7.appspot.com/KALENDAR%20AKADEMIK%202021_2022.pdf">Academic Calendar 2021/2022</Link>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>School of Computer Sciences Programme Guidebook</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Link href="https://storage.googleapis.com/epa-admin-d2fa7.appspot.com/BPRP_2021_2022.pdf">Guidebook</Link>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Useful Links</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Link href="http://www.usm.my/">USM Official Website</Link> <br></br>
            <Link href="https://cs.usm.my/">School of Computer Sciences Website</Link><br></br>
            <Link href="https://elearning.usm.my/sidang2122/">eLearn@USM</Link><br></br>
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
      
      <div className="headerContainer">
          <Button size="small" className="button" variant="contained" color="secondary"  href="https://epa-admin.vercel.app/">Admin</Button>
      </div>
      
    </div>




  );
}

export default Menu;

