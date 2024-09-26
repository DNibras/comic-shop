import { useContext, useState } from "react";
import loupe from "../../../assets/images/loupe.png";
import { uiContext } from "../../../contexts";
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
    <div
      className={
        "Search " + (isActive ? "Search__enabled" : "")
      }
    >
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
          <div className={"search-options-container"}>
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
