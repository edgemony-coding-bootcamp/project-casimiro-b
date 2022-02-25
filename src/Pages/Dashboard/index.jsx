import styles from './Dashboard.module.scss';

import DashboardCard from "./DashboardCard";
import DashboardCardReset from './DashboardCardReset';

const Dashboard = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    const name1 = user.user.email.substring(0, user.user.email.lastIndexOf("@"));

    console.log(user.user.email)

    return (
        <div className={styles.main}>
            <div className={styles.text}>
                <h2>Ciao {name1[0].toUpperCase() + name1.substring(1)}, <br />Speriamo tu ti stia godendo il viaggio.</h2>
            </div>

            <div className={styles.sectionCard}>
                <DashboardCard
                    name={name1}
                    email={user.user.email}
                />
                <DashboardCardReset /> {/* props reset da impostare */}

            </div>

        </div>
    )
}

export default Dashboard;