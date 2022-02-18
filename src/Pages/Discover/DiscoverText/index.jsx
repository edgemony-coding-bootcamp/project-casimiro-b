import styles from "./DiscoverText.module.scss";

const DiscoverText = () => {
  return (
    <div className={styles.textContainer}>

      <h1>Discover.</h1>

      <p>
        Anon comes in a fellow, takes off his crown, kisses it, pours poison in
        the king's ears, and exit. The Queen returns, finds the King dead, and
        makes passionate action.
      </p>

      <p className={styles.quote}>


        " The dead body is carried away. The Poisoner wooes the Queen with
        gifts; she seems loth and unwilling awhile, but in the end accepts his
        love."
        <br></br>
        <span>- R.Hollie</span>
        
      </p>

    

    </div>
  );
};

export default DiscoverText;
