import axios from "axios";

const BASE_URL = "https://dummyjson.com/products";

export const getProducts = async () => {
  const res = await axios.get(`https://dummyjson.com/products`);
  return res.data;
};

export const getProduct = async (id) => {
  const res = await axios.get(`${'https://dummyjson.com/products'}/${id}`);
  return res.data;
};
