<template>
  <div>
    <h1>{{article_obj.title_text}}</h1>
    <img :src="imgPath(article_obj.title_picture)">
    <div>
      <div v-for="(part, index) in article_obj.article_parts" :key="index">
        <p v-if="part.type == 'p'">
          {{part.text}}
        </p>
        <img v-else :src="imgPath(part.path)">
      </div>
    </div>
  </div>
</template>

<script>
var images = require.context('../../../../assets/', false, /\.jpg$/)

export default {
  name: 'ArticlesDisplay',
  props: {
    article_obj: Object,
  },
  computed: {

  },
  methods: {
    imgPath: function (path) {
      return images('./' + path)
    }
  }
}
</script>
