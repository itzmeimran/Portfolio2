import { Box, Button, IconButton, Snackbar, Typography } from "@mui/material";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import { CloseOutlined, Star, StarBorderOutlined } from "@mui/icons-material";
import "./themes.css";
import { themeData } from "./themeData";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useState } from "react";
import React from "react";
import { setTheme } from "./colorSlices";

const PageTheme = () => {
    const {name} = useSelector((state)=>state.colors)
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton size="small" aria-label="close" onClick={handleClose}>
        <CloseOutlined fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  function handleButton(theme) {
    dispatch(
      setTheme({
        name: theme.name,
        heading: theme.colors[0],
        body: theme.colors[1],
        background: theme.background,
        border: theme.colors[2],
        button: theme.colors[0], // Replace with appropriate color from the theme
        buttonFont: theme.colors[1], // Replace with appropriate color from the theme
      })
    );
    // Store each property individually in local storage
    localStorage.setItem("name", theme.name);
    localStorage.setItem("heading", theme.colors[0]);
    localStorage.setItem("body", theme.colors[1]);
    localStorage.setItem("background", theme.background);
    localStorage.setItem("border", theme.colors[2]);
    localStorage.setItem("button", theme.colors[0]);
    localStorage.setItem("buttonFont", theme.colors[1]);
    window.location.reload();
    toast.success("Theme Changed",{
        position:"top-center",
        autoClose:1000,
        closeButton:false,
        hideProgressBar:true,
    });
  }

  const { heading, body } = useSelector((state) => state.colors);
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "2rem",
          maxWidth: "1350px",
        }}
      >
        <ColorLensIcon sx={{ fontSize: "3rem", color: heading }} />
        <Typography variant="h3" sx={{ textAlign: "center", color: heading }}>
          Themes
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          gap: "2rem",
          maxWidth: "1350px",flexWrap:'wrap'
        }}
      >
        {themeData.map((theme, i) => {
          return (
            <Box
              key={i}
              onClick={() => handleButton(theme)}
              className="themes"
              sx={{
                background: theme.background,
                textAlign: "center",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                border: name === theme.name ? "3px solid" : "none", // Add border style
                borderColor: name === theme.name ? heading : "transparent", // Add border color,
                width: name === theme.name ? "300px" : "250px"
              }}
            >
              <StarBorderOutlined
                className="inner" 
                sx={{ color: theme.colors[0], opacity: name===theme.name ? '1':'0' }}
              />
              <Typography
                fontWeight="bold"
                variant="subtitle2"
                fontSize={"1rem"}
                sx={{
                  color: theme.colors[0],
                }}
              >
                {theme.name}
              </Typography>
              <Box
                className="inner"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: ".2rem",opacity: name===theme.name ? '1':'0'
                }}
              >
                <Box
                  sx={{
                    width: "25px",
                    height: "25px",
                    borderRadius: "50%",
                    background: theme.colors[0],
                  }}
                ></Box>
                <Box
                  sx={{
                    width: "25px",
                    height: "25px",
                    borderRadius: "50%",
                    background: theme.colors[1],
                  }}
                ></Box>
                <Box
                  sx={{
                    width: "25px",
                    height: "25px",
                    borderRadius: "50%",
                    background: theme.colors[2],
                  }}
                ></Box>
              </Box>
            </Box>
          );
        })}
      </Box>
      {/* <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      message="Note archived"
      action={action}
    />; */}
    </div>
  );
};

export default PageTheme;
