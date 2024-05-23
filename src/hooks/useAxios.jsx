import axios from "axios";

export const axiosComomon = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

const useAxios = () => {
  return axiosComomon;
};

export default useAxios;
