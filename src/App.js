import Footer from "./Components/Footer";
import Header from './Components/Header';
import Discover from './Pages/Discover';
import Home from './Pages/Home';
import { Routes, Route } from "react-router-dom";
import Experience from './Pages/Experience';
import AboutUs from './Pages/AboutUs';




const INIT_STATE = {
  name: "'Ddocu",
  nav: [
    { link: "/", label: "HOME" },
    { link: "/AboutUs", label: "ABOUT US" },

    { link: "/Discover", label: "DISCOVER" },
    { link: "/Experience", label: "EXPERIENCE" },
  ],
  productsPreview: [],
};



function App() {
  return (
    <div className="App">
      <Header name={INIT_STATE.name} links={INIT_STATE.nav} />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />

        <Route path="/Discover" element={<Discover />} />
        <Route path="/Experience" element={<Experience />} />
      </Routes>

      <Footer />

    </div>
  );
}
export default App;