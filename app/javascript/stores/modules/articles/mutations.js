export const setArticles = (state, articles) => {
  state.articles = [...articles];
  state.isLoading = false;
};

export const addEntry = (state, article) => {
  state.articles = [article, ...state.articles];
};

export const editArticle = (state, article) => {
  const indx = state.articles.map(article => article.id).indexOf(article.id);
  state.articles[indx] = article;
};

export const removeArticle = (state, article_id) => {
  state.articles = state.articles.filter(article => article.id != article_id);
};

export const updateQuery = (state, query) => {
  state.query = query;
};