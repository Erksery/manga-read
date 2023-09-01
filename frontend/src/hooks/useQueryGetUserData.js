import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router";

export const useQueryGetUserData = () => {
  const { id } = useParams();
  async function fetchData() {
    const resData = await axios.get(`/api/user/${id}`);
    return resData.data;
  }

  return useQuery(["userData"], fetchData, { keepPreviousData: true });
};
