<template>
  <div class="list_wrap">
    <div>
      <h4>{{ blogdata[0].title }}</h4>
      <p>{{ blogdata[0].date }}</p>
    </div>
    <div>
      <h4>{{ blogdata[1].title }}</h4>
      <p>{{ blogdata[1].date }}</p>
    </div>
    <div>
      <h4>{{ blogdata[2].title }}</h4>
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
  .list_wrap > div{
    border-bottom: 1px solid #eee;
    margin: 30px;
    padding-bottom: 15px;
  }
</style>