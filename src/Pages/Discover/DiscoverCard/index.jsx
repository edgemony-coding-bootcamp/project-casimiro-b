import styles from './DiscoverCard.module.scss';

const DiscoverCard = ({ event, handleOpen }) => {

    const date = new Date(event.date)

    return (
        <div className={styles.discoverCard} onClick={() => handleOpen(event.id)}>
            <div className={styles.title}>
                <h2>{`${date.getDate()}/${date.getMonth()}`}</h2>
                <h4>{event.title}</h4>
                <img src={event.icon} alt={event.id} />
            </div>
            <div className={styles.description}>
                <img src={event.image} alt={event.title} />
                
            </div>
        </div>
    )
}

export default DiscoverCard;