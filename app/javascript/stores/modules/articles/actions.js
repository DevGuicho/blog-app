import articleApi from '@/api/articleApi';

export const loadArticles = async ({ commit }) => {
  const { data: res } = await articleApi.get('/');

  commit('setArticles', res.data);
};

export const createArticle = async ({ commit }, article) => {

  const { data: res } = await articleApi.post('/', article);
  commit('addEntry', res.data);
  return res.data.id;
};

export const updateArticle = async ({ commit }, article) => {

  const { data: res } = await articleApi.put(`/${article.id}`, article);
  commit('editArticle', res.data);
  return res.data.id;
};

export const deleteArticle = async ({ commit }, article_id) => {
  await articleApi.delete(`/${article_id}`);
  commit('removeArticle', article_id);
};

export const updateQuery = ({ commit }, query) => {
  commit('updateQuery', query);
};