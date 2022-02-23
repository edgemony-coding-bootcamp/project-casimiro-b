import styles from "./CardCart.module.scss";
import { useDispatch } from "react-redux";

import { MdDelete } from "react-icons/md";

import { REMOVE_CART } from "../../store/action";
import { useState } from "react";

const CardCart = ({ card, totalPrice }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  totalPrice = (card.price * quantity)

  const changeQuantity = (e) => setQuantity(e.target.value);
  

  const removeCard = () => dispatch(REMOVE_CART(card.id));
  return (
    <div className={styles.card_container}>
      <div>
        <img src={card.image} alt={card.title} />
      </div>

      <div className={styles.card_body}>
        <div className={styles.card_text}>
          <h3>{card.title}</h3>
          <p>{totalPrice} €</p>
      </div>

        <div className={styles.card_actions}>
         
 
          <input type="number" min="0" max="10" onChange={changeQuantity} value={quantity}/>
          <button onClick={removeCard}>
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
};

export { CardCart };
