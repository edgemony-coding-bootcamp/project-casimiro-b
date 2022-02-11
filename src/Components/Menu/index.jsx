import styles from "./Menu.module.scss"

const DiscoverMenu = () => {
    return (

            <ul className={styles.menuItems}>
                <li>PREFERITI</li>
                <li>POPOLARI</li>
                <li>CONSIGLIATI</li>
            </ul>

    )
}


export default DiscoverMenu;