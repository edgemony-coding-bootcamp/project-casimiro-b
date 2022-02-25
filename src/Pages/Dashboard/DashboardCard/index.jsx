import styles from "./DashboardCard.module.scss";

const DashboardCard = (props) => {
    return (
        <div className={styles.wrapperCard}>
            <label for="nome">Nome</label>
            <input type="text" name="nome" onChange={props.onChangeName} />

            <label for="cognome">Cognome</label>
            <input type="text" name="cognome" onChange={props.onChangeSurname} />

            <label for="email">Email</label>
            <input type="email" name="email" onChange={props.onChangeEmail} />

            <p>Possedendo un account accetti i nostri termini e condizioni, privacy e la nostra cookie policy.</p>
        </div>
    )
}

export default DashboardCard;