import styles from "./DiscoverSelect.module.scss"



const DiscoverSelect = () => {




    return (

        <>
            <form className={styles.selectContainer}>
                <label> Inserisci la tua città: </label>
                <select className={styles.selectCity}>

                    <option value="1">City1</option>
                    <option value="2">City2</option>
                    <option value="3">City3</option>
                    <option value="4">City4</option>
                    <option value="5">City5</option>

                </select>
            </form>
        </>

    )

}




export default DiscoverSelect;