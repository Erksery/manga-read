import React from "react";
import "./MangaCatalog-CSS.css";
import { useQueryGetBooks } from "../../hooks/useQueryGetBooks.js";
import { Link } from "react-router-dom";

function MangaCatalog() {
  const { data, isLoading } = useQueryGetBooks();

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (data.length === 0) {
    return <h2>Данные отсутствуют</h2>;
  }
  return (
    <div>
      <h2>Каталог</h2>
      <div className="MangaCatalog-container">
        <div className="catalog">
          {data.map((item) => (
            <Link
              to={`/manga/${item.idManga}`}
              key={item.idManga}
              className="Manga"
            >
              <img
                src={`http://localhost:5001/image/${item.coverImageManga}`}
              />
              <div>
                <span>Манхва | {item.rateManga}.6</span>

                {item.titleManga}
              </div>
            </Link>
          ))}
        </div>
        <div className="filter"></div>
      </div>
    </div>
  );
}

export default MangaCatalog;
