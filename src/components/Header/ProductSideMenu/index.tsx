import { useState } from "react";
import "./style.css";

const ProductSideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside className="ProductSideMenu">
      <ul
        className={
          isOpen ? "ProductSideMenu-list_open" : "ProductSideMenu-list"
        }
      >
        <li>Ужасы</li>
        <li>Фэнтези</li>
        <li>Боевик</li>
        <li>Детектив</li>
      </ul>
      <button
        onClick={handleClick}
        className={
          isOpen ? "ProductSideMenu-button_open" : "ProductSideMenu-button"
        }
      >
        <p>&gt;</p>
      </button>
    </aside>
  );
};

export default ProductSideMenu;
