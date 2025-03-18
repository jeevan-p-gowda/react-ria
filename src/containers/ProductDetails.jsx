import { useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const params = useParams();
  useEffect(() => {
  }
  , [params.pid]);
  return (
    <div>
      <h1>Product Details</h1>
      <p>Product ID: {params.pid}</p>
    </div>
  );
}

export default ProductDetails;