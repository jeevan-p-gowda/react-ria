import { Link } from 'react-router-dom';
import Card from './Card';

function Product(props){
    const data = props.pdata
    const renderStock = () => {
        if(data.productStock > 0){
            return (<button onClick={()=> props.btnClick(data.productId)}>Add to Cart</button>);
        } 
        return <h5>Out of Stock</h5>;
    };

    return (
        <Card>
            <Link to={`/details/${data.productId}`}>
                <img src={data.productImage} />
            </Link>
            <h4>{data.productName}</h4>
            <h5>Price: {data.productPrice}</h5>
            {renderStock()}
        </Card>
    )
}

export default Product;