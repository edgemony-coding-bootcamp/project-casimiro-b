import styles from "./AboutUs.module.scss";

import Contact from "./Contact/index.jsx";

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
            della Sicilia e gli eventi principali, ma ve ne faremo scoprire
            anche gli angoli più nascosti e silenziosamente affascinanti.
          </p>
          <p className={styles.quote}>
            "Quegli odori di alga seccata al sole e di capperi e di fichi maturi
            <br></br>
            non li ritroverà mai da nessuna parte; quelle coste arse e
            profumate,<br></br>quei marosi ribollenti, quei gelsomini che si
            sfaldano al sole." <br></br> - Dacia Maraini
          </p>
        </div>

        <div className={styles.containerTwo}></div>
      </div>

      <div className={styles.newsletter}>

        <h2>Contattaci</h2>
        <h3 className={styles.team}>Il team di 'Ddocu a tua disposizione.</h3>

        <Contact
          name="Margherita Grasso"
          linkGit="https://github.com/marghherita"
          linkLi="https://www.linkedin.com/in/margheritagrasso/"
        />

        <Contact
          name="Giulia Notaro"
          linkGit="https://github.com/giulianotaro"
          linkLi="https://www.linkedin.com/in/giulianotaro/"
        />

        <Contact
          name="Chiara Caruso"
          linkGit="https://github.com/ChiaCaruso"
          linkLi="https://www.linkedin.com/in/chiaracaruso/"
        />

        <Contact
          name="Andrea Alunni Guiducci"
          linkGit="https://github.com/AndreaAlunniGuiducci"
          linkLi="https://www.linkedin.com/in/andrea-alunni-guiducci-203786216/"
        />

        <Contact
          name="Giuseppe Gallo Cassarino"
          linkGit="https://github.com/giuseppegallocassarino/giuseppegallocassarino"
          linkLi="https://www.linkedin.com/in/giuseppe-gallo-cassarino-b03510155/"
        />
      </div>
    </div>
  );
};

export default AboutUs;
