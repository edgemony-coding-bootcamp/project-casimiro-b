import styles from "./CardCart.module.scss";
import { useDispatch, useSelector } from "react-redux";

import { MdDelete } from "react-icons/md";
import { BiPlus, BiMinus } from "react-icons/bi";

import {
  REMOVE_CART,
  CHANGE_QUANTITY,
  MINUS_QUANTITY,
} from "../../store/action";

const CardCart = ({ card }) => {
  const dispatch = useDispatch();

  const incrementQuantity = () => dispatch(CHANGE_QUANTITY(card.id));
  const decrementQuantity = () => dispatch(MINUS_QUANTITY(card.id));
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
          <div className={styles.quantity_btn}>
            <button onClick={decrementQuantity}><BiMinus className={styles.icon}/></button>
            <p>{card.quantity}</p>
            <button onClick={incrementQuantity}><BiPlus className={styles.icon}/></button>
          </div>
          <button onClick={removeCard}>
            <MdDelete className={styles.icon}/>
          </button>
        </div>
      </div>
    </div>
  );
};

export { CardCart };
