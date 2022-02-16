
import { Parallax } from "react-parallax";
import styles from "./ParallaxComponentCenter.module.scss";

const ParallaxComponentCenter = ({ image, description }) => {
  return (
    <>
      <Parallax strength={700} className={styles.customBg}>
        <div className={styles.parallaxContainer}>
          <div className={styles.parallaxText}>
            <h2>Lorem ipsum ponosm.</h2>
            <p>
             {description}
            </p>
            <p>
             {description}
            </p>
          </div>    
        </div>
      </Parallax>
    </>
  );
};

export default ParallaxComponentCenter;
