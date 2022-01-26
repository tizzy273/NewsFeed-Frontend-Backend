import fetch from "node-fetch";

import express, { json } from "express"

import cors from "cors"
//const { request } = require('express');
//const express = require('express');

function getWordsNumber(author)
{
  if(author !== null) 
    return author.split(" ").length;
  else
    return 0;
}


function filterJson(json)
{
  for(let i = 0; i < json.articles.length; i++)
  {
    let wordsNumber = getWordsNumber(json.articles[i].author)
    console.log(wordsNumber);
      if(wordsNumber < 2  || wordsNumber >3 )
       {
         
         json.articles.splice(i,1);
         i--;
         
       }
       
  }
  
  console.log("FINE");
  return json;
}



const port = 3000;

const app = express();

app.get('/', function(req, res) {
    res.send('hello world');
  });

app.use(cors({
  origin: 'http://127.0.0.1:8080',
}))

app.get('/newsfeed', async (request, response) => {

const api_url = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=c960798aebc84d32926b4ae341333c17';
const fetch_response = await fetch(api_url);
let json = await fetch_response.json();


json = filterJson(json);
response.json(json);




})

app.listen(port);