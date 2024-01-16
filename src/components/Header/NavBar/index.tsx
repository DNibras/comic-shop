import './style.css'

const NavBar = () => {

  return (
    <div>
      <ul className="header-nav-bar">
        <li>
          <a href="#">
            <img className="icon-header" src="../img/orders.png" alt="" />
            <div className="link-text">Заказы</div>
          </a>
        </li>
        <li>
          <a href="#">
            <img className="icon-header" src="../img/basket.png" alt="" />
            <div className="link-text">Корзина</div>
          </a>
        </li>
        <li>
          <a href="#">
            <img className="icon-header" src="../img/favorites.png" alt="" />
            <div className="link-text">Избраное</div>
          </a>
        </li>
        <li>
          <a href="#">
            <img className="icon-header" src="../img/Account.png" alt="" />
            <div className="link-text">Войти</div>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default NavBar
