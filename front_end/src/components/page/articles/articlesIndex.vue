<template>
  <div>
    <h1>Articles</h1>
    <div v-if="!this.article_is_selected">
      <div v-for="(article_obj, index) in dataArticles" v-on:click="select(article_obj)" :key="index">
        <ArticleBox v-bind:article_obj="article_obj">
        </ArticleBox>
      </div>
    </div>
    <div v-if="this.article_is_selected">
      <button v-on:click="deselect()">
        Back to List
      </button>
      <ArticleDisplay v-bind:article_obj="article_object">
      </ArticleDisplay>
    </div>
  </div>
</template>

<script>
import articles from './article_paths.es6';
import ArticleBox from './article_box/articleBox';
import ArticleDisplay from './article_box/articleDisplay';

export default {
  name: 'Articles',
  data() {
    return {
      dataArticles: articles,
      article_is_selected: false,
      article_object: {},
    }
  },
  methods:{
    select(article_obj) {
      this.article_is_selected = true;
      this.article_object = article_obj;
    },
    deselect(){
      this.article_is_selected = false;
    }
  },
  components: {
    ArticleBox,
    ArticleDisplay,
  },
  props: {

},
  computed: {

  }
}
</script>
