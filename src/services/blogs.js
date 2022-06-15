import axios from "axios";

let baseUrl = "/api/blogs";

const getAllBlogs = () => {
  return axios.get(baseUrl);
};

const createBlogs = (item) => {
  return axios.post(baseUrl, item);
};

const updateBlogs = (id, newObj) => {
  return axios.put(`${baseUrl}/${id}`, newObj);
};

const deleteBlogs = (id) => {
  return axios.delete(`${baseUrl}/${id}`);
};

let blogcrud = {
  getAllBlogs,
  createBlogs,
  updateBlogs,
  deleteBlogs,
};

export default blogcrud;
