<<<<<<< HEAD
import Footer from "./Components/Footer";
=======
import Header from './Components/Header';

import Discover from './Pages/Discover';
import Home from './Pages/Home';
import { Routes, Route } from "react-router-dom";
import Experience from './Pages/Experience';
import AboutUs from './Pages/AboutUs';




const INIT_STATE = {
  name: "'Ddocu",
  nav: [
    { link: "/", label: "Home" },
    { link: "/AboutUs", label: "AboutUs" },
  
    {link: "/Discover", label: "Discover"},
    {link: "/Experience", label: "Experience"},
  ],
  productsPreview: [],
};





>>>>>>> 367493853e1bc3e733d3c74e2c08f75aefd9daea

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
    <Footer />
=======

>>>>>>> 367493853e1bc3e733d3c74e2c08f75aefd9daea
    </div>
  );
}
export default App;