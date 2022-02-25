import { FaFacebookF } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { AiOutlineTwitter } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import styles from "./Footer.module.scss";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.footerSocial}>
                <FaFacebookF className={styles.social_icon} />
                <FiInstagram className={styles.social_icon} />
                <AiOutlineTwitter className={styles.social_icon} />
            </div>
            <div className={styles.footerText}>
                <p>&copy; Copyright {year} ' Ddocu</p>
                <p>All Rights Reserved - 'DdocuStudio</p>
                <h4>hi@ddocu.com</h4>
            </div>
            <div className={styles.footerContact}>

                <Link to="/AboutUs">
                <p>Contattaci</p>
                </Link>
                <p>Iscriviti</p>
                <p>Servizio Clienti</p>
            </div>
        </footer>
    );
};

export default Footer;