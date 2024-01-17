import { useRef, useState } from "react";
import "./style.css";

const Carousel = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [products, setProducts] = useState<ProductModel[]>([]);

  fetch('https://fakestoreapi.com/products')
    .then((res) => res.json() as Promise<ProductModel[]>)
    .then(data => setProducts(data));


  const handleScrollLeft = () => {
    containerRef.current?.scrollBy({
      left: -160,
      behavior: 'smooth'
    })
  }

  const handleScrollRight = () => {
    containerRef.current?.scrollBy({
      left: 160,
      behavior: 'smooth'
    })
  }

  return (
    <section className="carousel">
      <div className="carousel-container" ref={containerRef}>
        {products.map(product => (
          <div className="carousel-item" key={product.id}>
            <div>
              <img src={product.img} alt="Рекомендуемый продукт" />
            </div>
            <div className="carousel-item-info">
              <p>
                {product.description}
              </p>
              <button className="carousel-item-button">Купить</button>
            </div>
          </div>
        ))}
        <div className="carousel-button-container">
          <button className="carousel-button scroll-button-left" onClick={handleScrollLeft}>&#10094;</button>
          <button className="carousel-button scroll-button-right" onClick={handleScrollRight}>&#10095;</button>
        </div>
      </div>
    </section>
  )
}

export default Carousel
