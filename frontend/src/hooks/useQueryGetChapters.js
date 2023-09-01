import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router";

export const useQueryGetChapters = () => {
  const { id } = useParams();
  async function fetchData() {
    const resData = await axios.get(`/api/manga/${id}/chapters`);
    return resData.data;
  }

  return useQuery(["chapters"], fetchData, { keepPreviousData: true });
};
