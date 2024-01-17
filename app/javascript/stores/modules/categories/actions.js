import categoryApi from '@/api/categoryApi';

export const loadCategories = async ({ commit }) => {
  const { data: res } = await categoryApi.get('/');

  commit('setCategories', res.data);
};
