import "./App.css";
import { useState } from "react";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Techstack from "./pages/Techstack";
import ContactMe from "./pages/ContactMe";
import Footer from "./pages/Footer";
import Hamburger from "hamburger-react";
import PageTheme from "./PageTheme";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";

function App() {
  const { heading,background,body, } = useSelector((state) => state.colors);
  console.log("this is heading from app.jsx ", heading);
  const [isOpen, setOpen] = useState(false);

  function show() {
    const navelements = document.querySelector(".navelements");
    if (navelements) {
      navelements.classList.remove("hide");
      navelements.classList.add("show");
    }
  }

  function hide() {
    const navelements = document.querySelector(".navelements");
    if (navelements) {
      navelements.classList.add("hide");
      navelements.classList.remove("show");
    }
  }

  isOpen ? show() : hide();

  return (
    <div className="parent-dark" style={{background:background}}>
      <navbar className="primarynav" style={{marginTop:'.5rem'}}>
        <h1 style={{ color:heading }}>Imran Khan</h1>
        <div className="navelements">
          <ul style={{color:heading}}>
            <li >
              <a style={{color:heading}} href="#Home">Home</a>
            </li>
            <li>
              <a href="#Projects">Project Section</a>
            </li>
            <li>
              <a href="#Techstack">Technologies</a>
            </li>
            <li>
              <a href="#contactme">Contact Me</a>
            </li>
          </ul>
        </div>
        <div className="primarynavelements">
          <ul>
            <li>
              <a href="#Home">Home</a>
            </li>
            <li>
              <a href="#Projects">Project Section</a>
            </li>
            <li>
              <a href="#Techstack">Technologies</a>
            </li>
            <li>
              <a href="#contactme">Contact Me</a>
            </li>
            <li>
              <a href="#themes">Themes</a>
            </li>
          </ul>
        </div>

        <div className="Hamburger">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
      </navbar>
      <main style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        <section id="Home">
          <Home />
        </section>
        <section id="Projects">
          <Projects />
        </section>
        <section id="Techstack">
          <Techstack />
        </section>
        <section id="contactme">
          <ContactMe />
        </section>
        <section id="themes">
          <PageTheme />
        </section>
        <section id="footer">
          <Footer />
        </section>
      </main>
    </div>
  );
}

export default App;
