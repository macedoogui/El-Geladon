const express = require('express');
const cors = require('cors');
const port = 3000;
const app = express();
const route = require('./src/routes/paletas.route');


app.use(express.json());

app.use(cors());

app.use('/paletas', route);