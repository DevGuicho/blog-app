import articleApi from '@/api/articleApi';

export const loadArticles = async ({ commit }) => {
  const { data: res } = await articleApi.get('/');

  commit('setArticles', res.data);
};


