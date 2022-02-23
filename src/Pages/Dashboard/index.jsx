import styles from './Dashboard.module.scss';
import { useState, useEffect } from 'react'
import { USER_LOGIN } from "../../store/action";
import { useSelector, useDispatch } from "react-redux";

import DashboardCard from "./DashboardCard";
import DashboardCardReset from './DashboardCardReset';

const Dashboard = () => {

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');

    // const dispatch = useDispatch();
    // const user = useSelector((state) => state.user)

    // useEffect(() => {
    //     dispatch(USER_LOGIN())
    // }, [])

    // console.log(user)
    return (
        <div className={styles.main}>
            <div className={styles.text}>
                <h2>Ciao NOME, <br/>Speriamo tu ti stia godendo il viaggio.</h2>
            </div>

            <div className={styles.sectionCard}>
                <DashboardCard 
                    onChangeName={((e) => setName(e.target.value))}
                    onChangeSurname={((e) => setSurname(e.target.value))}
                    onChangeEmail={((e) => setEmail(e.target.value))}
                />
                <DashboardCardReset /> {/* props reset da impostare */}
                
            </div>

        </div>
    )
}

export default Dashboard;