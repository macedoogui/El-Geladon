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

const findPaletasService = () => {
  return paletas;
};

const findPaletaByIdService = (id) => {
  return paletas.find((paleta) => paleta.id == id);
};

module.exports = {
  findPaletasService,
  findPaletaByIdService,
};