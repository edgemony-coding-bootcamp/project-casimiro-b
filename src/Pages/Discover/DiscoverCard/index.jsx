import styles from "./DiscoverCard.module.scss";

import { AiFillEye } from "react-icons/ai";

const DiscoverCard = ({ event, handleOpen }) => {
  const date = new Date(event.date);

  return (
    <div
      className={styles.discover_card}
      style={{ backgroundImage: `url(${event.image})` }}
    >
      <div className={styles.icon}>
          <img src={event.icon} alt={event.title} />
      </div>
      <div className={styles.description_container}>
        <div className={styles.title}>
          <h1>{event.title}</h1>
          <p>{`${date.getDate()}/${date.getMonth()}`}</p>
        </div>
        <div className={styles.btn_title}>
          <button onClick={() => handleOpen(event.id)}>
            <p>Scopri</p>

            {/* <AiFillEye /> */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiscoverCard;
