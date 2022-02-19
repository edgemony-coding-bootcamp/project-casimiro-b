import styles from "./CardExperience.module.scss";

const CardExperience = ({ handleOpen, event }) => {

    console.log(event.verticals)
  return (
    <div
      className={styles.experience_card}
      style={{ backgroundImage: `url(${event.cover_image_url})` }}
      onClick={() => handleOpen(event.uuid)}
    >
    
      <div className={styles.experience_type}>
          <p>{event.verticals[0].name}</p>
      </div>
      <div className={styles.description_container}>
        <div className={styles.title}>
        <h1>{event.title}</h1>
        <p></p>
          {/* <p>{event.description}</p> */}
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

export default CardExperience;
