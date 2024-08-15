const express = require('express');
const app     = express();
const port    = 443;

app.get('/', (req, res) => {
  res.send('Любишь пельмени?');
});

app.listen(port, () => {
  console.log(`Пример приложения слушающего порт ${port}`);
});