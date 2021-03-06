import styles from "./LogIn.module.scss";
import { useState } from "react";
import { auth } from "../../firebase-config";
import { GoogleAuthProvider } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { USER_LOGIN, USER_LOGIN_GOOGLE } from "../../store/action";
import Log from "../../Components/Log";

const LogIn = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  console.log(user);
  const imageLogIn = {
    log_in: {
      backgroundImage:
        'url("https://images.unsplash.com/photo-1601833384276-f8b2d26b1170?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80")',
    },
    sign_in: {
      backgroundImage:
        'url("https://images.unsplash.com/photo-1631733156581-2e204995e8d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80")',
    },
  };

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const logIn = () => {
    dispatch(USER_LOGIN(auth, loginEmail, loginPassword));
  };

  const provider = new GoogleAuthProvider();

  const logGoogle = () => {
    dispatch(USER_LOGIN_GOOGLE(auth, provider));
  };

  return (
    <div className={styles.logIn_wrapper}>
      <div className={styles.container_one}>
        <Log
          title="Log In"
          subtitle="Welcome back."
          btn="Accedi"
          logBtn={logIn}
          logGoogle={logGoogle}
          onChangeEmail={(e) => setLoginEmail(e.target.value)}
          onChangePassword={(e) => setLoginPassword(e.target.value)}
        />
      </div>
      <div className={styles.container_two} style={imageLogIn.log_in}></div>
    </div>
  );
};

export default LogIn;
