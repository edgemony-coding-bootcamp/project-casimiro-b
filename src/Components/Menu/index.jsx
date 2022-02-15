import styles from "./Menu.module.scss"

const DiscoverMenu = ({ handleFavorite, handlePopular, handleRaccomended }) => {

    return (

        <ul className={styles.menuItems}>
            <li onClick={handleFavorite}>PREFERITI</li>
            <li onClick={handlePopular}>POPOLARI</li>
            <li onClick={handleRaccomended}>CONSIGLIATI</li>
        </ul>

    )
}

export default DiscoverMenu;