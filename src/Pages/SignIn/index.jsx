import styles from "./LogIn.module.scss";
import { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { USER_SIGNUP } from "../../store/action";
import { auth } from '../../firebase-config';
import Log from "../../Components/Log";


const SignIn = () => {

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user)
  console.log(user.user)
  const imageLogIn = {
    log_in: { backgroundImage: 'url("https://images.unsplash.com/photo-1601833384276-f8b2d26b1170?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80")' },
    sign_in: { backgroundImage: 'url("https://images.unsplash.com/photo-1631733156581-2e204995e8d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80")' }

  }

  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  // const [user, setUser] = useState({});

  // onAuthStateChanged(auth, (currentUser) => {
  //   setUser(currentUser);
  // })

  // const register = async () => {
  //   try {

  //   }
  //   catch (err) {
  //     console.log(err)
  //     console.log('Email o password non valide');
  //   }
  // }
  const submit = () => {
    dispatch(USER_SIGNUP(auth, setRegisterEmail, setRegisterPassword, registerEmail, registerPassword))
  }
  // useEffect(() => {
  //   dispatch(USER_SIGNUP(auth, setRegisterEmail, setRegisterPassword, registerEmail, registerPassword))
  // }, [user])

  return (
    <div className={styles.logIn_wrapper}>
      <div className={styles.container_one}>
        <Log
          title="Sign In"
          subtitle="Welcome."
          btn="Registrati"
          logBtn={submit}
          onChangeEmail={((e) => setRegisterEmail(e.target.value))}
          onChangePassword={((e) => setRegisterPassword(e.target.value))} />
      </div>
      <div className={styles.container_two} style={imageLogIn.sign_in}></div>
    </div>
  );
};

export default SignIn;
