import Navbar from "./components/navbar";
import HomeBanner from "./components/home/homeBanner";
import OurServices from "./components/Our Services/services";
import AboutUs from "./components/AboutUs/about";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Projects from "./components/Projects/projects";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <div>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomeBanner />} />
              <Route path="/services" element={<OurServices />} />
              <Route path="/about" element={<AboutUs />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
      {/* <Projects /> */}
    </>
  );
}

export default App;
