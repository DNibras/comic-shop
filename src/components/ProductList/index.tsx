import { useState } from "react";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState<ProductModel[]>([]);

  fetch('https://fakestoreapi.com/products')
  .then((res) => res.json() as Promise<ProductModel[]>)
  .then(data => setProducts(data));

  return (
    <div className="product">
      {products.map(product => (
        <div key={product.id}>
          <img src={product.img} alt="Товар 1" />
          <h4>{product.title}</h4>
          <p>{product.price}</p>
          <button className="add-basket"><Link to={`/product/${product.id}`}>Добавить в корзину</Link></button>
        </div>
      ))}
    </div>
  )
}

export default ProductList