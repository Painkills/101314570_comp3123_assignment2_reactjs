import axios from "axios";

export default axios.create({
  baseURL: "https://101314570-comp-3123-backend.vercel.app/api",
  headers: {
    "Access-Control-Allow-Origin": "*"
    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
    "Access-Control-Allow-Methods": ["GET", "POST", "OPTIONS", "PUT", "DELETE"]
    Authorization: 'Bearer DtLDDYNQAbRO48QmFJO9pssD',
    "Content-type": "application/json"
  }
});
