import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router";

export const useQueryGetActiveChapter = () => {
  const { id, idUser } = useParams();
  async function fetchDataBooks() {
    const resData = await axios.get(`/api/manga/${id}/chapters/${idUser}`);
    return resData.data;
  }

  return useQuery(["chapterActive"], fetchDataBooks, {
    keepPreviousData: false,
    cacheTime: 0,
  });
};
