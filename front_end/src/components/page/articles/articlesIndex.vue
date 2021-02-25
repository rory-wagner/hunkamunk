<template>
  <div>
    <h1>Articles</h1>
    <ArticleBox v-for="article in dataArticles" v-bind:title="article" :key="article">
    </ArticleBox>
  </div>
</template>

<script>
import articles from './article_paths.es6';
import ArticleBox from './article_box/articleBox';

export default {
  name: 'Articles',
  data() {
    return {dataArticles: articles}
  },
  components: {
    ArticleBox,
  },
  props: {
    msg: String
  },
  computed: {

  }
}
</script>
