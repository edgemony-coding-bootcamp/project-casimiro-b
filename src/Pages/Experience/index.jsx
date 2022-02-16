
import Menu from "../../Components/Menu";
import CardExperience from "./CardExperience";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from 'react';
import { FETCH_ALL_DATA_EXPERIENCE, FETCH_ALL_DATA_CARD } from "../../store/action";


import styles from "./Experience.module.scss";




const Experience = () => {

    const [cityId, setCityId] = useState(24);

    const dispatch = useDispatch();
    const experience = useSelector((state) => state.experience);
    const infoCity = useSelector((state) => state.card);

    const info = infoCity.filter(el => el.id == cityId)

    useEffect(() => {
        dispatch(FETCH_ALL_DATA_EXPERIENCE(cityId));
        dispatch(FETCH_ALL_DATA_CARD());
    }, [cityId]);

    // console.log(experience.data[0].city.name);
    // console.log(image[0].imagecity)
    const ImageStyle = {
        hero: {
            backgroundImage: `url(${info[0]?.imagecity})`,
            objectFit: "cover"
        }
    }


    return (

        <div>

            <div className={styles.heroMain}>
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
                    <h1>{
                        cityId === 24 && "Palermo" ||
                        cityId === 15 && "Catania" ||
                        cityId === 572 && "Messina" ||
                        cityId === 587 && "Trapani" ||
                        cityId === 265 && "Agrigento" ||
                        cityId === 147 && "Siracusa"
                    }</h1>
                    <Menu />
                </div>
                <div className={styles.sectionMain}>
                    <div className={styles.sectionBlock} style={ImageStyle.hero}>
                        <div className={styles.sectionBlock_text}>
                            <h3>{info[0]?.title}</h3>
                            <p>{info[0]?.description}</p>
                        </div>
                    </div>
                    <div className={styles.sectionCard}>
                        {experience.data?.map((item, index) => (
                            <CardExperience key={index} image={item.cover_image_url} title={item.title} description={item.description} />
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Experience;