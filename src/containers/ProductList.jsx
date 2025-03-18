import Product from "../components/Product";
import useProducts from "../hooks/useProducts";

function ProductList(){
    const {plist, loading} = useProducts();
    if (loading) return <h1>Loading...</h1>;
    return (
        <div>
            {plist.map((item) => (
            <Product 
            key={item.productId}
            pdata ={item}
            btnClick={(id)=>console.log('add item',id)} />))}
        </div>
    );
}

export default ProductList;