import styles from "./CardCart.module.scss";
import { useDispatch } from "react-redux";

import { REMOVE_CART } from "../../store/action";

const CardCart = ({ card }) => {

    const dispatch = useDispatch();

    const removeCard = () => dispatch(REMOVE_CART(card.id))
  return (
    <div className={styles.card_container}>
      <div>
        <img src={card.image} alt={card.title} />
      </div>
      <div className={styles.card_text}>
        <p>{card.title}</p>
        <p>{card.price}</p>
        <input type="number" min="0" max="10" />
        <button onClick={removeCard}>X</button>
      </div>
    </div>
  );
};

export { CardCart };
