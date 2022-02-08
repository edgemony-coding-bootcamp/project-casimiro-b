import { Parallax } from "react-parallax";
import styles from "./Home.module.scss";

const Home = () => {
  const images = [
    "https://cdn.discordapp.com/attachments/940161700341116933/940533480423563264/photo-1563693267403-111c5d856e49.png",
    "https://images.unsplash.com/photo-1543872668-29e25522ac77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    "https://images.unsplash.com/photo-1528917715128-68f319d04c0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
  ];

  return (
    <div className={styles.parallaxDiv}>
      <Parallax bgImage={images[0]} strength={500} className={styles.customBg}>
        <div style={{ height: "100vh" }}>
          <div className={styles.textParallax}>
            <h2>Lorem ipsum ponosm.</h2>
            <p>
              ‘Ddocu è ipsum ponosm entiv. Pregt aferade. <br/>
              Folingar bast, biosam,lorem ipsum ponosm entiv.
            </p>
          </div>
        </div>
      </Parallax>
      <Parallax bgImage={images[1]} strength={500} className={styles.customBg}>
        <div style={{ height: "100vh" }}></div>
        <div className={styles.textParallax}>
            <h2>Lorem ipsum ponosm.</h2>
            <p>
              ‘Ddocu è ipsum ponosm entiv. Pregt aferade. <br/>
              Folingar bast, biosam,lorem ipsum ponosm entiv.
            </p>
          </div>
      </Parallax>
      <Parallax bgImage={images[2]} strength={500} className={styles.customBg}>
        <div style={{ height: "100vh" }}></div>
        <div className={styles.textParallax}>
            <h2>Lorem ipsum ponosm.</h2>
            <p>
              ‘Ddocu è ipsum ponosm entiv. Pregt aferade. <br/>
              Folingar bast, biosam,lorem ipsum ponosm entiv.
            </p>
          </div>
      </Parallax>
    </div>
  );
};

export default Home;
