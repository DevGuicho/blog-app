import { vModelSelect } from 'vue';

export const getArticles = (state) => {
  if (state.query === '')
    return state.articles;
  else
    return state.articles.filter(article => article.title.toLowerCase().includes(state.query.toLowerCase()));
};

export const getArticleById = (state) => (id = '') => {

  const article = state.articles.find(article => article.id == id);

  if (!article) return null;

  return { ...article };
};