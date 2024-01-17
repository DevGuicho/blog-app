import ArticlePage from '@/views/website/ArticlePage.vue';

import NewArticlePage from '@/views/website/NewArticlePage.vue';

const Index = () => import('@/views/website/IndexPage.vue');
const About = () => import('@/views/website/AboutPage.vue');

const routes = [
  {
    path: '/',
    name: 'index',
    components: {
      default: Index,
    },
  },
  {
    path: '/about',
    name: 'about',
    components: {
      default: About,
    },
  },
  {
    path: '/articles/:id',
    name: 'article',
    component: ArticlePage,
    props: (route) => ({
      id: route.params.id,
    }),
  },
  {
    path: '/articles/new',
    name: 'newArticle',
    component: NewArticlePage,
  },
  {
    path: '/articles/edit/:id',
    name: 'editArticle',
    component: NewArticlePage,
    props: (route) => ({
      id: route.params.id,
    }),
  },
];

export default routes;
