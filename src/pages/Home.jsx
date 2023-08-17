import React from "react";
import "./home.css";
import "../App.css";
import Typewriting from "../components/Typewriting";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";

const Home = () => {
  const { heading, body, } = useSelector((state) => state.colors);


  return (
    <div className="home" >
      <div
        className="left"
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <Typography variant='h4' sx={{color:heading}} data-aos="slide-right" className="welcome">
          Welcome To My Portfolio Website !!
        </Typography>
        <div className="typewriting dark">
          <h1>Iam</h1>
          <h1>
            <Typewriting />
          </h1>
        </div>
        <p data-aos="slide-left" style={{color:body}}>
          I am a front-end developer with experience in developing back-end
          systems as well. I specialize in using the ReactJS framework to build
          user interfaces and have a strong understanding of modern web
          development practices. I am skilled in creating responsive and dynamic
          websites and applications that are optimized for performance and user
          experience. I have a passion for staying up-to-date with the latest
          trends and technologies in the field and am constantly seeking to
          improve my skills. I am a hard-working and motivated developer who is
          dedicated to delivering high-quality solutions that meet the needs of
          my clients.
        </p>
      </div>
      <div className="right">
        <img
          data-aos="slide-left"
          src="https://tse1.mm.bing.net/th?id=OIP.ptzF5R9QyladtFMdysnsNwHaE8&pid=Api&P=0"
          alt="image"
        />
      </div>
    </div>
  );
};

export default Home;
