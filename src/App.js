import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import "./App.css";
import { useEffect } from 'react'
import { USER_LOGIN, LOG_OUT } from "./store/action";
import { useDispatch } from "react-redux";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Loading from "./Components/Loading";

const Home = lazy(() => import("./Pages/Home"));
const Discover = lazy(() => import("./Pages/Discover"));
const Experience = lazy(() => import("./Pages/Experience"));
const AboutUs = lazy(() => import("./Pages/AboutUs"));
const City = lazy(() => import("./Pages/City"));
const LogIn = lazy(() => import("./Pages/LogIn"));
const SignIn = lazy(() => import("./Pages/SignIn"));
const Dashboard = lazy(() => import("./Pages/Dashboard"));
const SideCart = lazy(() => import("./Pages/SideCart"));
const NotFound = lazy(() => import("./Pages/NotFound"))

const INIT_STATE = {
  name: "'D",
  nav: [
    { link: "/", label: "HOME" },
    { link: "/Eventi", label: "EVENTI" },
    { link: "/Esperienze", label: "ESPERIENZE" },
    { link: "/AboutUs", label: "ABOUT US" },
  ],
  log: [
    { link: "/Log", label: "LOG IN" },
    { link: "/sign", label: "SIGN IN" },
  ]
};

function App() {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('user'));
  // const user = useSelector((state) => state.user)

  useEffect(() => {
    dispatch(USER_LOGIN())
  }, [])

  const LogOut = () => {
    dispatch(LOG_OUT())
    window.location.assign('/Log')
  }

  return (
    <>
      {/* dash={Object.keys(user).length === 0 ? '/Log' : '/dashboard'} logOut={LogOut} user={user} */}
      <Header name={INIT_STATE.name} links={INIT_STATE.nav} log={INIT_STATE.log} dash={user === null || user.user === undefined ? '/Log' : '/dashboard'} logOut={LogOut} user={user} />



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
          path="/city/:id"
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
          path="/Eventi/:id"
          element={
            <Suspense fallback={<Loading />}>
              <Discover />
            </Suspense>
          }
        />
        <Route
          path="/Esperienze"
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
        <Route
          path="/sign"
          element={
            <Suspense fallback={<Loading />}>
              <SignIn />
            </Suspense>
          }
        />
        <Route
          path="/dashboard"
          element={
            <Suspense fallback={<Loading />}>
              <Dashboard />
            </Suspense>
          }
        />
        <Route
          path="/sidecart"
          element={
            <Suspense fallback={<Loading />}>
              <SideCart />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<Loading />}>
              <NotFound />
            </Suspense>
          }
        />
      </Routes>


      <Footer />
    </>
  );
}
export default App;
