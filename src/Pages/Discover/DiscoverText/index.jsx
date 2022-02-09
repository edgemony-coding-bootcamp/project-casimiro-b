import styles from "./DiscoverText.module.scss";

const DiscoverText = () => {
  return (
    <div className={styles.textContainer}>

      <h1>William Shakespeare Hamlet <br></br> Prince of Denmark </h1>

      <p>
        Anon comes in a fellow, takes off his crown, kisses it, pours poison in
        the king's ears, and exit. The Queen returns, finds the King dead, and
        makes passionate action. The Poisoner with some three or four Mutes,
        comes in again, seeming to lament with her.
      </p>

      <p className={styles.quote}>


        " The dead body is carried away. The Poisoner wooes the Queen with
        gifts; she seems loth and unwilling awhile, but in the end accepts his
        love."  
        <br></br>
        - R.Hollie
         </p>

      <p>

        The best actors in the world, either for tragedy, comedy, history,
        pastoral, pastoral-comical, historical-pastoral, tragical-historical,
        tragical-comical- historical-pastoral, scene individable, or poem.

        <br></br>
        
        unlimited: Seneca cannot be too heavy nor Plautus too light. For the law
        of writ and the liberty, these are the only men.

      </p>

    </div>
  );
};

export default DiscoverText;
