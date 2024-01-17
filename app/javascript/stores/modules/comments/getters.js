export const getComments = (state) => {
  return state.comments;
};

export const getCommentById = (state) => (id = '') => {
  const comment = state.comments.find(comment => comment.id == id);
  if (!comment) return {};

  return { ...comment };
};

export const getDialog = (state) => {
  return state.dialog;
};

export const getAverageRate = (state) => {
  let total_comments = state.comments.length;
  return total_comments == 0 ? 0 : state.comments.map(comment => comment.article_rate).reduce((v1, v2) => v1 + v2) / total_comments;
};