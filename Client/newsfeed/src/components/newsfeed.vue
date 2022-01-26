<template class>
<div class="background-image"></div>
<div>
  <div class="navbar">
    <div class = "logo">
      <img src="https://image.flaticon.com/icons/png/512/21/21601.png" alt="" height="100">
      <span style = "font-weight: bold; color: #EFDBC1; font-size: 40px">Feed</span>
    </div>
  <button v-on:click = SortByTitle class = "sortByTitle">
    Sort By Title
  </button>
  <button v-on:click = SortByDate class = "sortByDate">
    Sort By Date
  </button>
  <div class = "dropdown" >
    <button class = "filterByAuthor">
      Filter by Author
      <div class="dropdown-content" >
        <label class="container_filter" v-on:click ="FilterByAuthor(article.author)"  v-for="(article, index) in articles" :key="index">{{article.author}}
            <input type="checkbox"  id = "author_checkbox">
            <span class="checkmark"></span>
        </label>
      </div>
    </button>
  </div>
  </div>
  <div class = "newsfeed">
<div v-for="(article, index) in articles" :key="index">
  <div class="container_article">
    <p class = "title"> {{article.title}} </p>
    <div class = "preview_container">
    <a :href="article.url">
    <img :src="article.urlToImage" alt="" class = "preview">
      <div class = "overlay">
          <div class="description"> {{article.description}} </div> 
      </div>
    </a>
    </div>
    <p class = "author"> {{article.author}} </p>
    <p class = "publishedAt"> {{article.publishedAt}}</p>
  </div>
 </div>
 </div>
</div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'NewsFeed',

data(){
  return {
     articles: []

  }
},

created()
{
  
axios.get('http://localhost:3000/newsfeed')
  .then((response) => {
    // handle success
   // console.log(response.data);
    this.articles = response.data.articles;
    console.log(this.articles);
  })
  .catch((error) => {
    console.log(error.response);
  })
},

methods:
{
  SortByTitle()
  {
      this.articles.sort(function(a, b){
          if(a.title < b.title) { return -1; }
          if(a.title > b.titles) { return 1; }
          return 0;
      });
  },

  SortByDate()
  {
    this.articles.sort(function(a, b){
              if(new Date(a.publishedAt) < new Date(b.publishedAt)) { return 1; }
              if(new Date(a.publishedAt) > new Date(b.publishedAt)) { return -1; }
              return 0;
          });
  },

  FilterByAuthor(author)
  {
    const cb = document.querySelector('#author_checkbox');
    console.log(cb.checked + author);
  }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>




.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 12px 16px;
  z-index: 1;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.container_filter
{
  font-size: 20px;
}

.container_article
{
 text-align: center;
  position: relative;
  width: 700px;
  margin: 150px;
  
}

.author_button:focus
{
  color: red;
}

.newsfeed
{
  display: flex;

  justify-content: center;
  flex-wrap: wrap;
}



.background-image {
  position: fixed;
  left: 0;
  right: 0;
  z-index: -1;
  display: block;
  height: 100%;
  width:100%;
  background-image: url("https://image.freepik.com/free-vector/realistic-vintage-papers_1284-25431.jpg");;
  -webkit-filter: blur(5px);
  -moz-filter: blur(5px);
  -o-filter: blur(5px);
  -ms-filter: blur(5px);
  filter: blur(5px);
}

.title
{
  
  max-width: 700px;
  color: black;
  font-weight: bold;
  font-size: 25px;
  position: absolute;
  bottom:400px;
  border: 1 px solid black;
 
}


.preview_container
{
  position: relative;
  width: 700px;
}

.preview
{
    object-fit: cover;
    width:  100%;
    height: 400px;
    border-radius: 3%;
    box-shadow: 5px 10px rgba(0, 0, 0, 0.8);
 
}


.overlay
{
  position: absolute;
  top: 0;
  left:0;
  width:100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  box-shadow: 5px 10px rgba(0, 0, 0, 0.8);
  border-radius :3%;
  opacity: 0;
  transition: opacity 0.25s;
  text-align: center;
}

.overlay:hover
{
  opacity: 1;
}

.description
{
  position: absolute;
  bottom: 40px;
  font-size:25px;
  margin-bottom: 20px;
  z-index: 2;
  color: white;
  padding: 5px;
    text-shadow: 2px 2px rgba(0,0,0,0.4)
}

.author
{
  position: absolute;
  left: 0;
  top: 405px;
  font-size: 18px;
 
}



.publishedAt
{
  position: absolute;
  font-size: 18px;
  right: 0;
  top: 405px;
}





.sortByTitle, .sortByDate, .filterByAuthor
{
  width: 200px;
  height: 70px;
  border:none;
  color: #EFDBC1;
  border-radius: 30%;
  background: rgba(0, 0, 0, 0.1);
  transition: ease-out 0.3s;
  font-size: 25px;
  font-weight: bold;
  outline: none;
  margin: 20px;
  border: 2px  solid black;
  
  position: relative;
  
  z-index: 1;
}

.sortByTitle:hover, .sortByDate:hover
{
  columns: white;
  cursor: pointer;
  
}


.filterByAuthor:hover
{
  cursor: default;
}


.sortByTitle:before, .sortByDate:before, .filterByAuthor:before
{
  transition: 0.5s all ease;
  position: absolute;
  top: 0;
  left: 50%;
  right: 50%;
  bottom: 0;
  opacity: 0;
  content: "";
  background-color: #996c0a;
  border-radius: 30%;
}

.sortByTitle:hover:before, .sortByDate:hover:before, .filterByAuthor:hover:before
{
  transition: 0.5s all ease;
  left: 0;
  right: 0;
  opacity: 1;
  z-index: -1;
}


@media screen and (min-width: 899.1px){

.navbar
{
    display: flex;
    padding: 15px;
    background-color: rgba(0, 0, 0, 0.6);
    justify-content: space-around;
}
}


@media screen and (min-width: 0px) and (max-width: 899px){
     .navbar
    {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 15px;
        background-color: rgba(0, 0, 0, 0.6);
        justify-content: center;
    }  
}


</style>
