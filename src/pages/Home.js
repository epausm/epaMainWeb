import React from "react";
//import { Link } from "react-router-dom";
//import BannerImage from "../assets/background.jpg";
import "../styles/Home.css";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
//import Card from '@mui/material/Card';
//import CardContent from '@mui/material/CardContent';
//import CardMedia from '@mui/material/CardMedia';
//import Typography from '@mui/material/Typography';
//import { CardActionArea, Typography } from '@mui/material';
//import epaBot from "../assets/epaBot.png";

function Home() {
  return (
    <div className="home" >
      <div className="leftContainer">
      <div className="headerContainer">
        <h1> ePenasihat Akademik </h1>
        <p> Universiti Sains Malaysia</p>
        {/*<Typography>
          A responsive web-based chatbot to answer undergraduate students’ queries and can be accessed 24/7.
          The chatbot should be able to response to the undergraduate students regarding course registration
          and provide academic advisor information relevant approval.
  </Typography>*/}
        <Stack spacing={2} direction="row">
          <Button variant="outlined" color="secondary" href="https://epa-admin.vercel.app/">Admin</Button>
         {/* <Button variant="outlined" color="secondary" href="/course">Course</Button>
          <Button variant="outlined" color="secondary" href="/advisor">Advisor</Button>*/}
        </Stack>
        </div>
      </div>
      <div className="rightContainer">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Disabled Accordion</Typography>
        </AccordionSummary>
      </Accordion>
      {/*<Card sx={{ maxWidth: 400 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          style={{ backgroundImage: `url(${epaBot})` }}
          height="500"
          width={350}
        />
      </CardActionArea>
      {/*<CardActions>
        <Button variant="outlined" color="secondary" href="/epaBot">Chat</Button>
  </CardActions>
    </Card> */}
      </div>
    </div>
  );
}

export default Home;