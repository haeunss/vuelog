<template>
  <div class="nav">
    <div class="nav_l">
      <router-link to="/"><h1>Vuelog</h1></router-link>
      <router-link to="/Bloglist" :blogdata="blogdata" class="menu">List</router-link>
      <p class="menu">Post</p>
      <p class="menu">Setting</p>
    </div>
    <div class="nav_r">
      <img class="search" src="./image/search.png" alt="검색이미지">
      <img class="profile" src="./image/profile.png" alt="프로필이미지">
    </div>
  </div>

  <router-view :blogdata="blogdata"></router-view>

</template>

<script>
// import BlogList from './components/BlogList.vue'
import BlogData from './assets/data.js'

export default {
  name: 'App',
  data(){
    return{
      blogdata: BlogData
    }
  },
  components: {
    // BlogList,
  }
}
</script>

<style>
  body,h1,div,a,input{
    margin:0;
    padding:0;
    color: black;
    text-decoration: none;
  }
  .nav{
    background-color: #fff;
    height: 100px;
    line-height: 4em;
    padding-left: 150px;
    padding-right: 150px;
    box-shadow: 0px 8px 6px -6px #666;
    margin-bottom: 80px;
  }
  .nav_l{
    width: 500px;
    float: left;
  }
  .nav_r{
    width: 140px;
    float: right;
  }
  .nav_l > a,
  .nav_l > p{
    display: inline-block;
  }
  .nav_l > a > h1{
    margin-right: 50px;
  }
  .nav_l > .menu{
    margin-right: 25px;
    font-size: 20px;
    font-weight: bold;
    color: #aaa;
  }
  .nav_l > .menu:hover{
    color: black;
    cursor: pointer;
  }
  .nav_r > img{
    display: inline-block;
    margin-top: 25px;
    cursor: pointer;
  }
  .nav_r > .search{
    margin-right: 25px;
    width: 40px;
    height: 40px;
  }
  .nav_r > .profile{
    margin-right: 25px;
    width: 45px;
    height: 45px;
  }
</style>
