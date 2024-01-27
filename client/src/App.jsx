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
        <HomeBanner />
        <OurServices />
        <AboutUs />
      </div>
      ;
    </>
  );
}

export default App;
