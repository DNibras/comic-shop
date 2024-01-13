import { useState } from "react";


const Carousel = () => {
  const [products, setProducts] = useState<ProductModel[]>([]);

  fetch('https://fakestoreapi.com/products')
  .then((res) => res.json() as Promise<ProductModel[]>)
  .then(data => setProducts(data));

  return (
    <div className="scroll-item">
      {products.map(product => (
        <div key={product.id}>
          <div>
            <img src={product.img} alt="Рекомендуемый продукт" />
          </div>
          <div className="scroll-item-info">
            <p>
              {product.description}
            </p>
            <button className="scroll-item-buy">Купить</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Carousel