
import DiscoverSelect from "./DiscoverSelect";
import DiscoverText from "./DiscoverText";
import DiscoverMenu from "./DiscoverMenu";
import styles from "./Discover.module.scss";

const Discover = () => {
  return (
    <div className={styles.discoverContOne}>

      <div className={styles.discoverElementOne}>
        <DiscoverSelect />
        <DiscoverText />
      </div>


      <div className={styles.discoverElementTwo}>
        <DiscoverMenu />
      </div>
      
    </div>
  );
};

export default Discover;
