import styles from "./CardExperience.module.scss";

const CardExperience = ({ handleOpen, event }) => {

   
    return (
        <div className={styles.card} onClick={() => handleOpen(event.uuid)}>

            <div className={styles.description}>
                <div className={styles.img_border} style={{backgroundImage:`url(${event.cover_image_url})`}}>
                {/* <img src={event.cover_image_url}></img> */}

                </div>
                <div>
                <h3>{event.title}</h3>
                <p>{event.description}</p>

                </div>

            </div>
        </div>
    )
}

export default CardExperience;