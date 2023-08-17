import React from "react";
import "./techstack.css";
import { AiOutlineHtml5 } from "react-icons/ai";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";

const Techstack = () => {
  const {heading} = useSelector((state)=>state.colors);
  return (
    <div className="techstack">
      <Typography variant='h3' fontWeight={'bold'} sx={{color:heading}}>My Projects</Typography>
      <div className="logocontainer">
        <AiOutlineHtml5 style={{ fontSize: "5rem", color: "#F15A59" }} />
        <FaCss3 style={{ fontSize: "5rem", color: "#05BFDB" }} />
        <IoLogoJavascript style={{ fontSize: "5rem", color: "#FEFF86" }} />
        <SiExpress style={{ fontSize: "5rem", color: "#000000" }} />
        <FaReact style={{ fontSize: "5rem", color: "#86E5FF" }} />
        <SiMongodb style={{ fontSize: "5rem", color: "#03C988" }} />
        <FaNode style={{ fontSize: "5rem", color: "#000000" }} />
      </div>
    </div>
  );
};

export default Techstack;
