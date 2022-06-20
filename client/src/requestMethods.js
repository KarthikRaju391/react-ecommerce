import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
// const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNzhlYTBlMjdjNjI2Mzc5MDJiMzU5MCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NTUxNjY3OSwiZXhwIjoxNjU1Nzc1ODc5fQ.36fNv921HhaGmwPbhC_mpgH7aY4w2E1TYQJwVBWgv0I"
  // JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
  //   .accessToken || "";

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
