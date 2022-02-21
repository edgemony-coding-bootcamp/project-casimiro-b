import CardCart from '../../Components/CardCart';
import { FETCH_ALL_DATA, FETCH_ALL_DATA_EXPERIENCE, CART } from "../../store/action";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const SideCart = () => {
    const dispatch = useDispatch();
    const events = useSelector(state => state.events);
    const experience = useSelector(state => state.experience);
    const cart = useSelector(state => state.cart)
    console.log(cart)

    useEffect(() => {
        dispatch(FETCH_ALL_DATA_EXPERIENCE())
        dispatch(FETCH_ALL_DATA());
        dispatch(CART())
    }, [])

    return (
        <>
            {/* {cart.map((item, index) => <CardCart key={index} img={item.image} description={item.title} price={item.price} />} */}
        </>
    )
}

export default SideCart;