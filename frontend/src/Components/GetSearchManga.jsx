import { useEffect, useState } from "react";
import axios from "axios";

// eslint-disable-next-line react/prop-types
function GetSearchManga({ searchValue }) {
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    if (searchValue != "") {
      const fetchManga = async () => {
        const resData = await axios.get("/api/searchManga", {
          params: { value: searchValue },
        });

        setSearchData(resData.data);
      };
      fetchManga().then();
    }
  }, [searchValue]);

  return (
    <>
      {searchData.map((item) => (
        <div key={item.idManga} className="Card-item">
          <img
            width={60}
            height={80}
            src={`http://localhost:5001/image/${item.coverImageManga}`}
          />
          <div className="Card-item-info">
            <label>{item.titleManga}</label>
            <p>Solo leveling</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default GetSearchManga;
