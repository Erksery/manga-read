import "./App.css";
import { Route, Routes } from "react-router";
import HomePage from "./Pages/Home/HomePage.jsx";
import MangaCreate from "./Pages/MangaCreate/MangaCreate.jsx";
import HeaderPage from "./Components/Header/HeaderPage.jsx";
import MangaPage from "./Pages/MangaPage/MangaPage.jsx";
import ChapterPage from "./Pages/ChapterPage/ChapterPage.jsx";
import ChapterCreate from "./Pages/ChapterCreate/ChapterCreate.jsx";
import MangaTabs from "./Pages/MangaTabs/MangaTabs.jsx";
import { useEffect, useState } from "react";
import MangaCatalog from "./Pages/MangaCatalog/MangaCatalog.jsx";
import RegistrationPage from "./Pages/RegistrationPage/RegistrationPage.jsx";
import AuthorizationPage from "./Pages/AuthorizationPage/AuthorizationPage.jsx";
import UserPage from "./Pages/UserPage/UserPage.jsx";

function App() {
  const [isVisible, setIsVisible] = useState(true);
  const [previousScrollPosition, setPreviousScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.pageYOffset;

      if (currentScrollPosition > previousScrollPosition) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setPreviousScrollPosition(currentScrollPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [previousScrollPosition]);

  return (
    <div>
      <HeaderPage isVisible={isVisible} />
      <div className="Content-container">
        <Routes>
          <Route path={"/"} element={<HomePage />} />
          <Route path={"/registration"} element={<RegistrationPage />} />
          <Route path={"/sing-in"} element={<AuthorizationPage />} />
          <Route path={"/user/:id"} element={<UserPage />} />
          <Route path={"/manga/:id/:select"} element={<MangaPage />} />
          <Route path={"/catalog"} element={<MangaCatalog />} />
          <Route path={"/create"} element={<MangaCreate />} />
          <Route path={"/manga/:id"} element={<MangaPage />} />
          <Route
            path={"/manga/:id/chapters/:idUser"}
            element={<ChapterPage />}
          />
          <Route
            path={"/manga/:id/createChapters"}
            element={<ChapterCreate />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
