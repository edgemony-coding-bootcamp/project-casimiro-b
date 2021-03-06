
import { Parallax } from "react-parallax";
import styles from "./ParallaxComponent.module.scss";

const ParallaxComponent = ({ image, description }) => {
  return (
    <>
      <Parallax bgImage={image} strength={700} className={styles.customBg}>
        <div className={styles.parallaxContainer}>
          <div className={styles.parallaxText}>
            <h2>Lorem ipsum ponosm.</h2>
            <p>
             {description}
            </p>
          </div>    
        </div>
      </Parallax>
    </>
  );
};

export default ParallaxComponent;
