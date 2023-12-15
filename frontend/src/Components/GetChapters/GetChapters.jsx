import React from "react";
import { useQueryGetChapters } from "../../hooks/useQueryGetChapters.js";
import { Link } from "react-router-dom";
import "./GetChapters-CSS.css";
import { Icon28ViewOutline, Icon56UsersOutline } from "@vkontakte/icons";

function GetChapters({ id }) {
  const { data, isLoading } = useQueryGetChapters();

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (data.length === 0) {
    return (
      <>
        <Link to={`/manga/${id}/createChapters`}>
          Добавить главу
          <h2>Главы пока не завезли(</h2>
        </Link>
      </>
    );
  }

  return (
    <div>
      <Link to={`/manga/${id}/createChapters`}>
        <h1>Добавить главу</h1>
      </Link>
      {data.map((item) => (
        <div className="Chapters-container" key={item.idChapter}>
          <div className="Chapter-item">
            <div className="Chapter-name">
              <Icon28ViewOutline />
              <Link to={`/manga/${id}/chapters/${item.idChapter}`}>
                Глава: {item.numberChapter}
              </Link>
            </div>
            <div className="Chapter-info">
              <div>
                <Icon56UsersOutline width={28} height={28} />
                Assley Team
              </div>
              2023-05-31
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default GetChapters;
