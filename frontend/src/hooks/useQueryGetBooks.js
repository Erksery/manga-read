import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useQueryGetBooks = () => {
  async function fetchDataBooks() {
    const resData = await axios.get(`/api/manga`);
    return resData.data;
  }

  return useQuery(["manga"], fetchDataBooks, { keepPreviousData: true });
};
