import axios from "axios";

export const makeModelsPost = async (postData) => {
  const res = await axios.post("http://127.0.0.1:5000/models", postData);
  const data = await res.data;

  return data;
};
