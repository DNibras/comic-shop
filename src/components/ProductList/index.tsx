import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const ProductList = () => {
  const [products, setProducts] = useState<ProductModel[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json() as Promise<ProductModel[]>)
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="ProductList-container">
      {products.map((product) => (
        <div className="product" key={product.id}>
          <Link to={`/product/${product.id}`} className="add-wishlist-link">
            <div className="add-wishlist">&#x2764;</div>
          </Link>
          <div className="product-img-box">
            <img src={product.image} alt="Товар" />
          </div>
          <h4>{product.title}</h4>
          <p>{product.price}р.</p>
          <Link to={`/product/${product.id}`} className="add-basket-link">
            <button className="add-basket">Добавить в корзину</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
