// hello.js
const express = require('express');
const app = express();

const { fork } = require("child_process")


app.get('/', (req, res) => {
  fork('./mutiProcess/mainProcess.js')
  res.send('Hello, PM2!');
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
