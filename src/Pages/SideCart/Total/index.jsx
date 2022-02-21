const Total = (props) => {
    const total = props.cart.reduce(
        (prevValue, currentValue) => prevValue + parseInt(currentValue.price), 0);
    
    return (
        <div>
            <h2>Total Price: {total} €</h2>
        </div>
    )
}

export default Total;