import styles from "./CardExperience.module.scss";

const CardExperience = ({ handleOpen, event }) => {
    return (
        <div className={styles.card} onClick={() => handleOpen(event.uuid)}>

            <div className={styles.description}>
                <img src={event.cover_image_url}></img>
                <h3>{event.title}</h3>
                <p>{event.description}</p>

            </div>
        </div>
    )
}

export default CardExperience;