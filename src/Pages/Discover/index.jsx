import DiscoverCard from "./DiscoverCard";
import { FETCH_ALL_DATA } from "../../store/action";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Discover.module.scss";

import DiscoverSelect from "./DiscoverSelect";
import DiscoverText from "./DiscoverText";
import DiscoverMenu from "../../Components/Menu";

import Modal from "./Modal";

const Discover = () => {
  const dispatch = useDispatch();
  const [author, setAuthor] = useState("All");

  const [popular, setPopular] = useState([]);

  const [favorite, setFavorite] = useState([]);

  const [reccomended, setReccomended] = useState([]);

  const events = useSelector((state) => state.events);

  const [modalOpen, setModalOpen] = useState(false);

  const [isClicked, setIsClicked] = useState([])

  const handleOpen = (id) => {
    setIsClicked(events.find((idCard) => idCard.id === id));
    setModalOpen(true)
  }

  const handlePopular = () => {
    setPopular(events.filter((el) => (el.popular === true)));
    console.log(popular)
  }

  const handleFavorite = () => {
    setFavorite(events.filter((el) => (el.favorite === true)));
    console.log(favorite)
  }

  const handleReccomended = () => {
    setReccomended(events.filter((el) => (el.recommended === true)));
    console.log(reccomended)
  }

  const handleClose = () => {
    setModalOpen(false)
    setIsClicked([]);
  }


  const sortingText = (e) => setAuthor(e.target.value);

  useEffect(() => {
    dispatch(FETCH_ALL_DATA());
  }, []);


  return (
    <div className="wrapperPage">
      {modalOpen && <Modal event={isClicked} handleClose={handleClose} />}
      <div className={styles.discoverContOne}>
        <div className={styles.discoverElementOne}>
          <DiscoverSelect sorting={sortingText} sort={author} />
          <div className={styles.mobileMenu}>
            <DiscoverMenu data={events} />
          </div>
          <DiscoverText />
        </div>

        <div className={styles.discoverElementTwo}>
          <div className={styles.discoverMenuContainer}>
            <DiscoverMenu handlePopular={handlePopular} handleFavorite={handleFavorite} handleRaccomended={handleReccomended} />
          </div>

          <div className={styles.containerCard}>
            {events
              ?.filter((el) => (author !== "All" ? el.city === author : el))
              .sort((a, b) => a.date > b.date ? 1 : -1)
              .map((event, index) => (
                <div key={index}>
                  <DiscoverCard
                    key={index}
                    handleOpen={handleOpen}
                    event={event}
                    id={event.id}
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
