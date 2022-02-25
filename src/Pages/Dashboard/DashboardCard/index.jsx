import styles from "./DashboardCard.module.scss";

const DashboardCard = (props) => {
  return (
    <div className={styles.wrapperCard}>

      <h3>Username</h3>
      <p>{props.name}</p>

      <h3>Email</h3>
      <p>{props.email}</p>

      <p className={styles.cookies}>
        Possedendo un account accetti i nostri termini e condizioni, privacy e
        la nostra cookie policy.
      </p>
    </div>
  );
};

export default DashboardCard;
