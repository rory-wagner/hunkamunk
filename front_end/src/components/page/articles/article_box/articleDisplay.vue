<template>
  <div>
    <h1>{{article_obj.title_text}}</h1>
    <img :src="article_obj.title_picture">
    <div>
      <div v-for="(part, index) in article_obj.article_parts" :key="index">
        <p v-if="part.type == 'p'">
          {{part.text}}
        </p>
        <img v-else :src="part.path">
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ArticlesDisplay',
  props: {
    article_obj: Object,
  },
  computed: {

  }
}
</script>
