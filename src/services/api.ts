import axios from 'axios';
import { AuthConsts, Auth } from 'src/store/ducks/auth/types';

let headers = {};
const session = localStorage.getItem(AuthConsts.AUTH_SESSION);

if (session) {
  let jsonParser: Auth = JSON.parse(session);
  headers = { Authorization: `bearer ${jsonParser.accessToken}` };
}
const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api',
  headers,
});

export default api;
