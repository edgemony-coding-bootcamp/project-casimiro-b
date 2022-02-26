import styles from "./LogIn.module.scss";
import { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { GoogleAuthProvider } from "firebase/auth";
import { USER_SIGNUP, USER_LOGIN_GOOGLE } from "../../store/action";
import { auth } from '../../firebase-config';
import Log from "../../Components/Log";


const SignIn = () => {

  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  console.log(user);
  
  const imageLogIn = {
    log_in: { backgroundImage: 'url("https://images.unsplash.com/photo-1601833384276-f8b2d26b1170?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80")' },
    sign_in: { backgroundImage: 'url("https://images.unsplash.com/photo-1631733156581-2e204995e8d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80")' }

  }


  const submit = () => {
    dispatch(USER_SIGNUP(auth, registerEmail, registerPassword));
  };

  const provider = new GoogleAuthProvider();

  const logGoogle = () => {
    dispatch(USER_LOGIN_GOOGLE(auth, provider));
  };



  return (
    <div className={styles.logIn_wrapper}>
      <div className={styles.container_one}>
        <Log
          title="Sign In"
          subtitle="Welcome."
          btn="Registrati"
          logBtn={submit}
          logGoogle={logGoogle}
          onChangeEmail={((e) => setRegisterEmail(e.target.value))}
          onChangePassword={((e) => setRegisterPassword(e.target.value))} />
      </div>
      <div className={styles.container_two} style={imageLogIn.sign_in}></div>
    </div>
  );
};

export default SignIn;
