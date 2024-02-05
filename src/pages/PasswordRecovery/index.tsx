import "./style.css"

const PasswordRecovery = () => {
  return (
    <div className="password-recovery">
      <h1>Восстановить пароль</h1>
      <form className="password-recovery-form">
        <label htmlFor="recovery">Номер телефона или эл. почта</label>
        <input id="recovery" className="recovery-inputq"/>
        <button className="recovery-button">Восстановить</button>
      </form>
    </div>
  )
}

export default PasswordRecovery
