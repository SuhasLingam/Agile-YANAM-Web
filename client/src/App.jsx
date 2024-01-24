import Navbar from "./components/navbar";
import HomeBanner from "./components/home/homeBanner";
import OurServices from "./components/Our Services/services";

import AboutUs from "./components/AboutUs/about";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactUs from "./components/ContactUs/contact";

//  <div>
//    <Navbar />
//    <BrowserRouter>
//      <Routes>
//        <Route path="/" element={<HomeBanner />} />
//        <Route path="/Services" element={<OurServices />} />
//        <Route path="/About" element={<AboutUs />} />
//      </Routes>
//    </BrowserRouter>
//  </div>;
function App() {
  return (
    <>
      <div>
        <ContactUs />
      </div>
    </>
  );
}

export default App;
