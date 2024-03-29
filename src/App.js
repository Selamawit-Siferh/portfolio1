import "./App.scss";
import Home from "./containers/home";
import Contact from "./containers/contact";
import About from "./containers/about";
import Resume from "./containers/resume";
import { Routes, RouteMatch, Route } from "react-router-dom";
import Portfolio from "./containers/portfolio";
import Skills from "./containers/skills";
import NavBar from "./components/navBar";
import { Particles } from "react-tsparticles";
import { loadFull } from "tsparticles";
import Particle from "./utils.js/particles"


function App() {
  const particleOptions = {
    particles: {
      number: {
        value: 50,
      },
      size: {
        value: 3,
      },
    },
  };

  
  // const handleInit=async(main)=>{
  //   await loadFull(main)
  // }

  
  return (
    <div className="App">
      {/* particles */}
      <Particles id="particles" 
      options={Particle}
      // init={handleInit}
      />
      {/* nav bar */}
      <NavBar />
      {/* main page content */}
      <div className="App__main-page-content">
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
