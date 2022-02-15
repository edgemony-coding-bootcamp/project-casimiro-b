import ParallaxComponent from "./ParallaxComponent";
import CardHomepage from "./CardHomepage";
import { useState, useEffect } from "react";
import Carousel from 'react-elastic-carousel';
import { useSelector, useDispatch } from "react-redux";
import { FETCH_ALL_DATA_CARD } from "../../store/action";

import styles from "./Home.module.scss";
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();

  const card = useSelector((state) => state.card);


  useEffect(() => {
    dispatch(FETCH_ALL_DATA_CARD());
  }, []);

  const images = [
    "https://cdn.discordapp.com/attachments/940161700341116933/940533480423563264/photo-1563693267403-111c5d856e49.png",
    "https://images.unsplash.com/photo-1559424092-88b61cb7a6c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1514936477380-5ea603b9a1ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
  ];


  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];


  
  return (
    <>
      <div className={styles.parallaxDiv}>
        {images.map((item, index) => (
          <ParallaxComponent image={item} key={index} />
        ))}
      </div>

      <h2 className={styles.titleContainer}>SCEGLI LA TUA META</h2>


      <div className={styles.containercity}>

      <Carousel breakPoints={breakPoints}>

        {card?.map((item, index) => (

          <Link key={index} to={`/${item.id}`}>
          <CardHomepage
            key={index}
            title={item.title}
            descriptioncity={item.description}
            imagecity={item.imagecity}
          />
          </Link>


        ))}

        </Carousel>




      </div>


    </>
  );
};

export default Home;
