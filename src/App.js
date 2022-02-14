import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Loading from "./Components/Loading";
import Logo from "./Components/Logo";

const Home = lazy(() => import("./Pages/Home"));
const Discover = lazy(() => import("./Pages/Discover"));
const Experience = lazy(() => import("./Pages/Experience"));
const AboutUs = lazy(() => import("./Pages/AboutUs"));

const INIT_STATE = {
  name: <Logo  />,
  nav: [

    { link: "/", label: "HOME" },
    { link: "/AboutUs", label: "ABOUT US" },
    { link: "/Discover", label: "DISCOVER" },
    { link: "/Experience", label: "EXPERIENCE" },
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
          path="/AboutUs"
          element={
            <Suspense fallback={<Loading />}>
              <AboutUs />
            </Suspense>
          }
        />
        <Route
          path="/Discover"
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
      </Routes>

      <Footer />
    </>
  );
}
export default App;
