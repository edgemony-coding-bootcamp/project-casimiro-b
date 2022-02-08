import { FaFacebookF } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { AiOutlineTwitter } from 'react-icons/ai';

import styles from "./Footer.module.scss";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerText}>
                 <p>&copy; 'Ddocu</p>
                <p>ddocu@gmail.com</p>
            </div>
            <div className={styles.footerSocial}>
                <FaFacebookF className={styles.social_icon} />
                <FiInstagram className={styles.social_icon} />
                <AiOutlineTwitter className={styles.social_icon} />
            </div>
        </footer>
    );
};

export default Footer;