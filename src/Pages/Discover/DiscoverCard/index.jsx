import styles from './DiscoverCard.module.scss';

const DiscoverCard = ({ date, title, icon, description, price, image }) => {

    return (
        <div className={styles.discoverCard}>
            <div className={styles.title}>
                <h2>{date}</h2>
                <h4>{title}</h4>
                <img src={icon} alt='prova' />
            </div>
            <div className={styles.description}>
                <img src={image} alt='prova' />
                <p>{description}</p>
                
            </div>
        </div>
    )
}

export default DiscoverCard;