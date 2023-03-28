import React from 'react';
import { createRoot } from "react-dom/client";
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import NavBar from "./NavBar.js";
import About from "./About.js";
import Contact from "./Contact.js";
import Home from "./Home.js";
import Projects from "./Projects.js";
import Skills from "./Skills.js";

function App() {
  //toggle black or white theme
  // const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  // console.log(prefersDark); // either true or false (depending on your OS preference)
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <div className="dark">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
            <Route path="/skills" element={<Skills />}></Route>
          </Routes>
          
        </div>
      </BrowserRouter>
    </>
  );
}

// Specific to this project: makes it possible for you to reload the page
const root = createRoot(document.querySelector("#react-root"));
const reload = () => {
  console.log("Page reloaded");
  root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
   
  );
};
reload();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
