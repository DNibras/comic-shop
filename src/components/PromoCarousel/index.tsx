import { useRef } from "react";
import Carousel from "./Carousel";

const PromoCarousel = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScrollLeft = () => {
    containerRef.current?.scrollBy({
        left: -160,
        behavior: 'smooth'
     })}

  const handleScrollRight = () => {
    containerRef.current?.scrollBy({
        left: 160,
        behavior: 'smooth'
      })}
  


  return (
    <section className="slider">
      <div className="scroll-container" ref={containerRef}>
        <div className="scroll-item">
          <div><img src="../img/carousel1.png" alt="Image 1" /></div>
          <div className="scroll-item-info">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste rem accusamus ea quisquam alias, dolores
              magni, eius dicta incidunt autem blanditiis.
            </p>
            <button className="scroll-item-buy">Купить</button>
          </div>
        </div>
        <Carousel />
        <div className="scroll-button-container">
          <button className="scroll-button scroll-button-left" onClick={handleScrollLeft}>&#10094;</button>
          <button className="scroll-button scroll-button-right" onClick={handleScrollRight}>&#10095;</button>
        </div>
      </div>
    </section>
  )
}

export default PromoCarousel
