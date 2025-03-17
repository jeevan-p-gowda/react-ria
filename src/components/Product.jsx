function Product(props){
    const data = props.pdata
    const renderStock = () => {
        if(data.productStock > 0){
            return (<button onClick={()=> props.btnClick(data.productId)}>Add to Cart</button>);
        } 
        return <h5>Out of Stock</h5>;
    };

    return (
        <div>
            <img src={data.productImage} />
            <h4>{data.productName}</h4>
            <h5>Price: {data.productPrice}</h5>
            {renderStock()}
        </div>
    )
}

export default Product;