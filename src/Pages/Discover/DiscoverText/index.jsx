import styles from "./DiscoverText.module.scss";

const DiscoverText = (props) => {


  return (
    <div className={styles.textContainer}>

      <h1>{props.author}.</h1>

      <p>

       All'interno di questa sezione troverai tutti gli eventi previsti nella città da te seleziona tramite il menù presente qui sopra.
       In Sicilia è molto comune organizzare eventi all'aperto grazie al clima spesso favorevole, non mancano però quelli al chiuso, i musei ed i teatri più belli dell'Isola sono pronti ad accogliervi.

      </p>

      <p className={styles.quote}>


        "L'arte scuote dall'anima la polvere accumulata nella vita di tutti i giorni."



        <br></br>
        <span>- P.Picasso</span>
        
      </p>

    

    </div>
  );
};

export default DiscoverText;
