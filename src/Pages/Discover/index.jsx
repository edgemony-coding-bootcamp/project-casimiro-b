import DiscoverCard from "./DiscoverCard";
import { useState, useEffect } from "react";
import "../../Tools/discover.json";
import styles from "./Discover.module.scss";

import DiscoverSelect from "./DiscoverSelect";
import DiscoverText from "./DiscoverText";
import DiscoverMenu from "./DiscoverMenu";

import Modal from "./Modal";

const data = require("../../Tools/discover.json");

const Discover = () => {

  const [card, setCard] = useState();

  const [modalOpen, setModalOpen] = useState(false);

  const OpenModalFunc = () => {
      setModalOpen(!modalOpen);
  }

  useEffect(() => {
    setCard(data);
    console.log(data);
  }, []);

  return (
    <div className="wrapperPage">
      <div className={styles.discoverContOne}>
        <div className={styles.discoverElementOne}>
          <DiscoverSelect />
          <DiscoverText />
        </div>

        <div className={styles.discoverElementTwo}>
          <DiscoverMenu />
        </div>

        <div className={styles.containerCard}>
          {card?.map((item, index) => (
            <div key={index} onClick={OpenModalFunc}>
              <DiscoverCard
                key={index}
                title={item.title}
                description={item.description}
                price={item.price}
                icon={item.icon}
                image={item.image}
                date={item.date}
              />
               {modalOpen && <Modal setOpenModal={setModalOpen}/>}
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default Discover;
