import styles from "./CardExperience.module.scss";

const CardExperience = ({ image, title, description }) => {
    return (
        <div className={styles.card}>

            <div className={styles.description}>
                <img src={image}></img>
                <h4>{title}</h4>
                <p>{description}</p>

            </div>
        </div>
    )
}

export default CardExperience;