import styles from "./DiscoverMenu.module.scss"

const DiscoverMenu = () => {
    return (
        <div className={styles.discoverList}>
            <ul className={styles.listItems}>
                <li>PREFERITI</li>
                <li>POPOLARI</li>
                <li>CONSIGLIATI</li>
            </ul>
        </div>
    )
}


export default DiscoverMenu;