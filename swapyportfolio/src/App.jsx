import React from "react";
import Navbar from "./components/Navbar/Navbar"
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import BlurBlob from './components/BlurBlob';

const App = () => {
  return (

    <div className="relative bg-[#0f172a] min-h-screen overflow-hidden">
  {/* Grid Pattern */}
  <BlurBlob position={{ top: '35%', left: '20%' }} size={{ width: '30%', height: '40%' }} />

  <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,_rgba(255,255,255,0.03)_1px,_transparent_1px),linear-gradient(to_bottom,_rgba(255,255,255,0.03)_1px,_transparent_1px)] bg-[size:50px_50px]"></div>

  {/* Radial Glow Bottom Right */}
  <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,_rgba(99,102,241,0.2)_0%,_transparent_70%)] z-0"></div>

  {/* Main Content */}
  <div className="relative z-10 pt-20">
    <Navbar />
    <About />
    <Skills />
    <Experience />
    <Work />
    <Education />
    <Contact />
    <Footer />
  </div>
</div>

  );
};

export default App;
