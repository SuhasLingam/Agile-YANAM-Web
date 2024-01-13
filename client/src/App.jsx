import Navbar from "./components/navbar";
import HomeBanner from "./components/home/homeBanner";
import OurServices from "./components/Our Services/services";
import AboutUs from "./components/AboutUs/about";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomeBanner />} />
            <Route path="/Services" element={<OurServices />} />
            <Route path="/About" element={<AboutUs />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
