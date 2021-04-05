<template>
  <div class="container">
    <div class="row">
      <div class="col-sm align-self-center">
        <h4 class="text-right">{{article_obj.title_text}}</h4>
      </div>
      <div class="col-sm">
        <img :src="imgPath(article_obj.title_picture)" class="img-thumbnail float-left w-50">
      </div>
    </div>
  </div>
</template>

<script>
var images = require.context('../../../../assets/', false, /\.jpg$/)

export default {
  props: {
    article_obj: Object,
  },
  components: {
    
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
