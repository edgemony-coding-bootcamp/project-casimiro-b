import { CardCart } from "../../Components/CardCart";
import Total from "./Total";
import styles from "./SideCart.module.scss";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const SideCart = () => {
  const cart = useSelector((state) => state.cart);

  const [totalPrice, setTotalPrice] = useState();
  // store.subscribe(() => {
  //   saveState({
  //    /* example state */
  //     cart:store.getState().cart
  //   });
  // });

  //   useEffect(() => {
  //     getLocalCart();
  //   }, []);

  //   useEffect(() => {
  //       localStorage.setItem("item", JSON.stringify(cart));
  //   }, [cart])

  //  const getLocalTodos = () => {
  //     if (localStorage.getItem("todos") === null) {
  //       localStorage.setItem("todos", JSON.stringify([]));
  //     } else {
  //       let todoLocal = JSON.parse(localStorage.getItem('todos'));
  //       setTodos(todoLocal);
  //     }
  //   };

  return (
    <div className={styles.card_wrapper}>
      <div className={styles.cart_container}>
        <h2>Carrello</h2>
        <div className={styles.item_container}>
          {cart.map((card) => (
            <CardCart key={card.id} card={card} />
          ))}
        </div>
        <hr />

        <h3>Info Ordine</h3>
        <div className={styles.cart_total}>
          <h2>Prezzo Totale: </h2>
          <Total cart={cart} />
        </div>
        <button className={styles.card_btn}>ACQUISTA</button>
      </div>
    </div>
  );
};

export default SideCart;
