import Product from "../components/Product";

function ProductList(){
    const plist = {
        productId: 1,
        productName: "Laptop",
        productPrice: 50000,
        productImage: "",
        productStock: 10,
    }
    return (
        <div>
            <Product pdata ={plist} />
        </div>
    );
}

export default ProductList;