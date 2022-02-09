import styles from './TextModal.module.scss'

const TextModal = (props) => {
    return (
        <div className={styles.textComponent}>

            <h3>{props.title}</h3>
            <p>{props.text}</p>

        </div>
        
    )
}

export default TextModal;