import styles from './TextModal.module.scss'

const TextModal = (props) => {
    return (
        <div className={styles.textComponent}>

            <h3>{props.title}</h3>
            {props.currencySimbol ? <p>{props.text} €</p> : <p>{props.text}</p>  }


        </div>
        
    )
}

export default TextModal;