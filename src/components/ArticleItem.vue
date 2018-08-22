<template id="">
<div class="" :article="article">
{{article}}
</div>
</template>
<script type="text/javascript">
  import api from '../axios/api'
  export default{
    name:'ArticleItem',
    data(){
      return {
        article:{}
      }
    },
    methods:{
      // getArticle:function(){
      //   api.getData('/news/id',this.$route.params.id).then(res=>{
      //     this.article=res
      //   })
      // }
    }
  }
</script>
<style media="screen">

</style>
