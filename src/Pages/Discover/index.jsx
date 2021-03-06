import DiscoverCard from "./DiscoverCard";
import { FETCH_ALL_DATA, ADD_CART } from "../../store/action";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Discover.module.scss";
import DiscoverSelect from "./DiscoverSelect";
import DiscoverText from "./DiscoverText";
import DiscoverMenu from "../../Components/Menu";

import Modal from "../../Components/Modal";
import Banner from "../../Components/Banner";

const Discover = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const [author, setAuthor] = useState("Tutti gli eventi");
  const [popular, setPopular] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const [reccomended, setReccomended] = useState(false);
  const events = useSelector((state) => state.events);
  const [modalOpen, setModalOpen] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [isClicked, setIsClicked] = useState([]);

  // const match = useMatch("eventi/:id");

  const handleOpen = (id) => {
    setIsClicked(events.find((idCard) => idCard.id === id));
    setModalOpen(true);
  };

  const handlePopular = () => {
    setReccomended(false);
    setFavorite(false);
    setPopular(!popular);
  };

  const handleFavorite = () => {
    setReccomended(false);
    setPopular(false);
    setFavorite(!favorite);
  };

  const handleReccomended = () => {
    setPopular(false);
    setFavorite(false);
    setReccomended(!reccomended);
  };

  const handleClose = () => {
    setModalOpen(false);
    setIsClicked([]);
  };

  const sortingText = (e) => setAuthor(e.target.value);

  const addToCart = () => {

    if (cart.length === 0) {
      dispatch(
        ADD_CART({
          id: `${isClicked.id}`,
          image: `${isClicked.image}`,
          title: `${isClicked.title}`,
          price: `${isClicked.price}`,
          quantity: 1,
        })
      );
      setShowBanner(true);
      setTimeout(() => {
        setShowBanner(false);
      }, 2000);
    } else {
      if (cart.some((cart) => cart.title === isClicked.title)) {
      } else {
        dispatch(
          ADD_CART({
            id: `${isClicked.id}`,
            image: `${isClicked.image}`,
            title: `${isClicked.title}`,
            price: `${isClicked.price}`,
            quantity: 1,
          })
        );
        setShowBanner(true);
        setTimeout(() => {
          setShowBanner(false);
        }, 2000);
      }
    }
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    dispatch(FETCH_ALL_DATA());
  }, []);

  return (
    <div>
      {modalOpen && (
        <Modal
          event={isClicked}
          discover={true}
          image={isClicked.image}
          title={isClicked.title}
          price={isClicked.price}
          description={isClicked.description}
          city={isClicked.city}
          handleClose={handleClose}
          Add={addToCart}
        />
      )}
      {showBanner && <Banner />}

      <div className={styles.discoverContOne}>
        <div className={styles.discoverElementOne}>
          <DiscoverSelect sorting={sortingText} sort={author} />
          <div className={styles.mobileMenu}>
            <DiscoverMenu
              popular={popular}
              favorite={favorite}
              reccomended={reccomended}
              handlePopular={handlePopular}
              handleFavorite={handleFavorite}
              handleRaccomended={handleReccomended}
            />
          </div>

          <DiscoverText author={author} />
        </div>

        <div className={styles.discoverElementTwo}>
          <div className={styles.discoverMenuContainer}>
            <DiscoverMenu
              popular={popular}
              favorite={favorite}
              reccomended={reccomended}
              handlePopular={handlePopular}
              handleFavorite={handleFavorite}
              handleRaccomended={handleReccomended}
            />
          </div>

          <div className={styles.containerCard}>
            <div className={favorite ? styles.containerCard : styles.favorite}>
              {events
                ?.filter((el) => el.favorite === true)
                .filter((el) =>
                  author !== "Tutti gli eventi" ? el.city === author : el
                )
                .sort((a, b) => (a.date > b.date ? 1 : -1))
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
            <div className={popular ? styles.containerCard : styles.popular}>
              {events
                ?.filter((el) => el.popular === true)
                .filter((el) =>
                  author !== "Tutti gli eventi" ? el.city === author : el
                )
                .sort((a, b) => (a.date > b.date ? 1 : -1))
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
            <div
              className={
                reccomended ? styles.containerCard : styles.reccomended
              }
            >
              {events
                ?.filter((el) => el.recommended === true)
                .filter((el) =>
                  author !== "Tutti gli eventi" ? el.city === author : el
                )
                .sort((a, b) => (a.date > b.date ? 1 : -1))
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
            <div
              className={
                favorite || reccomended || popular
                  ? styles.allCard
                  : styles.containerCard
              }
            >
              {events
                ?.filter((el) =>
                  author !== "Tutti gli eventi" ? el.city === author : el
                )
                .sort((a, b) => (a.date > b.date ? 1 : -1))
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
    </div>
  );
};

export default Discover;
