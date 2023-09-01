import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router";

export const useQueryGetActiveManga = () => {
  const { id } = useParams();
  async function fetchDataBooks() {
    const resData = await axios.get(`/api/manga/${id}`);
    return resData.data;
  }

  return useQuery(["mangaActive"], fetchDataBooks, {
    keepPreviousData: false,
    cacheTime: 0,
  });
};
