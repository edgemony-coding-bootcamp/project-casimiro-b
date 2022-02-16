import styles from './ButtonModal.module.scss';

const ButtonModal = (props) => {
    return (
        <button className={styles.modalBtn}>{props.text}</button>
    )
}


export default ButtonModal;