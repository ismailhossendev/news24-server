const express = require('express')
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors')
const app = express()
const port = 5000
app.use(cors())
app.use(express.json())

const news = require('./news.json')
const categories = require('./categories.json')

//user - dbuser1
// pass - xJQUOJMGocXgKXso

const afterNews = []


const uri = "mongodb+srv://dbuser1:xJQUOJMGocXgKXso@cluster0.odx3u2z.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
  const collection = client.db("news24").collection("news")

async function run(){
  try{

  }
  finally{
    
  }
}
  
app.post('/news',(req,res)=>{
  let i = 0
  const newNews = req.body;
  newNews.id = afterNews.length +1;
  afterNews.push(newNews)
  console.log(afterNews);
  res.send(newNews)
})


app.get('/', (req, res) => {
  res.send('BD News World!')
})

//this is news section 
app.get('/news',(req,res) =>{
  res.send(news)
})

app.get('/news/:id',(req,res) =>{
  const id = req.params.id;
  const singleNews = news.find(n => n._id === id)
  if(!singleNews){
    res.send('not found')
    return
  }
  res.send(singleNews);
})

//this is categories section 
app.get('/categories',(req,res)=>{
  res.send(categories);
})

app.get('/categories/:id',(req,res)=>{
  const id = req.params.id;
  if(id === "08"){
    res.send(news)
    return
  }
  const selected = news.filter(c => c.category_id === id);
  res.send(selected)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})