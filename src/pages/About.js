import React from "react";
import aboutUs from "../assets/aboutus.jpg";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${aboutUs})` }}
      ></div>
      <div className="aboutBottom">
        <Typography variant="h4">
          About Us
        </Typography>
        <div className="aboutCard">
      <Card sx={{ minWidth: 275 }}>
      <CardContent>
      <Box sx={{ width: '100%' }}>
        <Typography variant="body2"  sx={{ mb: 1.5 }}>
        Established as the second university in the country in 1969, 
        Universiti Sains Malaysia (USM) was first known as Universiti Pulau Pinang. 
        In 1971, USM moved from its temporary premises at the Malayan Teachers’ Training College, 
        Bukit Gelugor to the present 416.6 hectare site at Minden, approximately 9.7 km from Georgetown.
        USM offers courses ranging from Natural Sciences, Applied Sciences, Medical and 
        Health Sciences, Pharmaceutical Sciences to Building Science and Technology, 
        Social Sciences, Humanities, and Education. These are available at undergraduate 
        and postgraduate levels to approximately 30,000 students at its 17 Academic Schools 
        on the main campus in the island of Penang; 6 Schools at the Engineering Campus in 
        Nibong Tebal (approximately 50km from the main campus); and 3 at the Health Campus in 
        Kubang Kerian, Kelantan (approximately 300km from the main campus).
        </Typography>
      </Box>
      </CardContent>
      <CardActions>
        <Button size="small" href="http://www.usm.my/">Learn More</Button>
      </CardActions>
    </Card>
        </div>
        
        
        {/*<h1> About Us</h1>
        <Typography variant="body1">
        Established as the second university in the country in 1969, 
        Universiti Sains Malaysia (USM) was first known as Universiti Pulau Pinang. 
        In 1971, USM moved from its temporary premises at the Malayan Teachers’ Training College, 
        Bukit Gelugor to the present 416.6 hectare site at Minden, approximately 9.7 km from Georgetown.
        USM offers courses ranging from Natural Sciences, Applied Sciences, Medical and 
        Health Sciences, Pharmaceutical Sciences to Building Science and Technology, 
        Social Sciences, Humanities, and Education. These are available at undergraduate 
        and postgraduate levels to approximately 30,000 students at its 17 Academic Schools 
        on the main campus in the island of Penang; 6 Schools at the Engineering Campus in 
        Nibong Tebal (approximately 50km from the main campus); and 3 at the Health Campus in 
        Kubang Kerian, Kelantan (approximately 300km from the main campus). 
        </Typography>
        {/*<p>
        Established as the second university in the country in 1969, 
        Universiti Sains Malaysia (USM) was first known as Universiti Pulau Pinang. 
        In 1971, USM moved from its temporary premises at the Malayan Teachers’ Training College, 
        Bukit Gelugor to the present 416.6 hectare site at Minden, approximately 9.7 km from Georgetown. 
  </p>
        <p>
        USM offers courses ranging from Natural Sciences, Applied Sciences, Medical and 
        Health Sciences, Pharmaceutical Sciences to Building Science and Technology, 
        Social Sciences, Humanities, and Education. These are available at undergraduate 
        and postgraduate levels to approximately 30,000 students at its 17 Academic Schools 
        on the main campus in the island of Penang; 6 Schools at the Engineering Campus in 
        Nibong Tebal (approximately 50km from the main campus); and 3 at the Health Campus in 
        Kubang Kerian, Kelantan (approximately 300km from the main campus).
  </p>*/}
      </div>
    </div>
  );
}

export default About;