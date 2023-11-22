import React from "react";
import "./Project.css";
import projectdata from "./projectdata.js";
import { useSelector } from "react-redux";
import { Typography,Box,Paper } from "@mui/material";
import BasicChips from '../components/BasicChips.jsx'

const Projects = () => {
  const { heading, body, button, border, background, buttonFont } = useSelector(
    (state) => state.colors
  );
  function Card({ img, name, details, link,tech }) {
    return (
      <div className="card" data-aos="fade-up" style={{ border: border }}>
        <div className="photo" >
          <img  src={img} alt={name} />
        </div>
        <Paper elevation={10}
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
          <Box sx={{display:'flex',justifyContent:'space-between',gap:'1rem'}}>
            {tech.map((item,index)=>{
              return <BasicChips key={index} name={item} />
            })}
          </Box>
          <button
            style={{
              color: button,
              border: "1px solid",
              borderColor: heading,
              background: button,
              backdropFilter: "blur(15px)",
            }}
          >
            <a style={{ border: border,color:body }} href={link} target="_blank">
              Visit Page
            </a>
          </button>
        </Paper>
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
            tech={item.tech}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
