import ExclamationPoint from "./images/ExclamationPoint.png";
import "./style.css";

const DiscountsPage = () => {

  return (
    <div className="DiscountsPage">
      <h1>Система скидок</h1>
      <div className="DiscountsPage-container">
        <p>В нашем магазине действует система накопительных скидок. Каждый раз при оформлении заказа на нашем сайте, Вы получаете бонусные баллы из расчета 1 балл за каждые полные 100 рублей заказа*. При накоплении определенного количества баллов на Ваш счет начисляется скидка согласно следующей таблице:</p>
        <ul className="discounts-list">
          <li>
            <p>0 - 30 баллов</p>
            <p>0%</p>
          </li>
          <li>
            <p>31 - 100 баллов</p>
            <p>3%</p>
          </li>
          <li>
            <p>101 - 300 баллов</p>
            <p>5%</p>
          </li>
          <li>
            <p>301 - 500 баллов</p>
            <p>7%</p>
          </li>
          <li>
            <p>501 + баллов</p>
            <p>10%</p>
          </li>
        </ul>
        <p>Обратите внимание, что скидка начисляется на аккаунт пользователя автоматически после присвоения заказу статуса "Отправлен. Оплата получена". В случае если бонусные баллы начисляются в ручном режиме (например за участие в каких-либо акциях), скидка клиента будет пересчитана только после следующего заказа.</p>
      </div>
      <div className="DiscountsPage-container">
        <h3>На что я смогу потратить бонусы?</h3>
        <p>Полученные бонусные баллы можно потратить также на различные товары нашего специального раздела «Товары за бонусы». Таким образом, Вы сами можете решать, что Вам выгоднее: приобрести какие-либо товары на бонусные баллы или же накопить их для получения большей скидки.</p>
        <p>Получение скидки не ведет к списанию накопленных баллов, поэтому при достижении максимальной величины и скидки в 10% Вы будете иметь более 500 бонусных баллов. Полученная скидка сохраняется за пользователем без каких-либо временных ограничений.**</p>
        <p>* - администрация сайта оставляет за собой право корректировать поправочные коэффициенты для отдельных видов доставки и оплаты. В настоящий момент действует поправочный коэффициент для заказов с наложенным платежом в размере 0,3 (т.е. за каждые полные 1000 рублей будет начислено 3 бонусных балла).</p>
        <p>** - администрация сайта оставляет за собой право корректировать скидку и сумму бонусных баллов в случае недобросовестного поведения покупателя (отказ от выкупа заказа с наложенным платежом, отказ от выкупа подтвержденного заказа наличными и т.д.), а также в случае продажи акционного товара по цене, отличной от стандартной цены сайта.</p>
      </div>
      <div className="attention">
        <img src={ExclamationPoint} alt="Восклицательный знак" />
        <p>Внимание! Бонусные баллы начисляются на счет пользователя только в случае самостоятельного оформления заказа через наш сайт. Заказы, оформленные по телефону или по электронной почте, а также каким-либо иным способом, не ведут к начислению бонусных баллов!</p>
      </div>
      <div className="DiscountsPage-container">
        <h3>У вас уже есть скидка в другом магазине, но вы не удовлетворены качеством их работы?</h3>
        <p>Присылайте нам на почту co@FirstPage.ru свой логин, а также доказательство наличия скидки в другом интернет-магазине аналогичной тематики. Мы рассмотрим Вашу заявку в течение 3 рабочих дней, и в случае принятия положительного решения, предоставим Вам аналогичную скидку + 0.5%.</p>
      </div>
    </div>
  )
}

export default DiscountsPage
