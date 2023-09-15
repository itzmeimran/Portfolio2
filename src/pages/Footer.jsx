import React from "react";
import "./footer.css";
import Home from "./Home";
import Projects from "./Projects";
import Techstack from "./Techstack";
import ContactMe from "./ContactMe";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";

const Footer = () => {
  const {heading, body} = useSelector((state)=>state.colors)
  const { button, border, background, buttonFont } = useSelector(
    (state) => state.colors
  );
  return (
    <div className="footer">
      <div className="logo">
        <h1 style={{color:heading}}>Imran Khan</h1>
      </div>
      <div className="menu-dark">
        <Typography variant='h6' style={{color:heading}}>MENU</Typography>
        <p>
          <a  style={{color:border}} className="a-dark  " href="#Home">
            Home
          </a>
        </p>
        <p>
          <a style={{color:border}} className="a-dark  " href="#Projects">
            Project Section
          </a>
        </p>
        <p>
          <a  style={{color:border}} className="a-dark  " href="#Techstack">
            Technologies
          </a>
        </p>
        <p>
          <a  style={{color:border}} className="a-dark  " href="#contactMe">
            Contact Me
          </a>
        </p>
        <div className="icons" style={{marginTop:'1rem'}}>
          <a href="https://linkedin.com/in/imrankhanmohammad98" target="_blank">
            <AiOutlineLinkedin
              style={{ fontSize: "2rem", color: border }}
              className="icon"
            />
          </a>
          <a href="mailto:ikik790@gmail.com" target="_blank">
            <AiFillMail
              style={{ fontSize: "2rem", color: border }}
              className="icon"
            />
          </a>
          <a href="https://github.com/itzmeimran" target="_blank">
            <AiOutlineGithub
              style={{ fontSize: "2rem", color: border }}
              className="icon"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
