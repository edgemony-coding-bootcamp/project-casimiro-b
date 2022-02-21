import styles from './ButtonModal.module.scss';

const ButtonModal = (props) => {
    return (
        <button className={styles.modalBtn} onClick={props.Add}>{props.text}</button>
    )
}


export default ButtonModal;