<template>
  <div class="nav">
    <h1>Vuelog</h1>
  </div>
  <main>
    <h2>eunie___day의 blog입니다.</h2>
    <p>- vue로 제작되었습니다. -</p>
  </main>

  <BlogList :blogdata="blogdata" />
</template>

<script>
import BlogList from './components/BlogList.vue'
import BlogData from './assets/data.js'

export default {
  name: 'App',
  data(){
    return{
      blogdata: BlogData
    }
  },
  components: {
    BlogList,
  }
}
</script>

<style>
  body,h1,div{
    margin:0;
    padding:0
  }
  .nav{
    background-color: rgb(246, 246, 246);
    height:70px;
    line-height: 4em;
    padding-left: 15px;
  }
  main{
    text-align: center;
  }
</style>
