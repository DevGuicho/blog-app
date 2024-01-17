export const getCategories = (state) => {
  return state.categories;
};

export const getCategoryById = (state) => (id = '') => {
  return state.categories.filter(category => category.id == id)[0] || {};
};
