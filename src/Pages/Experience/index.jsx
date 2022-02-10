import Menu from "../../Components/Menu"

import styles from "./Experience.module.scss"


const Experience = ({ city, }) => {

    return (
        <div className="wrapperPage">

            <div className={styles.hero}>
                <h1>Your Experience,<br />your life.</h1>
            </div>
            <div className={styles.cityList}>
                <ul>
                    <li><a href="">PALERMO</a></li>
                    <li><a href="">CATANIA</a></li>
                    <li><a href="">MESSINA</a></li>
                    <li><a href="">TRAPANI</a></li>
                    <li><a href="">AGRIGENTO</a></li>
                    <li><a href="">SIRACUSA</a></li>
                </ul>
            </div>

            <div className={styles.sectionCity}>
                <div className={styles.sectionHeader}>
                    <h1>{city}</h1>
                    <Menu />
                </div>
                <div className={styles.sectionBlock}>
                    <h3>LOREM IPSUM</h3>
                    <p>Margherita risolve conflitti</p>
                </div>
                <div className={styles.sectionCard}>
                    
                </div>
            </div>

        </div>

    )
}

export default Experience;