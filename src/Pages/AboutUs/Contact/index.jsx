import {AiFillGithub,AiFillLinkedin} from "react-icons/ai"

import styles from "./Contact.module.scss"

const Contact = (props) => {

    return (

        <>
        
        <div className={styles.contact}>
        
        <h3>{props.name}</h3>

        <div className={styles.contactUs}>

            <a href={props.linkGit}>
            <AiFillGithub />
          </a>
           <a href={props.linkLi}>
            <AiFillLinkedin />
            </a>

        </div>
            
        </div>
        
        
        
        
        
        </>
    )
}

export default Contact;