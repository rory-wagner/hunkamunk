<template>
  <div>
    <h1>{{article_obj.title_text}}</h1>
    <img :src="article_obj.title_picture">
  </div>
</template>

<script>
//once the box is clicked: display the articleDisplay page after retrieving the article object and passing it in.
export default {
  props: {
    article_obj: Object,
  },
  components: {
    
  },
  computed: {
    
  },
  methods: {
    
  }
}
</script>
