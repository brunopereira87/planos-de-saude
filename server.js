const express = require('express');
const app = express();
const cors = require('cors')
const { resolve } = require('path');

app.use('/',express.static(
  resolve(__dirname, './dist')
));

app.use(cors);
app.listen(process.env.PORT || 3000, err => {
  if(err) return console.log(err);

  console.log('App running')
})