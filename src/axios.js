import axios from "axios";

const axiosDatabase = axios.create({
  baseURL: "https://abdomyisland.firebaseio.com/"
});

export default axiosDatabase;
