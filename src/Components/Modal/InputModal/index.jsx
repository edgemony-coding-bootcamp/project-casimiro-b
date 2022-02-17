import styles from "./InputModal.module.scss";

const InputModal = (props) => {
  return (
    <div className={styles.inputContainer}>

        <label className={styles.modalLabel} htmlFor="name">{props.text}</label>
        <input className={styles.modalInput} type={module.type} name="name" />

    </div>
  );
};

export default InputModal;
