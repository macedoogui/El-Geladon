const express = require("express");
const port = 3000;
const app = express();
const cors = require('cors');


app.use(cors())
app.use(express.json());

const paletas = [
  {
    id: 1,
    sabor: 'Açai com Leite Condensado',
    descricao: 'Açai com Leite Condensado',
    foto: 'assets/images/acai-com-leite-condensado.png',
    preco: 5.5,
  },
  {
    id: 2,
    sabor: 'Banana com Nutella',
    descricao: 'Banana com Nutella',
    foto: 'assets/images/banana-com-nutella.png',
    preco: 10.0,
  },
  {
    id: 3,
    sabor: 'Chocolate Belga',
    descricao: 'Chocolate Belga',
    foto: 'assets/images/chocolate-belga.png',
    preco: 7.0,
  },
  {
    id: 4,
    sabor: 'Limão',
    descricao: 'Limão',
    foto: 'assets/images/limao.png',
    preco: 6.0,
  },
  {
    id: 5,
    sabor: 'Maracuja',
    descricao: 'Maracuja',
    foto: 'assets/images/maracuja.png',
    preco: 10.0,
  },
  {
    id: 6,
    sabor: 'Milho Verde',
    descricao: 'Milho Verde',
    foto: 'assets/images/milho-verde.png',
    preco: 10.0,
  },
];

app.get("/", function (req, res) {
  res.send("Hello Blue Módulo 3 Fullstack");
});

app.get("/paletas/find-paletas", (req, res) => {
  res.send(paletas);
});

app.get("/paletas/find-paletas/:id", (req, res) => {
  const idParam = req.params.id;
  const chosenPaleta = paletas.find((paleta) => (paleta.id = idParam));

  res.send(chosenPaleta)
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
