import React from "react";
import "./Project.css";
import projectdata from "./projectdata.js";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";

const Projects = () => {
  const { heading, body, button, border, background, buttonFont } = useSelector(
    (state) => state.colors
  );
  function Card({ img, name, details, link }) {
    return (
      <div className="card" data-aos="fade-up" style={{ border: border }}>
        <div className="photo" >
          <img  src={img} alt={name} />
        </div>
        <div
          className="details"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            border: "2px solid",
            borderColor: border,
          }}
        >
          <Typography variant="h4" style={{ color: heading }}>
            {name}
          </Typography>
          <Typography component="p" variant="subtitle2" style={{ color: body }}>
            {details}
          </Typography>
          <button
            style={{
              color: button,
              border: "1px solid",
              borderColor: heading,
              background: button,
              backdropFilter: "blur(15px)",
            }}
          >
            <a style={{ color: border }} href={link} target="_blank">
              Visit Page
            </a>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="projectSection" style={{ textAlign: "center" }}>
      <Typography variant="h3" fontWeight={"bold"} sx={{ color: heading }}>
        My Projects
      </Typography>
      <div className="container">
        {projectdata.map((item, index) => (
          <Card
            key={index}
            img={item.img}
            name={item.name}
            details={item.details}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
