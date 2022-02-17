import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react'
import { auth } from '../../firebase-config';

const FakeLog = () => {
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    })

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
            console.log(user)
        }
        catch (err) {
            console.log('Email o password non valide');
        }

    }
    const logIn = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
            console.log(user)
        }
        catch (err) {
            console.log('Email o password non valide');
        }
    }
    const logOut = async () => {
        await signOut(auth);
    }
    return (
        <>
            <div>
                <label>E-Mail</label>
                <input type="text" placeholder="E-Mail" onChange={(e) => { setLoginEmail(e.target.value) }} />
                <label>Password</label>
                <input type="password" placeholder="Password" onChange={(e) => { setLoginPassword(e.target.value) }} />
                <button onClick={register}>Register</button>
                <button onClick={logIn}>Log in</button>
                <button onClick={logOut}>Log out</button>
            </div>
            {user?.email}
        </>
    )
}


export default FakeLog;