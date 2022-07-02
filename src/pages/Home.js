import React from "react";
//import { Link } from "react-router-dom";
//import BannerImage from "../assets/background.jpg";
import "../styles/Home.css";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
//import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
//import Typography from '@mui/material/Typography';
import { CardActionArea, Typography } from '@mui/material';
import epaBot from "../assets/epaBot.png";

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