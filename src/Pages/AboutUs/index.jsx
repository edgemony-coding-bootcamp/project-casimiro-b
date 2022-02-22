import styles from "./AboutUs.module.scss";

const AboutUs = () => {
  return (
    <div className={styles.containerBase}>
      <div className={styles.containerBaseTwo}>
        <div className={styles.containerOne}>
          
          <h2>
            'Ddocu è una parola proveniente dal dialetto siciliano, in italiano
            vuol dire "lì".
          </h2>
          <p>
            Siamo cinque ragazzi siciliani che nel 2022 hanno deciso di creare
            una startup, avete presente il classico salto nel vuoto? Ecco,
            questo è quello che abbiamo fatto, una stanza, mille idee e tanto
            coraggio; da questa avventura è nata 'Ddocu e quella che prima era
            una scommessa, piano piano si è trasformata in una certezza.
          </p>

          <p>
            Il nostro obbiettivo è la valorizzazione del territorio, vogliamo
            condividere con voi la Sicilia autentica, farvi innamorare di questa
            terra così come lo siamo noi, innamorati di un'isola, bella e
            dannata, profumata e fiera, vi accompagneremo lungo il vostro
            viaggio consigliandovi i luoghi più suggestivi, i luoghi simbolo
            della Sicilia, ma ve ne faremo scoprire anche gli angoli più
            nascosti e silenziosamente affascinanti.
          </p>
          <p className={styles.quote}>
            "Quegli odori di alga seccata al sole e di capperi e di fichi maturi
            <br></br>
            non li ritroverà mai da nessuna parte; quelle coste arse e
            profumate,<br></br>quei marosi ribollenti, quei gelsomini che si sfaldano al
            sole." <br></br> - Dacia Maraini
          </p>
        </div>

        <div className={styles.containerTwo}></div>
      </div>
      <div className={styles.newsletter}>
        <form>
          <h3>Join our newsletter</h3>
          <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit?</h4>

          <input type="email" placeholder="Inserisci la tua email" />

          <button>Submit</button>

          <p className={styles.privacy}>
            By signing up you agree to our User Agreement (including the class
            action waiver and arbitration provisions), our Privacy Policy &
            Cookie Statement and to receive marketing and account-related emails
            from ‘ Ddocu. <br /> You can unsubscribe at any time.
          </p>
        </form>
      </div>
    </div>
  );
};

export default AboutUs;
