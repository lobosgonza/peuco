'use strict';

const express = require("express");
const ejs = require('ejs');






const app = express();


app.use(express.static("public"));

app.set('view engine', "ejs" );


const articulos = [
{
  active: "active",
id: 0,
nombre: "Plato Tenca",
descripcion: "Plato de cóctel en madera de Raulí natural, con tres divisiones, acabado con cera natural, compatible con alimentos.",
categoria: "Plato para cóctel",
material: "Raulí",
dimensiones: "38 x 18 cms. aprox.",
precio: "$25.000",
produccion: "Fabricación 7 días.",
img: "https://drive.google.com/uc?export=view&id=12jYq8owJINjBnzC_ryN725nkx6QqoK_Q",
orientacion: "vertical",
},{
id: 1,
nombre: "Plato Tórtola",
descripcion: "Plato de cóctel de tres divisiones, perfecto para picoteos y salsa, con acabado de cera natural compatible con alimentos.",
categoria: "Plato para cóctel",
material: "Raulí",
dimensiones: "45 x 22 cms. aprox.",
precio: "$30.000",
produccion: "Fabricación 7 días.",
img: "https://drive.google.com/uc?export=view&id=1s3yxo0FNfCLOHDhKV0hVuNskpkp67suq",
orientacion: "vertical",
},{
id: 2,
nombre: "Tabla Chercán",
descripcion: "Dale un toque especial a tus asados con esta hermosa tabla con empuñaduras de herradura sellada con pasta de cera.",
categoria: "Tabla para asado",
material: "Raulí",
dimensiones: "40 x 20 cms. aprox.",
precio: "$20.000",
produccion: "Fabricación 5 días.",
img: "https://drive.google.com/uc?export=view&id=1sOUh3pXGXE4kmms4EPatgR8nUdvNNLbi",
orientacion: "vertical",
},{
id: 3,
nombre: "Tabla Chincol",
descripcion: "La más simple de nuestras tablas para asados, fabricada en raulí, sellada con pasta de cera de abejas compatible con alimentos.",
categoria: "Tabla para asado",
material: "Raulí",
dimensiones: "37 x 20 cms. aprox.",
precio: "$15.000",
produccion: "Fabricación 5 días.",
img: "https://drive.google.com/uc?export=view&id=1yvw3o8MqdeKyGNFqNwIekJm3Ad6P3z6y",
orientacion: "horizontal",
},{
 id: 4,
nombre: "Tabla Zorzal",
descripcion: "Plato de Raulí para cóctel, con dos divisiones rectangulares, perfecto para salsas y picoteos.",
categoria: "Plato para cóctel",
material: "Raulí",
dimensiones: "26 x 23 cms. aprox.",
precio: "$20.000",
produccion: "Fabricación 7 días.",
img: "https://drive.google.com/uc?export=view&id=1A6BJjKTAC-o_ewNDM3fiTi1XlW59mQW3",
orientacion: "vertical",
},{
id: 5,
nombre: "Perchero Queltehue",
descripcion: "Perchero de pared en madera de Raulí, de seis ganchos. Incluye tirafondos de 4 pulgadas para su instalación.",
categoria: "Perchero de pared",
material: "Raulí",
dimensiones: "75 x10 cms. aprox.",
precio: "$40.000",
produccion: "Fabricación 10 días.",
img: "https://drive.google.com/uc?export=view&id=1Dd7gIdM9BzbW_wxdC1d5Db4wdG--NlWB",
orientacion: "horizontal",
},{
id: 6,
nombre: "Perchero Pequén",
descripcion: "Pequeño perchero de pared, en madera de Raulí, de tres ganchos, incluye tirafondos de 4 pulgadas para instalación.",
categoria: "Perchero de pared",
material: "Raulí",
dimensiones: "45 x 10 cms. aprox.",
precio: "$25.000",
produccion: "Fabricación 10 días.",
img: "https://drive.google.com/uc?export=view&id=1T1pVKOlQ23NXSTeiLn03xV4z6pYWrP2q",
orientacion: "horizontal",
}
];


app.get('/', (req, res) => {
  res.render("home",{items:articulos}).end();
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
// [END gae_node_request_example]

module.exports = app;



// app.listen(process.env.PORT || 3000, function (req,res) {
// console.log("Server is running on port 3000")
//   })


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
