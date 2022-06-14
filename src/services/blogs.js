import axios from "axios";

let baseUrl = "http://localhost:3001/blogs";

const getAll = () => {
  return axios.get(baseUrl);
};

const create = (item) => {
  return axios.post(baseUrl, item);
};

const update = (id, newObj) => {
  return axios.update(`${baseUrl}/${id}`, newObj);
};

export default {
  getAll,
  create,
  update,
};
