import styles from "./Menu.module.scss"

const DiscoverMenu = ({ handleFavorite, handlePopular, handleRaccomended, popular, favorite, reccomended }) => {

    return (

        <ul className={styles.menuItems}>
            {/* <li className={favorite ? styles.active : ''} onClick={handleFavorite}>PREFERITI</li> */}
            <li className={popular ? styles.active : ''} onClick={handlePopular}>POPOLARI</li>
            <li className={reccomended ? styles.active : ''} onClick={handleRaccomended}>CONSIGLIATI</li>
        </ul>

    )
}

export default DiscoverMenu;