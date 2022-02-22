import styles from "./CardHomepage.module.scss"


const CardHomepage = ({title, imagecity}) => {

    return ( <div className={styles.container}>

        
         
            
           
             
           

        <div className={styles.CardHomepage} style={{backgroundImage: `url(${imagecity})`}}>  

            
         

           
            

        </div>
        
        
        <h3>{title}</h3>
        
        </div>
    )
}


export default CardHomepage;