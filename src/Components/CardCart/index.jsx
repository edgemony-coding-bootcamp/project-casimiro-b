import styles from "./CardCart.module.scss";
import { useDispatch, useSelector } from "react-redux";

import { MdDelete } from "react-icons/md";

import { REMOVE_CART, CHANGE_QUANTITY } from "../../store/action";
import { useState } from "react";

const CardCart = ({ card, totalPrice }) => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  console.log(card)

  const changeQuantity = (e) => {
    console.log(e.target)
    const q = e.target.value;
    dispatch(CHANGE_QUANTITY(q, card.id));
  }


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


          <input type="number" min="1" max="10" onChange={changeQuantity} value={card.quantity} />
          <button onClick={removeCard}>
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
};

export { CardCart };
