import React, { useEffect } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Button } from "react-bootstrap";
import landingImg from "./assets/landingImg.png";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import line from "./assets/line.png";
import { color } from "framer-motion";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import { Link } from "react-router-dom";
import AboutMe from "./Components/AboutMe";
const Home = () => {


  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Header />
      <div id="home" className="container-fluid">
        <h1 style={{
          fontSize: "70px", marginBottom: "10px", textShadow: "0 0 10px #00FF00", color: "#00FF00", fontFamily: "'Courier New', Courier, monospace",
          textAlign: "center",
        }} className=" text-center typing-animation" data-aos="fade-right" >#heyy,there!!</h1>


        <div className="jishan d-flex justify-content-center align-items-center">
          <div>
            <h1 style={{ fontSize: "45px" }} className="text-white">
              <span style={{ fontSize: "70px", textShadow: "0 0 5px #00FF00" }}>
                Jishaan
              </span>{" "}  is a versatile <br />
              <span style={{ color: "#00FF00 ", textShadow: "0 0 10px #00FF00" }} className="fw-bolder"   >
                Web developer
              </span>
              .
            </h1>
            <p className="text-gray-500 mt-5" style={{ textShadow: "0px 0px 20px #888" }}     >
              Crafting future-ready websites with innovation and precision.
            </p>
            <a href=" " target="_blank">
              <Button style={{ color: "#00FF00 ", textShadow: "0 0 10px #00FF00" }} className="mt-5" variant="outline-success"  >  Check out my CV  </Button>
            </a>
          </div>
          <div className="py-5   align-items-center">
            <img className="" width={"700px"} src={landingImg} alt="" />
            <p className="border-2 px-1 text-white" style={{ borderColor: "#00FF00", borderStyle: "solid" }}>
              currently working on Portfolio
            </p>


          </div>
        </div>


      </div>
      <div id="skills" className="skills container mt-5">
        <div className="  fs-2" data-aos="fade-right">
          <h1 className="  text-white"><span style={{ color: '#00FF00' }}>#</span>skills</h1>
          <img src={line} alt="" />
        </div>
        <Skills />
      </div>
      <div id="projects" className="projects container pt-5 mt-5">
        <div className="d-flex justify-content-between align-items-center " data-aos="fade-right">
          {/* Projects Heading */}
          <h1 className="text-white fs-2">
            <span style={{ color: "#00FF00" }}>#</span>projects
            <img src={line} alt="" />
          </h1>


          {/* View All Link */}
          <Link to="/allProjects" className="text-decoration-none text-white fw-bold  ">
            View All →
          </Link>
        </div>

        {/* Projects Component */}
        <Projects />
      </div>


      <div id="aboutMe" className="skills container mt-5">
        <div className="  fs-2" data-aos="fade-right">
          <h1 className="  text-white"><span style={{ color: '#00FF00' }}>#</span>aboutMe</h1>
          <img src={line} alt="" />
        </div>
      <AboutMe/>
      </div>
      <Footer />
    </>
  );
};

export default Home;
