import AnchorLink from "react-anchor-link-smooth-scroll";
import Modal from "../../Components/Modal";
import CardExperience from "./CardExperience";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FETCH_ALL_DATA_EXPERIENCE,
  FETCH_ALL_DATA_CARD,
} from "../../store/action";

import styles from "./Experience.module.scss";

const Experience = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const [isClicked, setIsClicked] = useState([]);

  const [cityId, setCityId] = useState(24);

  console.log(cityId)

  const dispatch = useDispatch();
  const experience = useSelector((state) => state.experience);
  const infoCity = useSelector((state) => state.card);

  const info = infoCity.filter((el) => el.id == cityId);

  const handleOpen = (uuid) => {
    setIsClicked(experience.data.find((idCard) => idCard.uuid === uuid));
    setModalOpen(true);
  };
  console.log(isClicked);

  const handleClose = () => {
    setModalOpen(false);
    setIsClicked([]);
  };

  useEffect(() => {
    dispatch(FETCH_ALL_DATA_EXPERIENCE(cityId));
    dispatch(FETCH_ALL_DATA_CARD());
  }, [cityId]);

  // console.log(experience.data[0].city.name);
  // console.log(image[0].imagecity)
  const ImageStyle = {
    hero: {
      backgroundImage: `url(${"https://images.unsplash.com/photo-1576582356030-846623155e47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"})`,
      objectFit: "cover",
    },
  };

  return (
    <div className={styles.prova_container}>
      {modalOpen && (
        <Modal
          event={isClicked}
          discover={false}
          image={isClicked.cover_image_url}
          title={isClicked.title}
          price={isClicked.retail_price.formatted_iso_value}
          description={isClicked.description}
          city={isClicked.city.name}
          handleClose={handleClose}
        />
      )}

      <div className={styles.container_hero}>
        <div className={styles.heroMain}>
          <div className={styles.title}>
            <h1>
              Your Experience,
              <br />
              your life.
            </h1>
            <p>Le migliori esperienze selezionate per te.</p>
          </div>
          <div className={styles.cityList}>
            <ul>
              <AnchorLink href="#city">
                <li onClick={() => setCityId(24)}>PALERMO</li>{" "}
              </AnchorLink>

              <AnchorLink href="#city">
                <li onClick={() => setCityId(15)}>CATANIA</li>{" "}
              </AnchorLink>

              <AnchorLink href="#city">
                <li onClick={() => setCityId(572)}>MESSINA</li>{" "}
              </AnchorLink>

              <AnchorLink href="#city">
                <li onClick={() => setCityId(587)}>TRAPANI</li>{" "}
              </AnchorLink>

              <AnchorLink href="#city">
                <li onClick={() => setCityId(265)}>AGRIGENTO</li>{" "}
              </AnchorLink>

              <AnchorLink href="#city">
                <li onClick={() => setCityId(147)}>SIRACUSA</li>{" "}
              </AnchorLink>
            </ul>
          </div>
        </div>
      </div>

      <div id="city" className={styles.container_two}>
        <div className={styles.sectionCity}>
          <div className={styles.sectionHeader}>
            <h1>{info[0]?.title}.</h1>
            <Link to={`/${cityId}`}>
            <button>scopri di più sulla città</button>
            </Link>
          </div>

          <div className={styles.sectionCard}>
            {experience.data?.map((item, index) => (
              <CardExperience
                key={index}
                uuid={item.uuid}
                event={item}
                handleOpen={handleOpen}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
