import styles from "./CardCart.module.scss";
import { useDispatch } from "react-redux";

import { MdDelete } from "react-icons/md";

import { REMOVE_CART } from "../../store/action";

const CardCart = ({ card }) => {
  const dispatch = useDispatch();

  const removeCard = () => dispatch(REMOVE_CART(card.id));
  return (
    <div className={styles.card_container}>
      <div>
        <img src={card.image} alt={card.title} />
      </div>

      <div className={styles.card_body}>
        <div className={styles.card_text}>
          <h3>{card.title}</h3>
          <p>{card.price} €</p>
        </div>

        <div className={styles.card_actions}>


          <input type="number" min="0" max="10" value={1} />
          <button onClick={removeCard}>
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
};

export { CardCart };
