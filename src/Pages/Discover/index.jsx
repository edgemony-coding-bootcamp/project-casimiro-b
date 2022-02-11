import DiscoverCard from "./DiscoverCard";
import { FETCH_ALL_DATA } from '../../store/action';
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../../Tools/discover.json";
import styles from "./Discover.module.scss";

import DiscoverSelect from "./DiscoverSelect";
import DiscoverText from "./DiscoverText";
import DiscoverMenu from "../../Components/Menu";

import Modal from "./Modal";

// const data = require("../../Tools/discover.json");

const Discover = () => {
  const dispatch = useDispatch();
  // const [card, setCard] = useState();
  const [author, setAuthor] = useState("All");

  const events = useSelector(state => state.events);
  console.log(events)

  const [modalOpen, setModalOpen] = useState(false);

  const OpenModalFunc = () => {
    setModalOpen(!modalOpen);
  };

  const sortingText = (e) => setAuthor(e.target.value);
  const getData = () => { };
  useEffect(() => {
    dispatch(
      FETCH_ALL_DATA()
    )
    // setCard(data);
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
          {modalOpen && <Modal setOpenModal={setModalOpen} />}
        </div>

        <div className={styles.discoverElementTwo}>
          <div className={styles.discoverMenuContainer}>
            <DiscoverMenu />
          </div>
          <div className={styles.containerCard}>
            {events
              ?.filter((el) => (author != "All" ? el.city === author : el))
              .map((item, index) => (
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
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
