import { useEffect, useRef, useState } from "react";
import "./style.css";

const Carousel = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [products, setProducts] = useState<ProductModel[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json() as Promise<ProductModel[]>)
      .then((data) => setProducts(data));
  }, []);

  const handleScrollLeft = () => {
    const container = containerRef.current;
    if (container) {
      const { scrollLeft } = container;
      if (scrollLeft === 0) {
        const items = container.querySelectorAll('.carousel-item');
        const lastItem = items[items.length - 1];
        const lastItemRect = lastItem.getBoundingClientRect();
        container.scrollTo({ left: lastItemRect.left, behavior: 'smooth' });
      } else {
        containerRef.current?.scrollBy({
          left: -160,
          behavior: 'smooth'
        });
      }
    }
  }

  const handleScrollRight = () => {
    const container = containerRef.current;
    if (container) {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      if (scrollLeft + clientWidth >= scrollWidth) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        containerRef.current?.scrollBy({
          left: 160,
          behavior: 'smooth'
        })
      }
    }
  }

  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  return (
    <section className="carousel">
      <div className="carousel-container" ref={containerRef}>
        {products.map((product) => (
          <div className="carousel-item" key={product.id}>
            <div className="carousel-item-img">
              <img src={product.image} alt="Рекомендуемый продукт" />
            </div>
            <div className="carousel-item-info">
              <p>{truncateText(product.description, 200)}</p>
              <button className="carousel-item-button">Купить</button>
            </div>
          </div>
        ))}
        <div className="carousel-button-container">
          <button
            className="carousel-button scroll-button-left"
            onClick={handleScrollLeft}
          >
            &#10094;
          </button>
          <button
            className="carousel-button scroll-button-right"
            onClick={handleScrollRight}
          >
            &#10095;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
