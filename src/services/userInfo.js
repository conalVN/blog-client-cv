import axiosConfig from "../axiosConfig";

export const userInfo = (token) => {
  console.log(token);
  axiosConfig
    .post(`/api/user/verify`, { token })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.log(error));
};
