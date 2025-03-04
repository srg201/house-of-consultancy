import axios from "axios";

const StrapiApi = axios.create({
  baseURL: process.env.API_URL,
});

export default StrapiApi;
