import React, { useCallback, useEffect } from "react";
import { useQueryGetUserData } from "../../hooks/useQueryGetUserData.js";
import "./UserPage-CSS.css";
function UserPage() {
  const text = "wqqwrqwrwr qwr";
  const chars = text.split("");

  const handleKeyDown = useCallback((event) => {
    if (event.keyCode === 81) {
      // выполнить логику при нажатии на клавишу Enter (keyCode 13)
      console.log("Enter key was pressed");
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  const { data, isLoading } = useQueryGetUserData();

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="UserPage-container">
      {chars.map((char) => (
        <label>{char}</label>
      ))}
      {/*{data.loginUser}*/}
    </div>
  );
}

export default UserPage;
