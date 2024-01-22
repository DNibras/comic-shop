import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const ProductList = () => {
  const [products, setProducts] = useState<ProductModel[]>([]);

  fetch('https://fakestoreapi.com/products')
  .then((res) => res.json() as Promise<ProductModel[]>)
  .then(data => setProducts(data));

  return (
    <div className="product-list-container">
      {products.map(product => (
        <div className="product" key={product.id}>
          <div className="product-img-box">
            <img src={product.img} alt="Товар 1" />
          </div>
          <h4>{product.title}</h4>
          <p>{product.price}р.</p>
          <button className="add-basket"><Link to={`/product/${product.id}`} className="link">Добавить в корзину</Link></button>
        </div>
      ))}
    </div>
  )
}

export default ProductList