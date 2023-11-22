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
  const { heading } = useSelector((state) => state.colors);
  return (
    <div className="techstack">
      <Typography
        variant="h3"
        fontWeight={"bold"}
        sx={{ color: heading, marginBottom: "3rem" }}
      >
        Technology Stack
      </Typography>
      <div className="logocontainer">
        <AiOutlineHtml5
          style={{ fontSize: "5rem", color: "#F15A59", cursor: "pointer" }}
        />
        <FaCss3
          style={{ fontSize: "5rem", color: "#05BFDB", cursor: "pointer" }}
        />
        <IoLogoJavascript
          style={{ fontSize: "5rem", color: "#FEFF86", cursor: "pointer" }}
        />
        <SiExpress
          style={{ fontSize: "5rem", color: "#000000", cursor: "pointer" }}
        />
        <FaReact
          style={{ fontSize: "5rem", color: "#86E5FF", cursor: "pointer" }}
        />
        <SiMongodb
          style={{ fontSize: "5rem", color: "#03C988", cursor: "pointer" }}
        />
        <FaNode
          style={{ fontSize: "5rem", color: "#000000", cursor: "pointer" }}
        />
      </div>
    </div>
  );
};

export default Techstack;
