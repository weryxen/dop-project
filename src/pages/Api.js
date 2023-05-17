import axios from "axios";
import { users } from "./Link";

export const ApiGetUser = axios.create({
  baseURL: users,
});

export const ApiGetBasket = axios.create({
  baseURL: users,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${JSON.parse(localStorage.getItem("token")).access}`,
  },
});
