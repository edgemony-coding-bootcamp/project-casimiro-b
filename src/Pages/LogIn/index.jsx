import styles from "./LogIn.module.scss";
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from 'firebase/auth';
import { useState, useEffect } from 'react'
import { auth } from '../../firebase-config';
import Log from "./Log";
const LogIn = () => {

  const [isLogged, setIsLogged] = useState(false);

  const imageLogIn = {
    log_in: { backgroundImage: 'url("https://images.unsplash.com/photo-1601833384276-f8b2d26b1170?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80")' },
    sign_in: { backgroundImage: 'url("https://images.unsplash.com/photo-1631733156581-2e204995e8d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80")' }

  }

  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [user, setUser] = useState({});
  console.log(auth)
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  })

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
      console.log(user);
      setRegisterEmail('');
      setRegisterPassword('');
    }
    catch (err) {
      console.log(err)
      console.log('Email o password non valide');
    }

  }
  const logIn = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      console.log(user)
    }
    catch (err) {
      console.log(err)
      console.log('Email o password non valide');
    }
  }
  const logOut = async () => {
    await signOut(auth);
  }
  useEffect(() => {
    user?.email ? setIsLogged(true) : setIsLogged(false);
  }, [user])

  return (
    <div className={styles.logIn_wrapper}>
      <div className={styles.container_one}>
        {isLogged ?
          <Log
            title="Log In"
            subtitle={`Welcome back ${user?.email}.`}
            btn="Accedi"
            logBtn={logIn}
            onChangeEmail={((e) => setLoginEmail(e.target.value))}
            onChangePassword={((e) => setLoginPassword(e.target.value))} />
          :
          <Log
            title="Sign In"
            subtitle="Welcome."
            btn="Registrati"
            logBtn={register}
            onChangeEmail={((e) => setRegisterEmail(e.target.value))}
            onChangePassword={((e) => setRegisterPassword(e.target.value))} />
        }
      </div>
      <div className={styles.container_two} style={isLogged ? imageLogIn.log_in : imageLogIn.sign_in}></div>
    </div>
  );
};

export default LogIn;
