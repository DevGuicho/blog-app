export const setArticles = (state, articles) => {
  state.articles = [...state.articles, ...articles];
  state.isLoading = false;
};

export const setCategories = (state, categories)=>{
  state.categories = [...state.categories, ...categories]
  state.isLoading = false
}