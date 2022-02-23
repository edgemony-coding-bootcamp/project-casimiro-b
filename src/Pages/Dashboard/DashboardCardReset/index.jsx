
import styles from "./DashboardCardReset.module.scss";


const DashboardCardReset = (reset) => {
    return (
        <div className={styles.main}>
            <h2>Reset Password</h2>
            <p>Hai bisogno di una nuova password?  Niente paura.<br/>
                Ti invieremo via email un link così potrai reimpostarla</p>
            <button className={styles.btn} onClick={reset}>Invia link</button>
        </div>
    );
};

export default DashboardCardReset;