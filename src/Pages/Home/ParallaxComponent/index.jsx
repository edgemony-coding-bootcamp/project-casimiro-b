import { Parallax } from "react-parallax";
import styles from "./ParallaxComponent.module.scss";

const ParallaxComponent = ({ image }) => {
  return (
    <>
      <Parallax bgImage={image} strength={500} className={styles.customBg}>
        <div className={styles.parallaxContainer}>
          <div className="parallaxText">
            <h2>Lorem ipsum ponosm.</h2>
            <p>
              ‘Ddocu è ipsum ponosm entiv. Pregt aferade. <br />
              Folingar bast, biosam,lorem ipsum ponosm entiv.
              <br />
              ‘Ddocu è ipsum ponosm entiv. Pregt aferade. <br />
              Folingar bast, biosam,lorem ipsum ponosm entiv.
            </p>
          </div>    
        </div>
      </Parallax>
    </>
  );
};

export default ParallaxComponent;
