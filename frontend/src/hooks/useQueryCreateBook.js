import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const useQueryCreateBook = () => {
  const queryClient = useQueryClient();

  async function createProduct(file) {
    const formData = new FormData();
    formData.append("fileData", file);
    console.log(formData);
    return axios.post("/api/uploadImage", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  return useMutation((newProduct) => createProduct(newProduct), {
    onSuccess: () => queryClient.invalidateQueries(["manga"]),
    onError: () => alert("404"),
  });
};
