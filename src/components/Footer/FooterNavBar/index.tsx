
const FooterNavBar = () => {

  return (
    <div className="inform">
      <ul>
        <h2>Контакты</h2>
        <li>
          <p>Горячая линия:</p>
          <p>8 800 666 13 44</p>
        </li>
        <li>
          <p>Электронная почта:</p>
          <a href="">office@FirstPage.ru</a>
        </li>
        <li>
          ООО «Фабрика Продукта»
          г. Москва, ул. Безымянная д. 1
        </li>
      </ul>
      <ul>
        <h2>О компании</h2>
        <li><a href="">Информация</a></li>
        <li><a href="">Карьера</a></li>
        <li><a href="">Партнерка</a></li>
        <li><a href="">Адреса магазинов</a></li>
        <li><a href="">Блог</a></li>
        <li><a href="">Контакты</a></li>
      </ul>
      <ul>
        <h2>Покупателям</h2>
        <li><a href="">Оплата</a></li>
        <li><a href="">Доставка</a></li>
        <li><a href="">Акции</a></li>
        <li><a href="">Скидки</a></li>
        <li><a href="">Пользовательское соглашение</a></li>
      </ul>
      <ul>
        <h2>Мы в социальных сетях</h2>
        <a href=""><img className="social-network-img" src="../img/vk.png" alt="" /></a>
        <a href=""><img className="social-network-img" src="../img/youtube.png" alt="" /></a>
        <a href=""><img className="social-network-img" src="../img/telegram.png" alt="" /></a>
      </ul>
      <ul>
        <h2>Принимаем к оплате</h2>
        <img className="payment-img" src="../img/mastercard.png" alt="" />
        <img className="payment-img" src="../img/visa.png" alt="" />
      </ul>
    </div>
  )
}

export default FooterNavBar
