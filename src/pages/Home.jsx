import React from "react";
import "./home.css";
import "../App.css";
import Typewriting from "../components/Typewriting";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";

const Home = () => {
  const { heading, body,border } = useSelector((state) => state.colors);

  return (
    <div className="home">
      <div
        className="left"
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <Typography
          variant="h4"
          sx={{ color: heading }}
          data-aos="slide-right"
          className="welcome"
        >
          Welcome To My Portfolio Website !!
        </Typography>
        <div className="typewriting dark">
          <h1 style={{color:border}}>{`I'am`}</h1>
          <h1 style={{color:border}}>
            <Typewriting />
          </h1>
        </div>
        <div data-aos="slide-right" style={{ display:'flex',flexDirection:'column',gap:'1rem' }}>
          <p style={{color: heading}}>
            I am a front-end developer with experience in developing back-end
            systems as well.
          </p>
          <p style={{color: heading}}>
            I specialize in using the ReactJS framework to build user interfaces
            and have a strong understanding of modern web development practices.
          </p>
          <p style={{color: heading}}>
            I am skilled in creating responsive and dynamic websites and
            applications that are optimized for performance and user experience.
          </p>
          <p style={{color: heading}}>
            I have a passion for staying up-to-date with the latest trends and
            technologies in the field and am constantly seeking to improve my
            skills.{" "}
          </p>
        </div>
      
      </div>
      <div className="right" data-aos="slide-left" style={{objectFit:'cover'}}>
        <img
          style={{width:'100%'}}
          src="https://static.javatpoint.com/blog/images/mern-stack2.png"
          alt="image"
        />
      </div>
    </div>
  );
};

export default Home;
