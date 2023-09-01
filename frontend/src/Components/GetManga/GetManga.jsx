import React, { useState } from "react";
import { useQueryGetBooks } from "../../hooks/useQueryGetBooks.js";
import "../../Pages/Home/Home-CSS.css";
import "./GetManga-CSS.css";
import { Link } from "react-router-dom";

function GetManga() {
  const { data, isLoading } = useQueryGetBooks();

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (data.length === 0) {
    return <h2>Данные отсутствуют</h2>;
  }
  return (
    <div className="grid-container">
      {data.map((item) => (
        <Link key={item.idManga} to={`/manga/${item.idManga}`}>
          <div className="grid-item">
            <img
              width={70}
              height={100}
              src={`http://localhost:5001/image/${item.coverImageManga}`}
            />
            <div className="Info-container">
              <label>{item.titleManga}</label>
              <p className="chapter">17 глав</p>
              <p className="rate">Оценка: {item.rateManga}/10</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default GetManga;
