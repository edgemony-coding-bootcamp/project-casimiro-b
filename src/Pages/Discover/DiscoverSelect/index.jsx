import styles from "./DiscoverSelect.module.scss";

const DiscoverSelect = ({ sort, sorting }) => {
  return (
    <>
      <form className={styles.selectContainer}>
        <label> Inserisci la tua città: </label>
        <select onChange={sorting} className={styles.selectCity} value={sort}>
          <option value="All"> All </option>
          <option value="Palermo"> Palermo </option>
          <option value="Catania"> Catania </option>
          <option value="Messina"> Messina </option>
          <option value="Agrigento"> Agrigento </option>
          <option value="Caltanissetta"> Caltanissetta </option>
          <option value="Siracusa"> Siracusa </option>
        </select>
      </form>
    </>
  );
};

export default DiscoverSelect;
