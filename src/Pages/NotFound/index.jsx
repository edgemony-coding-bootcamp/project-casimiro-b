import { Link } from "react-router-dom";
import styles from "./NotFound.module.scss";

const NotFound = () => {
  return (
    <div className={styles.main}>
      <div className={styles.main_image}></div>
      <div className={styles.main_title}>
        <h1>404</h1>
        <h4>Pagina non trovata.</h4>
        <div className={styles.subText}>
          <p>Ma unni vai..</p>
          <Link to="/"><button className={styles.btn}>Torna alla Home</button></Link>
        </div>
      </div>
    </div>
  );
};


export default NotFound;