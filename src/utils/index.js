import axios from "axios";

export const imgUpload = () => {
  const formData = new FormData();
  formData.append("image", image);
  const { data } = axios.post(
    `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB}`,
    formData
  );
//   console.log(data.display_url);
  return data.data.display_url;
};
