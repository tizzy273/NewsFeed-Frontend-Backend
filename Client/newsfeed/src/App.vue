<template>
  
  <NewsFeed msg="Welcome to Your Vue.js App"/>
</template>

<script>
import NewsFeed from './components/newsfeed.vue'


export default {
  name: 'App',
  components: {
    NewsFeed
  },

//console.log("CIAO");


}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Cabin&display=swap'");

html, body
{
    font-family: 'Cabin', sans-serif;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
}



#app {
  
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  top: 0;
  margin:0px;


}
</style>
