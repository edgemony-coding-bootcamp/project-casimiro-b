import { useMatch, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { FETCH_ALL_DATA_CITIES } from "../../store/action";

import styles from "./City.module.scss";
const City = () => {
  const dispatch = useDispatch();

  const cities = useSelector((state) => state.cities);
  console.log(cities);

  const match = useMatch("/:id");

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
          <h1>{cities.city}, <br /> Sicily, Italy.</h1>
        </div>
        <div>
        
        </div>
      </div>
      <div className={styles.containerFour}>
      <div className={styles.containerTwo}>
        <p className={styles.coords}>{cities.coord}</p>
        <h1>{cities.title}</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem
          explicabo incidunt molestiae similique alias a aut obcaecati magnam
          numquam at. Voluptatibus aliquid blanditiis ea sit commodi sapiente
          eligendi, voluptates cumque.
        </p>
        <div>
          <h2>QUANDO ANDARE:</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quod
            aliquam placeat reprehenderit sint optio dolorum dicta, odit
            officiis eveniet eos? Alias laudantium sint unde voluptatibus itaque
            labore, fuga sit.
          </p>
        </div>
        <div>
          <h2>IN QUANTI GIORNI VISITARLA:</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
            fuga quas qui saepe perspiciatis eligendi ut, officiis ducimus,
            explicabo velit esse ea. Ipsam explicabo dolorum sit, quas in
            eveniet? Facilis?
          </p>
        </div>
        <div>
          <h2>COSA VEDERE:</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
            soluta beatae! Ut voluptate iure nihil? Voluptatem, iusto
            dignissimos fuga architecto voluptatibus reprehenderit voluptate
            nulla et repellendus labore, eos unde iure.
          </p>
        </div>
      </div>
      <div className={styles.containerThree}>
      <Link to={"/discover"}> 
        <div className={styles.citiesEvents}>
          <h2>
            Gli eventi in <br /> città
          </h2>
        </div>
        </Link>
        <Link to={"/experience"}> 
        <div className={styles.citiesExperience}>
          <h2>Esperienze <br /> da vivere</h2>
        </div>
        </Link>
      </div>
      </div>

    </div>
  );
};

export default City;
