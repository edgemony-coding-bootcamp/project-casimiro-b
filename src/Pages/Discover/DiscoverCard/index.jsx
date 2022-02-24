import styles from "./DiscoverCard.module.scss";

const DiscoverCard = ({ event, handleOpen }) => {
  const date = new Date(event.date);

  return (
    <div
      className={styles.discover_card}
      style={{ backgroundImage: `url(${event.image})` }}
    >
      <div className={styles.icon}>
          <img src={event.icon} alt={event.title} />
          <p>{`${date.getDate()}/${date.getMonth()}`}</p>
      </div>
      <div className={styles.description_container}>
        <div className={styles.title}>
          <h1>{event.title}</h1>
          <p>{event.about}</p>
        </div>
        <div className={styles.btn_title}>
          <button onClick={() => handleOpen(event.id)}>
            <p>Scopri</p>

          </button>
        </div>
      </div>
    </div>
  );
};

export default DiscoverCard;
