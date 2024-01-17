export const setCategories = (state, categories) => {
  state.categories = [...state.categories, ...categories];
  state.isLoading = false;
};
