import { useContext, useState } from "react";
import { uiContext } from "../../../Contexts";
import loupe from "../../../assets/images/loupe.png";
import "./style.css";

const Search = () => {
  const [isActive, setIsActive] = useState(false);
  const { setIsBackgroundShadowActive } = useContext(uiContext);

  const onSearchInputFocus = () => {
    setIsActive(!isActive);
    setIsBackgroundShadowActive(true);
  };

  const onSearchInputBlur = () => {
    setIsActive(false);
    setIsBackgroundShadowActive(false);
  };

  return (
    <div className="Search">
      <div className="search-container">
        <form action="" className="search-form">
          <div className="search-box">
            <button className="submit-button">
              <img className="loupe" src={loupe} alt="" />
            </button>
            <input
              type="text"
              className="search-input"
              placeholder="Поиск..."
              onFocus={onSearchInputFocus}
              onBlur={onSearchInputBlur}
            />
          </div>
          <div
            className={
              isActive
                ? "search-options-container__enabled"
                : "search-options-container"
            }
          >
            <h4>Возможно вам понравится: </h4>
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
    </div>
  );
};

export default Search;
