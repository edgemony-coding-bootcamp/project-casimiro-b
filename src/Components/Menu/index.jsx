import styles from "./Menu.module.scss"
import { FETCH_ALL_DATA } from '../../store/action';
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";


const DiscoverMenu = () => {
    const dispatch = useDispatch();
    const events = useSelector(state => state.events);


    useEffect(() => {
        dispatch(
            FETCH_ALL_DATA()
        )
    }, []);

    return (

        <ul className={styles.menuItems}>
            <li>PREFERITI</li>
            <li>POPOLARI</li>
            <li>CONSIGLIATI</li>
        </ul>

    )
}

export default DiscoverMenu;