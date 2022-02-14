import TextModal from "./TextModal/index";
import InputModal from "./InputModal";
import ButtonModal from "./ButtonModal";

import { useParams } from "react-router-dom";

import { MdClose } from "react-icons/md";

import styles from "./Modal.module.scss";

const Modal = ({ handleClose, event }) => {
  

  console.log("ciao modal");

  return (
    <div className={styles.modalBackground}>
          <div className={styles.modalContainer}>
            <button
              className={styles.modalCloseBtn}
              className={styles.modalCloseBtn}
              onClick={handleClose}
            >
              <MdClose />
            </button>
            {/* PARTE 1 - IMMAGINE */}
            <img
              className={styles.modalImg}
              src={event.image}
              alt={event.title}
            />
            {/* PARTE 2 - TITOLO/DATA MODALE */}
            <div className={styles.modalTitle}>
              <h1>{event.title}</h1>
            </div>
            {/*PARTE 3 - TESTI/DESCRIZIONE - PREZZO - LOCATION */}
            <div className={styles.modalBodyContainer}>
              <div className={styles.modalTextContainer}>
                <div className={styles.modalTextDescription}>
                  <TextModal title="Description" text={event.description} />
                </div>
                <div className={styles.modalTextComponent}>
                  <TextModal title="Price" text={event.price} />
                  <TextModal title="Date" text={event.date} />
                  <TextModal title="Location" text={event.city} />
                </div>
              </div>
            </div>
            {/* PARTE 4 - FORM */}
            <div className={styles.modalFormDiscover}>
              <div>
                <h3>Prenota Evento</h3>
              </div>

              <div className={styles.modalFormInput}>
                <InputModal type="text" text="Nome e Congnome" />
                <InputModal type="text" text="E-mail" />
                <ButtonModal text="Prenota" />
              </div>
            </div>
          </div>;
    </div>
  );
};

export default Modal;
