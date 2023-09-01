import React from "react";
import { useQueryGetBooks } from "../hooks/useQueryGetBooks.js";

function FetchBooks() {
  const { data, isLoading } = useQueryGetBooks();

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (data.length === 0) {
    return <h2>Данные отсутствуют</h2>;
  }

  return (
    <div>
      {data.map((book) => (
        <h2 key={book.idUser}>{book.loginUser}</h2>
      ))}
    </div>
  );
}

export default React.memo(FetchBooks);
