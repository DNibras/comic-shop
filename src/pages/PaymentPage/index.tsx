import './style.css';

const PaymentPage = () => {

  return (
    <div className="payment">
      <h1>Способ оплаты</h1>
      <h3>Наличными</h3>
      <p>Жители Казани и регионов могут купить наши игры за наличные, то есть без предоплаты! Это можно сделать следующими способами:</p>
      <ul className='payment-list'>
        <li>
          <h4>Оплата наличными курьеру</h4>
          <p>Мы доставим Ваш заказ прямо к Вам домой или на работу!</p>
        </li>
        <li>
          <h4>Наложенный платёж</h4>
          <p>Если Вы оформили доставку заказа Почтой РФ при помощи наложенного платежа, то заказ можно оплатить наличными в Вашем почтовом отделении.</p>
        </li>
        <li>
          <h4>Оплата наличными при самовывозе из магазина FirstPage Казань</h4>
          <p>Если Вы любите ходить по магазинам, забегайте в наш магазин в Казане. Заказ уже будет ждать Вас там!</p>
        </li>
        <li>
          <h4>Оплата наличными при самовывозе в Вашем городе</h4>
          <p>Клиенты из России могут оформить заказ с доставкой до пункта самовывоза в своём городе. В этом случае Вы можете оплатить наличными прямо в пункте самовывоза или безналичным переводом заранее.</p>
        </li>
      </ul>
      <div className="by-bank-card">
        <h2>Банковской картой</h2>
        <p>Если Вы хотите оплатить заказ банковской картой, то нет ничего проще! Мы работаем с популярным и надёжным сервисом IntellectMoney, предоставляющим нашим клиентам широкий выбор способов оплаты. Принимаем к оплате карты любого банка РФ (Visa, Mastercard, Maestro, МИР), причём без взимания комиссии. Кроме того, Вы можете оплатить покупку с помощью таких платёжных систем как: QIWI, WebMoney, Яндекс.Деньги, Google AdSense и д.р.</p>
        <p>Оплатить заказ можно из дома или в офисах "М.Видео", "МТС", "Евросеть", "Связной" и Почты России. Пользуясь безопасным сервером IntellectMoney.ru, Вы ничем не рискуете, а номер Вашей банковской карты не хранится на нашем сайте и не может быть доступен третьим лицам.</p>
      </div>
    </div>
  )
}

export default PaymentPage
