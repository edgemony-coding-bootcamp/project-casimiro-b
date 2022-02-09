import ParallaxComponent from "./ParallaxComponent";
import styles from "./Home.module.scss";

const Home = () => {
  const images = [
    "https://cdn.discordapp.com/attachments/940161700341116933/940533480423563264/photo-1563693267403-111c5d856e49.png",
    "https://images.unsplash.com/photo-1559424092-88b61cb7a6c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1514936477380-5ea603b9a1ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
  ];

  return (
  
    <div className={styles.parallaxDiv}>
      {images.map((item, index) => (

          <ParallaxComponent image={item} key={index} />

      ))}
    </div>

  );
};

export default Home;
