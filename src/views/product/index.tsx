import { useEffect, useState } from "react";
import Styles from "./Products.module.scss";

type productType = {
      id : number;
      name : string;
      price : number;
      size : string;
  };

const ProductViews = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("/api/products")
        .then((res) => res.json())
        .then((response) => setProducts(response.products))
    },[])
    return (
        <div>
            <head>
                <title>
                    Product
                </title>
            </head>
            <h1 className={Styles.title}>Product Page</h1>
            {products.map((product: productType) => (
                <div key={product.id} className={Styles.products}>
                    <p>{product.name}</p>
                    <p>{product.price}</p>
                    <p>{product.size}</p>
                </div>
            ))}
        </div>
    );
};

export default ProductViews; 