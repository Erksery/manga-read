import React from "react";
import "./Home-CSS.css";
import GetManga from "../../Components/GetManga/GetManga.jsx";

function HomePage() {
  return (
    <div className="HomePage-container">
      <h2>Новенькое на сайте</h2>
      <GetManga />
    </div>
  );
}

export default HomePage;
