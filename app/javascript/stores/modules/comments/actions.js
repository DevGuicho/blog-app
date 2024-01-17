import commentApi from '@/api/commentApi';

export const loadComments = async ({ commit }, article_id) => {
  const { data: res } = await commentApi.get(`/${article_id}/comments`);

  commit('setComments', res.data);
};

export const createComment = async ({ commit }, { article_id, comment }) => {
  const { data: res } = await commentApi.post(`/${article_id}/comments`, comment);

  commit('addComment', res.data);
};

export const updateComment = async ({ commit }, { article_id, comment }) => {
  const { data: res } = await commentApi.put(`/${article_id}/comments/${comment.id}`, comment);

  commit('editComment', res.data);
};
export const deleteComment = async ({ commit }, { article_id, comment_id }) => {
  await commentApi.delete(`/${article_id}/comments/${comment_id}`);

  commit('removeComment', comment_id);
};

export const showDialog = ({ commit }, dialog) => {
  commit('setDialog', dialog);
};