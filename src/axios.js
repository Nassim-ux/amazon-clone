import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  // baseURL: "...",
  baseURL: "http://localhost:5001/clone-78341/us-central1/api",
});

export default instance;
