import { useState } from "react";
import './style.css'

const Search = () => {
  const [isActive, setIsActive] = useState(false);

  const onSearchInput = () => {
    setIsActive(!isActive);
  }

  const onSearchInputBlur = () => {
    setIsActive(false);
  }

  return (
    <div className="search-container">
      <form action="" className="search-form">
        <div className="search-box">
          <input
            type="text"
            className="search-products"
            onFocus={onSearchInput}
            onBlur={onSearchInputBlur}
            />
          <button className="submit-button">
            <img className="loupe" src="../img/loupe.png" alt="" />
          </button>
        </div>
        <div className={isActive ? 'search-options-container' : 'search-options-container__enabled'}>
          <h4>История: </h4>
          <ul className="search-options">
            <li>Черепашки ниндзя</li>
            <li>Неуязвимый</li>
            <li>Зеленый фонарь</li>
            <li>Зигги и Шмыг</li>
            <li>Хранители</li>
          </ul>
        </div>
      </form>
    </div>
  )
}

export default Search