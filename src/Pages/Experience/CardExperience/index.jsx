import styles from "./CardExperience.module.scss";

const CardExperience = () => {
    return (
        <div className={styles.card}>
            
            <div className={styles.description}>
                <img src={"https://images.unsplash.com/photo-1508144753681-9986d4df99b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" }></img>
                <h4>Lorem Ipsum</h4>
                <p>Parliamo di Palazzo Alliata di Pietratagliata, una delle più significative dimore quattrocentesche della città, che apre le porte per ben 4 visite esclusive da febbraio a maggio, in naturale continuità con il RestArt, il festival che la scorsa estate ha aperto in notturna alcuni dei siti culturali più belli e più importanti della città.</p>
                
            </div>
        </div>
    )
}

export default CardExperience;