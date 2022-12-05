import axios from "axios";

export default axios.create({
  baseURL: "https://101314570-comp-3123-backend.vercel.app/api",
  headers: {
    "Content-type": "application/json"
  }
});
