const Total = (props) => {
    const total = props.cart.reduce(
        (prevValue, currentValue) => prevValue + parseInt(currentValue.price), 0);
    
    return (
        <div>
            <p>{total} €</p>
        </div>
    )
}

export default Total;