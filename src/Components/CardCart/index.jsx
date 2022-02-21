const CardCart = (props) => {
    return (
        <>
            <div>
                <img src={props.img}></img>
            </div>
            <div>
                <p>{props.description}</p>
                <h2>{props.price}</h2>
                <input type='number' />
            </div>
        </>
    )
}

export default CardCart;