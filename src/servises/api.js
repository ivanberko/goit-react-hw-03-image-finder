import axios from "axios";

const baseUrl = "https://pixabay.com/api";
const apiKey = "13689220-f8624404383f6a2586dfba74c";

export const axiosArticles = (query, page) => {
  const requestParams = `/?image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=12&key=${apiKey}`;
  return axios.get(`${baseUrl}${requestParams}`).then((res) => {
    return res.data.hits;
  });
};
