
import Menu from "../../Components/Menu";
import CardExperience from "./CardExperience";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from 'react';
import { FETCH_ALL_DATA_EXPERIENCE } from "../../store/action";


import styles from "./Experience.module.scss";


const Experience = () => {

    const [cityId, setCityId] = useState(24);

    const dispatch = useDispatch();
    const experience = useSelector((state) => state.experience);

    useEffect(() => {
        dispatch(FETCH_ALL_DATA_EXPERIENCE(cityId));
    }, [cityId]);
    console.log(experience.data);


    return (

        <div>

            <div className={styles.hero}>
                <h1>Your Experience,<br />your life.</h1>
            </div>
            <div className={styles.cityList}>
                <ul>
                    <li onClick={() => setCityId(24)}>PALERMO</li>
                    <li onClick={() => setCityId(15)}>CATANIA</li>
                    <li onClick={() => setCityId(572)}>MESSINA</li>
                    <li onClick={() => setCityId(587)}>TRAPANI</li>
                    <li onClick={() => setCityId(265)}>AGRIGENTO</li>
                    <li onClick={() => setCityId(147)}>SIRACUSA</li>
                </ul>
            </div>

            <div className={styles.sectionCity}>
                <div className={styles.sectionHeader}>
                    <h1>experience.data</h1>
                    <Menu />
                </div>
                <div className={styles.sectionMain}>
                    <div className={styles.sectionBlock}>
                        <h3>LOREM IPSUM</h3>
                        <p>Margherita risolve conflitti</p>
                    </div>
                    <div className={styles.sectionCard}>
                        <CardExperience />
                        <CardExperience />
                        <CardExperience />
                    </div>
                </div>
            </div>

        </div >
    )
}

export default Experience;