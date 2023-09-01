import React from "react";
import { useQueryGetUserData } from "../../hooks/useQueryGetUserData.js";

function UserPage() {
  const { data, isLoading } = useQueryGetUserData();

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return <div className="UserPage-container">{data.loginUser}</div>;
}

export default UserPage;
