import TextModal from "./TextModal/index";
import ButtonModal from "./ButtonModal";

import { MdClose } from "react-icons/md";

import styles from "./Modal.module.scss";

const Modal = ({ handleClose, event, discover, image, title, price, description, city, Add }) => {

  const date = new Date(event.date)


  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContainer}>
        <button
          className={styles.modalCloseBtn}
          onClick={handleClose}
        >
          <MdClose />
        </button>
        {/* PARTE 1 - IMMAGINE */}
        <img
          className={styles.modalImg}
          src={image}
          alt={title}
        />
        {/* PARTE 2 - TITOLO/DATA MODALE */}
        <div className={styles.modalTitle}>
          <h1>{title}</h1>
        </div>
        {/*PARTE 3 - TESTI/DESCRIZIONE - PREZZO - LOCATION */}
        <div className={styles.modalBodyContainer}>
          <div className={styles.modalTextContainer}>
            <div className={styles.modalTextDescription}>
              <TextModal title="Description" text={description} />
            </div>
            <div className={styles.modalTextComponent}>
              <TextModal title="Price" text={price} currencySimbol="true"/>
              {discover &&
                <TextModal title="Date" text={`${date.getDate()}/${date.getMonth()}`} />}
              <TextModal title="Location" text={city} />
            </div>
          </div>
        </div>
        {/* PARTE 4 - FORM */}
        <div className={styles.modalFormDiscover}>
          <div>
            <h3>Acquista Evento</h3>
          </div>
          <div className={styles.modalFormInput}>
            <ButtonModal text="Aggiungi al carrello" Add={Add} />
          </div>
        </div>
      </div>;
    </div>
  );
};

export default Modal;
