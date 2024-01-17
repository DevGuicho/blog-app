export const setComments = (state, comments) => {
  state.comments = [...comments];
  state.isLoading = false;
};

export const addComment = (state, comment) => {
  state.comments = [comment, ...state.comments];
  state.isLoading = false;
};

export const editComment = (state, comment) => {
  const indx = state.comments.map(comment => comment.id).indexOf(comment.id);
  state.comments[indx] = comment;
};

export const removeComment = (state, comment_id) => {
  state.comments = state.comments.filter(comment => comment.id != comment_id);
  state.isLoading = false;
};
export const setDialog = (state, dialog) => {
  state.dialog = dialog;
};
