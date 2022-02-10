import DiscoverCard from "./DiscoverCard";
import { useState, useEffect } from "react";
import "../../Tools/discover.json";
import styles from "./Discover.module.scss";

import DiscoverSelect from "./DiscoverSelect";
import DiscoverText from "./DiscoverText";
import DiscoverMenu from "./DiscoverMenu";



const Discover = () => {


    

  const [card, setCard] = useState();
  const [author, setAuthor] = useState("");


 const data = require("../../Tools/discover.json");

  const sortingText = (e) => {
    console.log("ciao magghe");
    const sorting = e.target.value;
    setAuthor(() => {
      if (sorting === "Catania") {

        return data.city
      }
    });
  };

  useEffect(() => {
    setCard(data);
    console.log(data);
  }, []);

  return (
    <div className="wrapperPage">
      <div className={styles.discoverContOne}>
        <div className={styles.discoverElementOne}>
          <DiscoverSelect sorting={sortingText} sort={author} />

          <div className={styles.mobileMenu}>
            <DiscoverMenu />
          </div>
          <DiscoverText />
        </div>

        <div className={styles.discoverElementTwo}>
          <DiscoverMenu />
        </div>

        <div className={styles.containerCard}>
          {card?.map((item, index) => (
            <DiscoverCard
              key={index}
              title={item.title}
              description={item.description}
              icon={item.icon}
              image={item.image}
              date={item.date}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Discover;
