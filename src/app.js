const express = require("express");
const serverless = require("serverless-http");
const app = express();
// const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send("ACCEDIENDO AL MAIN PRINCIPAL.");
});

app.get('/product-details', (req, res) => {
  res.send("Estas accediendo a la lista de detalles de productos");
});

app.get('/product-last', (req, res) => {
  res.send("Estas accecediendo a los ultimos productos mas valorados");
});

app.get('/product-rate', (req, res) => {
  res.send("Estas accediendo al promedio de productos mas sorteados");
});

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });

module.exports.handler = serverless(app);