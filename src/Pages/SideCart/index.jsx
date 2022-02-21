import { CardCart } from "../../Components/CardCart";
import Total from "./Total";
import styles from "./SideCart.module.scss";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const SideCart = () => {
  const cart = useSelector((state) => state.cart);

  


  return (
    <>
      <h1>ciao</h1>
      {cart.map((card) => (
        <CardCart key={card.id} card={card} />
      ))}

      <Total cart={cart}/>

    </>
  );
};

export default SideCart;
