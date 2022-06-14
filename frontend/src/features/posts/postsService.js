import axios from 'axios';

const API_URL = '/api/posts/';

const createPost = async (postData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const res = await axios.post(API_URL, postData, config);
  console.log(res.data);
  return res.data;
};

const deletePost = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const res = await axios.delete(API_URL + id, config);

  return res.data;
};

const getMyPosts = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const res = await axios.get(API_URL, config);
  console.log(res.data);

  return res.data;
};

const postsService = {
  getMyPosts,
  deletePost,
  createPost,
};

export default postsService;
