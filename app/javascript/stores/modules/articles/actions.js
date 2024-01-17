import blogApi from '@/api/blogApi';

export const loadArticles = async ({ commit }) => {
  const { data: res } = await blogApi.get('/articles');

  commit('setArticles', res.data);

};

export const loadCategories = async ({ commit }) => {
  const { data: res } = await blogApi.get('/categories');

  commit('setCategories', res.data);

};


