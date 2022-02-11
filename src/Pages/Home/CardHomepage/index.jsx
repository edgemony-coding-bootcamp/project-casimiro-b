import styles from "./CardHomepage.module.scss"


const CardHomepage = ({title, descriptioncity, imagecity}) => {

    return ( <div className={styles.container}>



        <div className={styles.CardHomepage} style= {{backgroundImage: `url(${imagecity})`}}>  
           
            <div className={styles.opacity}></div>

            <div className={styles.textcard} > 
            
            <h3>{title}</h3>
            <p>{descriptioncity}</p>
            
            </div>

        </div>
        
        
        
        
        </div>
    )
}


export default CardHomepage;