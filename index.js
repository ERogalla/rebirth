const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Testing')
})

app.listen(process.env.PORT || 3000, () => {
  console.log('this is my change')
})