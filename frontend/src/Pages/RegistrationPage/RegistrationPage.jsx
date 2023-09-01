import React from "react";
import "./RegistrationPage-CSS.css";
import { Link } from "react-router-dom";
import { useQueryRegistration } from "../../hooks/useQueryRegistration.js";
import { useNavigate } from "react-router";

function RegistrationPage() {
  const { mutate } = useQueryRegistration();
  const navigate = useNavigate();

  const submitRegistration = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const field = Object.fromEntries(formData);
    mutate(field);
    navigate("/");
  };

  return (
    <div className="Auth-container">
      <h2>Регистрация</h2>
      <div className="Registration-container">
        <div className="Sing-in-list">
          <p>
            &#128276; Зарегистрировавшись вы соглашаетесь с{" "}
            <Link
              target="_blank"
              to={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}
            >
              политикой конфиденциальности
            </Link>
          </p>
        </div>
        <div className="Sing-in-form">
          <form onSubmit={submitRegistration}>
            <p>Login</p>
            <input
              name="name"
              minLength="5"
              placeholder="Тут ваше имя"
              required
            />
            <p>Email</p>
            <input
              name="email"
              type="email"
              minLength="5"
              placeholder="А тут электронный адрес"
              required
            />
            <p>Password</p>
            <input
              name="password"
              type="password"
              minLength="8"
              placeholder="Тут можешь пароль записать"
              required
            />
            <p>
              Уже есть аккаунт? <Link to={"/sing-in"}>Авторизоваться</Link>
            </p>
            <button type="submit">Регистрация</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegistrationPage;
