<template>
  <div class="list_wrap">
    <!-- <router-link to="/BlogListDetail/0"> -->
      <div>
        <h4 @click="$router.push('/BlogListDetail/0')">{{ blogdata[0].title }}</h4>
        <p>{{ blogdata[0].date }}</p>
      </div>
    <!-- </router-link> -->
    <div>
      <h4 @click="$router.push('/BlogListDetail/1')">{{ blogdata[1].title }}</h4>
      <p>{{ blogdata[1].date }}</p>
    </div>
    <div>
      <h4 @click="$router.push('/BlogListDetail/2')">{{ blogdata[2].title }}</h4>
      <p>{{ blogdata[2].date }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name:'BlogList',
  data(){
    return{
    }
  },
  props:{
    blogdata: Array,
  }
}
</script>

<style>
  .list_wrap > div,.list_wrap > a > div{
    border-bottom: 1px solid #eee;
    margin: 40px 150px;
    padding-bottom: 25px;
  }
</style>