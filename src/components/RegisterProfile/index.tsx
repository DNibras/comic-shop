const RegisterProfile = () => {

  return (
    <form className="register-profile-container">
      <h1>Регистрация профиля</h1>
      <div>
        <label htmlFor="email">Эл. почта *</label>
        <input
          type="email"
          name="email"
          id="email"
        />
      </div>
      <div>
        <label htmlFor="password">'Пароль *</label>
        <input
          type="password"
          name="password"
          id="password"
        />
        <input 
          type="password" 
          id="confirmPassword" 
          placeholder="Confirm Password"
          className="confirm-password-input"
        />
      </div>
      <div>
        <label htmlFor="fullName">ФИО: *</label>
        <input type="text" id="fullName" placeholder="ФИО" />
      </div>
      <div>
        <label htmlFor="phone">Телефон: *</label>
        <input type="tel" id="phone" placeholder="Телефон" />
      </div>
      <div>
        <label htmlFor="birthday">Дата рождения:</label>
        <input type="date" id="birthday" />
      </div>
      <button className="register-button" type="submit">Зарегистрироваться</button>
    </form>
  )
}

export default RegisterProfile
