import ParallaxComponent from "./ParallaxComponent";
import ParallaxComponentCenter from "./ParallaxComponentCenter";
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
  FadeIn,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  ZoomIn,
} from "react-scroll-motion";

import styles from "./Home.module.scss";
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();

  const card = useSelector((state) => state.card);

  useEffect(() => {
    dispatch(FETCH_ALL_DATA_CARD());
  }, []);

  const images = [
    "https://images.unsplash.com/photo-1559424092-88b61cb7a6c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1514936477380-5ea603b9a1ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
  ];

  const description = [
    `‘Ddocu è ipsum ponosm entiv. Pregt aferade. Folingar bast, biosam,lorem ipsum ponosm entiv. ‘Ddocu è ipsum ponosm entiv. Pregt aferade. Folingar bast, biosam,lorem ipsum ponosm entiv.`,
    `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error esse eius quod incidunt consequuntur omnis quae ab pariatur. Adipisci cumque neque iste dignissimos dolore velit assumenda, iure quaerat eius nemo?`,
  ];

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Sticky(), Move());

  return (
    <>
      <ScrollContainer>
        <ScrollPage page={0}>
          <div className={styles.bgScroll}>
            <Animator animation={batch(Sticky(), Fade(), MoveOut(0, -200))}>
              <h2>37°35′21″N / 14°08′53″E</h2>
            </Animator>
          </div>
        </ScrollPage>
        <ScrollPage page={1}>
          <div className={styles.bgScroll}>
            <Animator animation={ZoomInScrollOut}>
              <h3>è l'odore della terra</h3>
            </Animator>
          </div>
        </ScrollPage>
        <ScrollPage page={2}>
            <Animator animation={batch(Fade(), Sticky())}>


              <img src="https://images.unsplash.com/photo-1605447781678-2a5baca0e07b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"/>

            </Animator>
        </ScrollPage>
        <ScrollPage page={3}>
          <div className={styles.bgScroll}>
            <Animator animation={FadeUp}>
              <h3>è il vento che sa di mare</h3>
            </Animator>
          </div>
        </ScrollPage>
        <ScrollPage page={4}>
            <Animator animation={batch(Fade(), Sticky())}>
              <img src="https://images.unsplash.com/photo-1601324353981-5f920af43146?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"/>
            </Animator>
        </ScrollPage>
        <ScrollPage page={5}>
            <Animator animation={batch(Fade(), Sticky())}>
              <img src="https://images.unsplash.com/photo-1617103099853-6dd647eb1489?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/>
            </Animator>
            <Animator animation={FadeUp}>
            <h2 className={styles.sky}>è il cielo che non finisce mai.</h2>
            </Animator>
        </ScrollPage>
        {/* <ScrollPage page={2}>
          <div className={styles.section_3}>
            <h2>
              <Animator animation={MoveIn(-1000, 0)}>land</Animator>
              <Animator animation={MoveIn(1000, 0)}>water</Animator>
              <Animator animation={MoveOut(1000, 0)}>air</Animator>
              <Animator animation={MoveOut(-1000, 0)}>fire</Animator>
            </h2>
          </div>
        </ScrollPage> */}

        {/* <ScrollPage page={6}>
          <div className={styles.bgScroll}>
            <Animator animation={batch(Fade(), Sticky())}>
              <h3>è il cielo che non finisce mai.</h3>
            </Animator>
          </div>
        </ScrollPage> */}


        <ScrollPage page={6}>
          <div className={styles.bgScrollMin}>
            <Animator animation={batch(Fade(), Sticky())}>
              <h2>SCEGLI LA TUA META.</h2>
            </Animator>
          </div>
        </ScrollPage>
      </ScrollContainer>

      <div className={styles.carouselDiv}>
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
    </>
  );
};

export default Home;
