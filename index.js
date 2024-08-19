const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors')
const app = express()
const port = 3000
const bookRoutes = require('./routes/bookRoutes')
const authorRoutes=require('./routes/authorRoutes')
const authorRoutes=require('./routes/authorRoutes')
app.use(cors())

app.use('/books', bookRoutes)
app.use('/authors', authorRoutes)
app.use('/auth',authRoutes) 


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})




main().then(()=>console.log("connected")).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://pkarjunsiva:<password>@cluster0.5oy1pxc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}