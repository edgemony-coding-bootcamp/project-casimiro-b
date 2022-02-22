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
import video from "./video.mp4";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { icons } from "react-icons";

const Home = () => {
  const dispatch = useDispatch();

  const card = useSelector((state) => state.card);

  useEffect(() => {
    dispatch(FETCH_ALL_DATA_CARD());
  }, []);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
 
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
                    <button>Conosci l'isola.</button>
                  </AnchorLink>

                  <h3>
                    Scopri gli eventi previsti in città, <br></br>
                    prenota l'esperienza che ti ispira di più <br></br> e scopri
                    l'isola insieme a noi.
                  </h3>
                  
                </div>

                <div className={styles.elements}>
                  <h4>Inizia il viaggio.</h4>
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

            <Animator animation= {batch(Fade(0, 1,), Sticky(50, 50, 0), Move())}>
              <h3>C'è la terra nei miei ricordi, <br></br>
              c'è il vento che sa di mare <br></br>
              <h3>ed un cielo che non finisce mai.</h3>
              </h3>
            </Animator>
          
           
          </div>
        </ScrollPage>

        <ScrollPage page={2}>
          <div id="carousel" className={styles.carouselDiv}>
            <div className={styles.leftText}>
              <h1>
                Scegli la tua meta, <br></br> scegli il tuo ricordo.
              </h1>
            </div>

            <div className={styles.containercity}>
              <Carousel breakPoints={breakPoints}>
                {card?.map((item, index) => (
                  <Link key={index} to={`/${item.id}`}>
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
