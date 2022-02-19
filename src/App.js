import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Loading from "./Components/Loading";

const Home = lazy(() => import("./Pages/Home"));
const Discover = lazy(() => import("./Pages/Discover"));
const Experience = lazy(() => import("./Pages/Experience"));
const AboutUs = lazy(() => import("./Pages/AboutUs"));
const City = lazy(() => import("./Pages/City"));
const LogIn = lazy(() => import("./Pages/LogIn"));

const INIT_STATE = {
  name: "'Ddocu",
  nav: [
    { link: "/", label: "HOME" },
    { link: "/Eventi", label: "EVENTI" },
    { link: "/Esperienze", label: "ESPERIENZE" },
    { link: "/AboutUs", label: "ABOUT US" },
    { link: "/Log", label: "LOG IN/SIGN IN" },
  ],
};

function App() {
  return (
    <>
      <Header name={INIT_STATE.name} links={INIT_STATE.nav} />
    
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loading />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/:id"
          element={
            <Suspense fallback={<Loading />}>
              <City />
            </Suspense>
          }
        />
        <Route
          path="/AboutUs"
          element={
            <Suspense fallback={<Loading />}>
              <AboutUs />
            </Suspense>
          }
        />
        <Route
          path="/Eventi"
          element={
            <Suspense fallback={<Loading />}>
              <Discover />
            </Suspense>
          }
        />
        <Route
          path="/Experience"
          element={
            <Suspense fallback={<Loading />}>
              <Experience />
            </Suspense>
          }
        />
        <Route
          path="/Log"
          element={
            <Suspense fallback={<Loading />}>
              <LogIn />
            </Suspense>
          }
        />
      </Routes>
      

      <Footer />
    </>
  );
}
export default App;
