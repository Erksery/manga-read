import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import {useParams} from "react-router";

export const useQueryCreateChapter = () => {
    const queryClient = useQueryClient();
    const {id} = useParams()

    async function createProduct(data) {
        return axios.post(`/api/manga/${id}/createChapters`, data);
    }

    return useMutation((newProduct) => createProduct(newProduct), {
        onSuccess: () => queryClient.invalidateQueries(["chapterCreate"]),
        onError: () => alert("404"),
    });
};
