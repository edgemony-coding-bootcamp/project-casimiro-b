import { CardCart } from "../../Components/CardCart";
import Total from "./Total";
import styles from "./SideCart.module.scss";
import { useSelector } from "react-redux";

const SideCart = () => {
  const cart = useSelector((state) => state.cart);
  console.log(cart)

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
        <button className={styles.card_btn}> <p>ACQUISTA</p> </button>
      </div>
    </div>
  );
};

export default SideCart;
