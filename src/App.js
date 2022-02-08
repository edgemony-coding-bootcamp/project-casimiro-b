import Header from './Components/Header';
import Aboutus from './Pages/Aboutus';
import Discover from './Pages/Discover';
import Home from './Pages/Home';
import { Routes, Route } from "react-router-dom";
import Shop from './Pages/Shop';




const INIT_STATE = {
  name: "'Ddocu",
  nav: [
    { link: "/", label: "Home" },
    { link: "/Aboutus", label: "Aboutus" },
  
    {link: "/Discover", label: "Discover"},
    {link: "/Shop", label: "Shop"},
  ],
  productsPreview: [],
};






function App() {
  return (
    <div className="App">
      <Header name={INIT_STATE.name} links={INIT_STATE.nav} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Assistenza" element={<Aboutus />} />
        
        <Route path="/Iscriviti" element={<Discover />} />
        <Route path="/Iscriviti" element={<Shop />} />
        </Routes>
      
    </div>
  );
}
export default App;