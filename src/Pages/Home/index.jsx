import CardHomepage from "./CardHomepage";
import { useState, useEffect } from "react";
import Carousel from "react-elastic-carousel";
import { useSelector, useDispatch } from "react-redux";
import { FETCH_ALL_DATA_CARD } from "../../store/action";
import { CgScrollV } from "react-icons/cg";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  Move,
  MoveOut,
  Sticky,
  StickyIn,
  Zoom,
  FadeIn,
  MoveIn,
} from "react-scroll-motion";

import styles from "./Home.module.scss";
import { Link } from "react-router-dom";
import video from "./Media/videoddocu.mp4";
import AnchorLink from "react-anchor-link-smooth-scroll";


const Home = () => {
  const dispatch = useDispatch();

  const card = useSelector((state) => state.card);

  useEffect(() => {
    dispatch(FETCH_ALL_DATA_CARD());
  }, []);

  const breakPoints = [

    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1 },
    { width: 850, itemsToShow: 2 },
    { width: 1150, itemsToShow: 3 },
    { width: 1450, itemsToShow: 3 }
 
  ];

  const ZoomInScrollOut = batch(StickyIn(), Fade());
  const FadeUp = batch(Fade(), Sticky(), Move());

  return (
    <>
      <ScrollContainer>

        <ScrollPage page={0}>
          <div className={styles.bgScroll}>
            <Animator animation={batch(Sticky(), Fade(), MoveOut(0, -300))}>
              <div className={styles.firstScroll}>
                <div className={styles.secondText}>
                  <h1>'Ddocu</h1>

                  <AnchorLink href="#carousel">
                    <button>SCOPRI L'ISOLA</button>
                  </AnchorLink>

                  <h3>
                    Scopri gli eventi previsti in Sicilia, <br></br>
                    prenota l'esperienza che ti ispira di più <br></br> e scopri
                    l'isola insieme a noi.
                  </h3>
                  
                </div>

                <div className={styles.elements}>
                  <h4>Comincia il viaggio.</h4>
                  <CgScrollV className={styles.iconScroll} />
                </div>
              </div>
            </Animator>
          </div>
        </ScrollPage>

     

        <ScrollPage page={1}>

         <video
          src={video}
          loading="lazy"
          autoPlay
          muted
          loop
          playsinline
        ></video>


          <div className={styles.bgScroll}>

            <Animator animation= {batch(Fade(0, 1,), Sticky(50, 48, 0), Move())}>
              <h3>C'è il vento nei miei ricordi, <br></br>
              il mare blu cobalto <br></br>
              ed un cielo che non finisce mai...
             
              </h3>
            </Animator>
          
           
          </div>
        </ScrollPage>

        <ScrollPage page={2}>
          <div id="carousel" className={styles.carouselDiv}>
        
              <h1>  Scegli la tua meta, scegli il tuo ricordo.</h1>
           
         
            <div className={styles.containercity}>
              <Carousel breakPoints={breakPoints}>
                {card?.map((item, index) => (
                  <Link key={index} to={`city/${item.id}`}>
                    <CardHomepage
                      key={index}
                      title={item.title}
                      imagecity={item.imagecity}
                    />
                  </Link>
                ))}
              </Carousel>
            </div>
          </div>
        </ScrollPage>
      </ScrollContainer>
    </>
  );
};

export default Home;
