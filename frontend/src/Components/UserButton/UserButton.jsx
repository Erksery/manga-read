import React, { useEffect, useRef, useState } from "react";
import "./UserButton-CSS.css";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
import {
  Icon56UserCircleOutline,
  Icon56BookmarkOutline,
  Icon56NotificationOutline,
  Icon56SettingsOutline,
} from "@vkontakte/icons";
import { Transition } from "react-transition-group";

function UserButton() {
  const [cookies] = useCookies(["AuthDataCookie"]);
  const [menuModal, setMenuModal] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setMenuModal(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const arrayLink = [
    {
      link: `/user/${cookies.AuthDataCookie.idUser}`,
      title: "Профиль пользователя",
      icon: <Icon56UserCircleOutline width={24} height={24} />,
    },
    {
      link: `/user/${cookies.AuthDataCookie.idUser}`,
      title: "Закладки",
      icon: <Icon56BookmarkOutline width={24} height={24} />,
    },
    {
      link: `/user/${cookies.AuthDataCookie.idUser}`,
      title: "Уведомления",
      icon: <Icon56NotificationOutline width={24} height={24} />,
    },
    {
      link: `/user/${cookies.AuthDataCookie.idUser}`,
      title: "Настроки",
      icon: <Icon56SettingsOutline width={24} height={24} />,
    },
  ];

  return (
    <div ref={modalRef} className="UserButton-container">
      <button onClick={() => setMenuModal((prev) => !prev)}>
        {cookies.AuthDataCookie.loginUser}
      </button>
      <Transition in={menuModal} timeout={500}>
        {(menuModal) => (
          <div className={`Menu ${menuModal}`}>
            {arrayLink.map((item, index) => (
              <Link
                to={item.link}
                onClick={() => setMenuModal(false)}
                key={index}
                className="Menu-button"
              >
                {item.icon}
                {item.title}
              </Link>
            ))}
          </div>
        )}
      </Transition>
    </div>
  );
}

export default UserButton;
