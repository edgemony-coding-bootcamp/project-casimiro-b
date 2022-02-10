import TextModal from "./TextModal/index";
import InputModal from "./InputModal";
import ButtonModal from "./ButtonModal";

import { MdClose } from "react-icons/md";

import styles from "./Modal.module.scss";

const Modal = ({ setOpenModal }) => {
  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContainer}>
        <button className={styles.modalCloseBtn}
          className={styles.modalCloseBtn}
          onClick={() => setOpenModal(false)}
        >
          <MdClose />
        </button>
        {/* PARTE 1 - IMMAGINE */}
        <img
          className={styles.modalImg}
          src="https://images.unsplash.com/photo-1563693267403-111c5d856e49?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt=""
        />
        {/* PARTE 2 - TITOLO/DATA MODALE */}
        <div className={styles.modalTitle}>
          <h1>Anon comes in a fellow, takes off his crown, kisses it, pours poison in the king's ears, and exit.</h1>
        </div>
        {/*PARTE 3 - TESTI/DESCRIZIONE - PREZZO - LOCATION */}
        <div className={styles.modalBodyContainer}>
          <div className={styles.modalTextContainer}>
            <div className={styles.modalTextDescription}>
              <TextModal
                title="Descrition"
                text="Anon comes in a fellow, takes off his crown, kisses it, pours poison in the king's ears, and exit. The Queen returns, finds the King dead, and makes passionate action. The Poisoner with some three or four Mutes, comes in again, seeming to lament with her. 
                    Anon comes in a fellow, takes off his crown, kisses it, pours poison in the king's ears, and exit. The Queen returns, finds the King dead, and makes passionate action. The Poisoner with some three or four Mutes, comes in again, seeming to lament with her. "
              />
            </div>
            <div className={styles.modalTextComponent}>
              <TextModal title="Price" text="20€" />
              <TextModal title="Date" text="16/02" />
              <TextModal title="Location" text="Catania" />
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
      </div>
    </div>
  );
};

export default Modal;
