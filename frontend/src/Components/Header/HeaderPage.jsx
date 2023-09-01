import "./Header-CSS.css";
import logo from "../../assets/vite.svg";
import { Link } from "react-router-dom";
import { Transition } from "react-transition-group";
import {
  Icon96NotePenOutline,
  Icon56ServicesOutline,
  Icon56SearchOutline,
} from "@vkontakte/icons";
import { useState } from "react";
import ModalSearch from "./ModalSearch/ModalSearch.jsx";
import { useCookies } from "react-cookie";
import UserButton from "../UserButton/UserButton.jsx";

function HeaderPage({ isVisible }) {
  const [modalSearch, setModalSearch] = useState(false);

  const [cookies] = useCookies(["AuthDataCookie"]);

  return (
    <Transition in={isVisible} timeout={500}>
      {(isVisible) => (
        <div className={`Header ${isVisible}`}>
          <Link to={"/"} className="Logo-container">
            <img style={{ width: 40 }} src={logo} />
            <h2>React Manga</h2>
          </Link>
          <div className="Search-container">
            <ModalSearch
              modalSearch={modalSearch}
              setModalSearch={setModalSearch}
            />
            <div
              onClick={() => setModalSearch((prev) => !prev)}
              className="Search-input"
            >
              <Icon56SearchOutline width={26} />
              Поиск
            </div>
          </div>
          <div className="Option-container">
            {/*<button>*/}
            {/*  <Icon56SearchOutline width={26} />*/}
            {/*  Поиск*/}
            {/*</button>*/}
            <Link className="link" to={"/catalog"}>
              <button>
                <Icon56ServicesOutline width={26} />
                Каталог
              </button>
            </Link>
            <Link className="link" to={"/create"}>
              <button>
                <Icon96NotePenOutline width={26} />
                Добавить
              </button>
            </Link>
            {cookies.AuthDataCookie ? (
              <UserButton />
            ) : (
              <Link to={"/registration"}>
                <button className="Auth-button">Войти</button>
              </Link>
            )}
          </div>
        </div>
      )}
    </Transition>
  );
}

export default HeaderPage;
