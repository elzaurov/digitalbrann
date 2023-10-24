import axios from "axios";
import MockAdapter from "axios-mock-adapter";

export const axiosClient = axios.create({
  baseURL: "http://localhost:8000/api",
  timeout: 1000,
  headers: { Accept: "application/json", "Content-Type": "application/json" },
});

export const mockAdapter = new MockAdapter(axiosClient, {
  delayResponse: 1000,
});
