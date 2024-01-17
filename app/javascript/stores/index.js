import { createStore } from 'vuex';
import articles from '@/stores/modules/articles';
import categories from '@/stores/modules/categories';
import comments from '@/stores/modules/comments';

const store = createStore({
  modules: {
    articles,
    categories,
    comments,
  },
});

export default store;
