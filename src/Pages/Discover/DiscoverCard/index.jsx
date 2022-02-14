import styles from './DiscoverCard.module.scss';

const DiscoverCard = ({ event, handleOpen }) => {

    return (
        <div className={styles.discoverCard}  onClick={() => handleOpen(event.id)}>
            <div className={styles.title}>
                <h2>{event.date}</h2>
                <h4>{event.title}</h4>
                <img src={event.icon} alt={event.id} />
            </div>
            <div className={styles.description}>
                <img src={event.image} alt={event.title} />
                <p>{event.description}</p>
            </div>
        </div>
    )
}

export default DiscoverCard;