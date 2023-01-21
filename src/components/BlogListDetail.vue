<template>
{{$route.params.id}}
  <div>
    <h4>{{ blogdata[$route.params.id].title }}</h4>
    <h4>{{ blogdata[$route.params.id].content }}</h4>
  </div>
  <router-view></router-view>
  <!-- <router-view name="BlogAuthor"></router-view> -->
  <!-- <router-view name="BlogComment"></router-view> -->
  <BlogComment/>
</template>

<script>
import BlogComment from './BlogComment.vue'

export default {
    name:'BlogListDetail',
    data(){
        return{}
    },
    props:{
        blogdata: Array,
    },
    components:{
        BlogComment,
    }
}
</script>

<style>

</style>