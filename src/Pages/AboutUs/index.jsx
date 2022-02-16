import styles from "./AboutUs.module.scss";

const AboutUs = () => {
  return (
    <div className={styles.containerBase}>


      <div className={styles.containerBaseTwo}>
        <div className={styles.containerOne}>
          <h3>About us</h3>
          <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
            doloribus accusantium nihil. Velit, reiciendis quos veritatis
            dolores, alias, consequatur nisi repellat aliquid aspernatur natus
            odit accusantium omnis! Ratione, eum tenetur! Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Incidunt ea quidem dicta ipsam
            explicabo minus earum neque quisquam! A similique rerum nulla
            repellendus at necessitatibus reprehenderit sequi, perspiciatis sit
            quam! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Excepturi aliquid neque itaque! Eaque, quasi quisquam qui expedita,
            voluptates consectetur perspiciatis dolore iusto ut fuga enim
            reprehenderit neque culpa consequatur blanditiis?
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            veniam alias facere labore eligendi? Illum delectus beatae excepturi
            explicabo in magnam, eligendi enim voluptatem deleniti soluta
            accusamus possimus dignissimos molestiae!
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
            from ‘ Ddocu. You can unsubscribe at any time.
          </p>
        </form>
      </div>
    </div>
  );
};

export default AboutUs;
