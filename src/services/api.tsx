import axios, { AxiosResponse } from "axios";
import { User } from "../types";

const BASE_URL = "https://reqres.in/api";

export const AuthService = {
  async login(email: string, password: string) {
    console.log("GOING INSIDE LOGIN FUNCTION");
    try {
      console.log("GOING INSIDE LOGIN TRY");
      const response = await axios.post(`${BASE_URL}/login`, {
        email,
        password,
      });
      console.log("LOGIN RESPONSE", response.data);
      return response.data;
    } catch (error) {
      console.log("GOING INSIDE LOGIN CATCH");
      throw new Error("Login failed!");
    }
  },

  async register(email: string, password: string) {
    console.log("GOING INSIDE REGISTER FUNCTION");
    try {
      const response = await axios.post(`${BASE_URL}/register`, {
        email,
        password,
      });
      return response.data;
    } catch (error) {
      throw new Error("User already Exists!");
    }
  },
};
