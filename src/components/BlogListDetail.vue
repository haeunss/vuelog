<template>
{{$route.params.id}}
  <div>
    <h4>{{ blogdata[$route.params.id].title }}</h4>
    <h4>{{ blogdata[$route.params.id].content }}</h4>
  </div>
</template>

<script>
export default {
    name:'BlogListDetail',
    data(){
        return{}
    },
    props:{
        blogdata: Array,
    }
}
</script>

<style>

</style>