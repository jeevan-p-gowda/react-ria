import { useEffect } from "react";
import Product from "../components/Product";
import useProducts from "../hooks/useProducts";
import { useNavigate, useSearchParams } from "react-router-dom";

function ProductList(){
    const {plist, loading} = useProducts();
    const navigate = useNavigate();
    const [queryParams, setQueryParams] = useSearchParams();

    useEffect(() => {
        console.log("Page", queryParams.get("page"));
    }, [queryParams]);

    if (loading) return <h1>Loading...</h1>;
    return (
        <div>
            <button onClick={() => setQueryParams({ page: 3, rating: 4 })}>Page 3</button>
            {plist.map((item) => (
            <Product 
            key={item.productId}
            pdata ={item}
            btnClick={(id)=>{
                console.log('add item',id);
                navigate("/cart");
            }} 
            />
        ))}
        </div>
    );
}

export default ProductList;