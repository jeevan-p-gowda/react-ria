import Product from "../components/Product";

function ProductList(){
    const plist = [{
        productId: 1,
        productName: "Laptop",
        productPrice: 50000,
        productImage: "",
        productStock: 10,
    },
    {
        productId: 2,
        productName: "Mobile",
        productPrice: 15000,
        productImage: "",
        productStock: 0,
    },
    {
        productId: 3,
        productName: "Tablet",
        productPrice: 20000,
        productImage: "",
        productStock: 5,
    }];
    return (
        <div>
            {plist.map((item) => (<Product pdata ={item}
            btnClick={(id)=>console.log('add item',id)} />))}
        </div>
    );
}

export default ProductList;