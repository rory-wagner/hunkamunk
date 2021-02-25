import About from './components/page/about/aboutIndex.vue';
import Articles from './components/page/articles/articlesIndex.vue';

import ArticleBox from './components/page/articles/article_box/articleBox.vue';
import ArticleDisplay from './components/page/articles/article_box/articleDisplay.vue';

export default [
  { path: '', redirect: { name: 'about' } },
  {
    path: '/about/',
    component: About,
    name: 'about',
  },
  {
    path: '/articles/',
    component: Articles,
    children: [
      {
        path: '',
        component: ArticleBox,
        name: 'boxes',
      },
      {
        path: 'display',
        component: ArticleDisplay,
        name: 'box_display',
      },
    ],
  },
];
