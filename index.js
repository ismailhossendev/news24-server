const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000
app.use(cors())

const news = require('./news.json')
const categories = require('./categories.json')


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