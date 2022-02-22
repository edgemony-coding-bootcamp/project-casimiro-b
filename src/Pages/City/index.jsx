import { useMatch, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { FETCH_ALL_DATA_CITIES } from "../../store/action";

import styles from "./City.module.scss";
const City = () => {
  const dispatch = useDispatch();

  const cities = useSelector((state) => state.cities);
  console.log(cities);

  const match = useMatch("city/:id");

  console.log(match);

  useEffect(() => {
    dispatch(FETCH_ALL_DATA_CITIES(match.params.id));
  }, []);

  return (
    <div className={styles.containerCities}>
      <div
        className={styles.containerOne}
        style={{ backgroundImage: `url(${cities.image})` }}
      >
        <div className={styles.cityTitle}>
          <h1>
            {cities.city}, <br /> Sicily, Italy.
          </h1>
        </div>
        <div></div>
      </div>
      <div className={styles.containerFour}>
        <div className={styles.containerTwo}>
          <p className={styles.coords}>{cities.coord}</p>
          <h1>{cities.title}</h1>
          <p>{cities.description}</p>
          <div>
            <h2>QUANDO ANDARE:</h2>
            <p>{cities.when}</p>
          </div>
          <div>
            <h2>IN QUANTI GIORNI VISITARLA:</h2>
            <p>{cities.time}</p>
          </div>
          <div>
            <h2>COSA VEDERE:</h2>
            <p>{cities.place}</p>
          </div>
        </div>
        <div className={styles.containerThree}>
          <Link to={`/eventi/${cities.id}`}>
            <div className={styles.citiesEvents}>
              <h2>
                Gli eventi in <br /> città
              </h2>
            </div>
          </Link>
          <Link to={"/esperienze"}>
            <div className={styles.citiesExperience}>
              <h2>
                Esperienze <br /> da vivere
              </h2>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default City;
