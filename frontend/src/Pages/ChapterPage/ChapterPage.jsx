import React from "react";
import "./ChapterPage.css";

import { useQueryGetActiveChapter } from "../../hooks/useQueryGetActiveChapter.js";

function ChapterPage() {
  const { data, isLoading } = useQueryGetActiveChapter();

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (data.length === 0) {
    return <h2>Данные отсутствуют</h2>;
  }
  const arrayImage = JSON.parse(data.imagesChapter);

  return (
    <div className="ChapterPage">
      <div className="Reader-view">
        {arrayImage.map((item, index) => (
          <img
            key={index}
            width={600}
            src={`http://localhost:5001/image/${item}`}
            loading="lazy"
            alt="..."
          />
        ))}
      </div>
    </div>
  );
}

export default ChapterPage;
