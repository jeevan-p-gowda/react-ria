import { useEffect, useState } from "react";
import { getProducts } from "../services/ProductService";
import { useNavigate } from "react-router-dom";

function useProducts(){
    const [plist, setPlist] = useState([]);
    const navigate = useNavigate();
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

    const addItem = (id) => {
        console.log("add item", id);
        navigate("/cart");
    }
    useEffect(() => {
        getData();
    }, []);
    
    return {plist, loading, addItem};
    
    }


export default useProducts;