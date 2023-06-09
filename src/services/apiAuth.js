import axios from "axios";

const BASE_URL = "http://localhost:5000" || process.env.BASE_URL ;

function signIn(body) {
  const promise = axios.post(`${BASE_URL}/`, body);
  return promise;
}

function signUp(body) {
  const promise = axios.post(`${BASE_URL}/cadastro`, body);
  return promise;
}

const apiAuth = { signIn, signUp };
export default apiAuth;