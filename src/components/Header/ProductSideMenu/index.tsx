import { useState } from "react";
import useFetch from "../../../hooks/useFetch";
import open1 from "./images/open1.png";
import "./style.css";

const ProductSideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: products } = useFetch<ProductModel[]>("https://fakestoreapi.com/products");

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside className="ProductSideMenu">
      <ul
        className={
          "ProductSideMenu-list " + (isOpen ? "ProductSideMenu-list_open" : "")
        }
      >
        {products && products.map(product => (
          <li key={product.id}>{product.category}</li>
        ))}
      </ul>
      <button
        onClick={handleClick}
        className={
          "ProductSideMenu-button " +
          (isOpen ? "ProductSideMenu-button_open" : "")
        }
      >
        <img className="ProductSideMenu-img" src={open1} alt="" />
      </button>
    </aside>
  );
};

export default ProductSideMenu;
