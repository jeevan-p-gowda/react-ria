import { useEffect, useState } from "react";
import { getProducts } from "../services/ProductService";

function useProducts(){
    const [plist, setPlist] = useState([]);
    const [loading, setLoading] = useState(false);
    const getData = async () => {
        try{
            setLoading(true);
            const data = await getProducts();
            console.log(data);
            setPlist(data);
            setLoading(false);
        } catch (error){
            console.log(error);
            setLoading(false);
        }
    };
    useEffect(() => {
        getData();
    }, []);
    
    return {plist, loading};
    
    }


export default useProducts;