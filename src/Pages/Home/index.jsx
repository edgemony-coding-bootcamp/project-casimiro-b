import CardHomepage from "./CardHomepage";
import { useState, useEffect } from "react";
import Carousel from "react-elastic-carousel";
import { useSelector, useDispatch } from "react-redux";
import { FETCH_ALL_DATA_CARD } from "../../store/action";

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
} from "react-scroll-motion";

import styles from "./Home.module.scss";
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();

  const card = useSelector((state) => state.card);

  useEffect(() => {
    dispatch(FETCH_ALL_DATA_CARD());
  }, []);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 970, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
    { width: 1600, itemsToShow: 5 },
  ];

  const ZoomInScrollOut = batch(StickyIn(), Fade());
  const FadeUp = batch(Fade(), Sticky(), Move());

  return (
    <>
      <ScrollContainer>
        <ScrollPage page={0}>
          <div className={styles.bgScroll}>
            <Animator animation={batch(Sticky(), Fade(), MoveOut(0, -200))}>
              <h2>37°35′21″N / 14°08′53″E</h2>
              <h5>Sicily, Italy.</h5>
            </Animator>
          </div>
        </ScrollPage>
        <ScrollPage page={1}>
          <div className={styles.bgScroll}>
            <Animator animation={FadeUp}>
              <h3>C'è la terra nei miei ricordi,</h3>
            </Animator>
          </div>
        </ScrollPage>
        <ScrollPage page={2}>
          <Animator animation={batch(Fade(), Sticky())}>
            <img src="https://images.unsplash.com/photo-1570720212222-6c41c9bc0706?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2233&q=80" />
          </Animator>
        </ScrollPage>
        <ScrollPage page={3}>
          <div className={styles.bgScroll}>
            <Animator animation={FadeUp}>
              <h3>c'è il vento che sa di mare</h3>
            </Animator>
          </div>
        </ScrollPage>

        <ScrollPage page={4}>
          <Animator animation={batch(Fade(), Sticky())}>
            <img src="https://images.unsplash.com/photo-1598976895839-9cb03d135e4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" />
          </Animator>
        </ScrollPage>

        <ScrollPage page={5}>
          <div className={styles.bgScroll}>
            <Animator animation={FadeUp}>
              <h3>ed un cielo che non finisce mai.</h3>
            </Animator>
          </div>
        </ScrollPage>

        <ScrollPage page={6}>
          <Animator animation={batch(Fade(), Sticky())}>
            <img src="https://images.unsplash.com/photo-1586729150659-40c989036a30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80" />
          </Animator>
        </ScrollPage>

        <ScrollPage page={7}>
          <div className={styles.bgScroll}>
            <Animator animation={batch(Fade(), Sticky())}>
              <h3>
                Scegli la tua meta, <br></br> scegli il tuo ricordo.
              </h3>
            </Animator>
          </div>
        </ScrollPage>

        <ScrollPage page={8}>
          {/* <div className={styles.bgScrollMin}>

          </div> */}
          <div className={styles.carouselDiv}>
            <h1>Destinazioni popolari</h1>
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
