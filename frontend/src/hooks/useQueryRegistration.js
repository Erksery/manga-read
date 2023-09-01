import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const useQueryRegistration = () => {
  async function registrationUser(data) {
    return axios.post("/api/registration", data);
  }

  return useMutation((newUser) => registrationUser(newUser));
};
