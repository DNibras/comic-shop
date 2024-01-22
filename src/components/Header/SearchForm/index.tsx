import { useState } from "react";
import './style.css';
import loupe from '../images/loupe.png';

const Search = () => {
  const [isActive, setIsActive] = useState(false);

  const onSearchInputFocus = () => {
    setIsActive(!isActive);
  }

  const onSearchInputBlur = () => {
    setIsActive(false);
  }

  return (
    <div className="search-container">
      <form action="" className="search-form">
        <div className="search-box">
          <button className="submit-button">
            <img className="loupe" src={loupe} alt="" />
          </button>
          <input
            type="text"
            className="search-products"
            placeholder="Поиск..."
            onFocus={onSearchInputFocus}
            onBlur={onSearchInputBlur}
          />
          
        </div>
        <div className={isActive ? 'search-options-container__enabled' : 'search-options-container'}>
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