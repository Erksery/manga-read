import React, { useRef, useState } from "react";
import { useNavigate } from "react-router";
import "./MangaCreate-CSS.css";
import { useQueryCreateBook } from "../../hooks/useQueryCreateBook.js";

function MangaCreate() {
  const [avatarUrl, setAvatarUrl] = useState("");
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const { mutate } = useQueryCreateBook();

  const handleClear = (file) => {
    const filename = file.name;
    const newFilename = filename.replace(/\.(jpg|png|jpeg)$/i, "");
    setAvatarUrl(newFilename);
    console.log(avatarUrl);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    mutate(file);
    handleClear(file);
  };

  return (
    <div className="MangaCreate">
      <h2>Добавить новый тайтл</h2>
      <div className="CreateForm-container">
        <form action="/api/createManga" method="post">
          <h3>Обложка</h3>
          <div
            className="File-container"
            onClick={() => fileInputRef.current.click()}
          >
            {!avatarUrl ? (
              <label>Нажмите, чтобы загрузить картинку</label>
            ) : (
              <img
                width={70 * 2}
                height={100 * 2}
                src={`http://localhost:5001/image/${avatarUrl}`}
              />
            )}
          </div>

          <input
            ref={fileInputRef}
            type="file"
            name="fileData"
            onChange={handleFileChange}
          />

          <input type="hidden" name="avatarUrl" value={avatarUrl} />

          <input type="text" name="title" placeholder="Название" />
          <input type="text" name="titleEn" placeholder="Английское название" />
          <textarea name="summary" placeholder="Описание" />
          <input name="type" placeholder="Тип" />
          <input name="year" placeholder="Год релиза" />
          <input name="author" placeholder="Автор" />
          <input name="painter" placeholder="Художник" />
          <input name="tags" placeholder="Теги" />
          <input name="genres" placeholder="Жанры" />
          <input name="format" placeholder="Формат выпуска" />
          <input name="status" placeholder="Статус тайтла" />
          <input name="translate" placeholder="Статус перевода" />
          <button
            onClick={() => {
              handleClear().then(() => navigate("/"));
            }}
            type="submit"
          >
            Загрузить
          </button>
        </form>
      </div>
    </div>
  );
}

export default MangaCreate;
