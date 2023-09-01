import React from "react";
import "./AuthorizationPage-CSS.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router";
function AuthorizationPage() {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(["AuthDataCookie"]);
  async function GetAuthData(inputData) {
    const resData = await axios.get("/api/authorization", {
      params: { email: inputData.email, password: inputData.password },
    });
    const stringData = JSON.stringify(resData.data);
    setCookie("AuthDataCookie", stringData, { path: "/" });
    console.log(cookies.AuthDataCookie);
  }

  const submitAuthorization = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const field = Object.fromEntries(formData);
    GetAuthData(field).then();
    navigate("/");
  };
  return (
    <div className="AuthorizationPage-container">
      <h2>Авторизация</h2>
      <div className="Auth-form">
        <form onSubmit={submitAuthorization} className="AuthInput-container">
          <p>Email</p>
          <input
            name="email"
            type="email"
            minLength="5"
            placeholder="Почту сюда"
            required
          />
          <p>Password</p>
          <input
            name="password"
            type="password"
            placeholder="А пароль суда"
            required
          />
          <p>
            Впервые на сайте? <Link to={"/registration"}>Регистрация</Link>
          </p>
          <button>Войти</button>
        </form>
      </div>
    </div>
  );
}

export default AuthorizationPage;
