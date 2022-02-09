import styles from './TextComponent.module.scss'

const TextComponent = (props) => {
    return (
        <div className={styles.textComponent}>

            <h3>{props.title}</h3>
            <p>{props.text}</p>

        </div>
        
    )
}

export default TextComponent;