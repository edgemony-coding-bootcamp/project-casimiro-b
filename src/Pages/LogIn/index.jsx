import styles from "./LogIn.module.scss";

import Log from "./Log";
import { useState } from "react";

const LogIn = () => {

  const [isLogged, setIsLogged] = useState(true);

  const imageLogIn = {
      log_in: {backgroundImage: 'url("https://images.unsplash.com/photo-1601833384276-f8b2d26b1170?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80")'},
      sign_in: {backgroundImage: 'url("https://images.unsplash.com/photo-1631733156581-2e204995e8d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80")'}
      
  }



  return (
    <div className={styles.logIn_wrapper}>
      <div className={styles.container_one}>
        {isLogged ? 
          <Log title="Log In" subtitle="Welcome back." btn="Accedi" />
          : 
          <Log title="Sign In" subtitle="Welcome." btn="Registrati" />
        }
      </div>
      <div className={styles.container_two} style={isLogged ? imageLogIn.log_in : imageLogIn.sign_in}></div>
    </div>
  );
};

export default LogIn;
