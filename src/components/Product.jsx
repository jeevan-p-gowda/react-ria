function Product(props){
    const data = props.pdata

    return (
        <div>
            <img src={data.productImage} />
            <h4>{data.productName}</h4>
            <h5>Price: {data.productPrice}</h5>
            <button>Add to Cart</button>
        </div>
    )
}

export default Product;