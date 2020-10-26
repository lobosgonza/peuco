const express = require("express");
const ejs = require("ejs");

const app = express()


app.use(express.static("public"));

app.set('view engine', 'ejs');

const articulos = [
{
  active: "active",
id: 0,
nombre: "Plato Tenca",
descripcion: "Plato de cóctel en madera de Raulí natural, con tres divisiones, acabado con cera natural, compatible con alimentos.",
categoria: "Plato Cóctel Raulí",
dimensiones: "38 x 18 cms. aprox.",
precio: "$25.000",
produccion: "Fabricación 7 días.",
img: "https://drive.google.com/uc?export=view&id=1z1IhvNzx1U0HzJ8H2weHqFGEnY1siWUb",
orientacion: "vertical",
},{
id: 1,
nombre: "Plato Tórtola",
descripcion: "Plato de cóctel de tres divisiones, perfecto para picoteos y salsa, con acabado de cera natural compatible con alimentos.",
categoria: "Plato Coctel Raulí",
dimensiones: "45 x 22 cms. aprox.",
precio: "$30.000",
produccion: "Fabricación 7 días.",
img: "https://drive.google.com/uc?export=view&id=1xnvDciUci46zrtoUro_Ohy6JzRTRQVYU",
orientacion: "vertical",
},{
id: 2,
nombre: "Tabla Chercán",
descripcion: "Dale un toque especial a tus asados, con esta hermosa tabla con empuñaduras de herradura, sellada con pasta de cera compatible con alimentos.",
categoria: "Tabla Asado Raulí con herradura",
dimensiones: "40 x 20 cms. aprox.",
precio: "$20.000",
produccion: "Fabricación 5 días.",
img: "https://drive.google.com/uc?export=view&id=1ELYehzok1WGrsaKAf61pNONPf0Aq1ptp",
orientacion: "vertical",
},{
id: 3,
nombre: "Tabla Chincol",
descripcion: "La más simple de nuestras tablas para asados, fabricada en raulí, sellada con pasta de cera de abejas compatible con alimentos.",
categoria: "Tabla Asado Raulí",
dimensiones: "37 x 20 cms. aprox.",
precio: "$15.000",
produccion: "Fabricación 5 días.",
img: "https://drive.google.com/uc?export=view&id=1SmbXA-cbYB1IWzB57dS4n3rVZKNZW-nx",
orientacion: "horizontal",
},{
 id: 4,
nombre: "Tabla Zorzal",
descripcion: "Plato de Raulí para cóctel, con dos divisiones rectangulares, perfecto para salsas y picoteos.",
categoria: "Plato Coctel Raulí",
dimensiones: "26 x 23 cms. aprox.",
precio: "$20.000",
produccion: "Fabricación 7 días.",
img: "https://drive.google.com/uc?export=view&id=1seb_CHZ4ZYRiPjeE7Dcpxld5_59rnSNw",
orientacion: "vertical",
},{
id: 5,
nombre: "Perchero Queltehue",
descripcion: "Perchero de pared en madera de Raulí, de seis ganchos. Incluye tirafondos de 4 pulgadas para su instalación.",
categoria: "Perchero de pared Raulí",
dimensiones: "75 x10 cms. aprox.",
precio: "$40.000",
produccion: "Fabricación 10 días.",
img: "https://drive.google.com/uc?export=view&id=1SGUT5O25UrH28wacSaiH90vdEbrhwj46",
orientacion: "horizontal",
},{
id: 6,
nombre: "Perchero Pequén",
descripcion: "Pequeño perchero de pared, en madera de Raulí, de tres ganchos, incluye tirafondos de 4 pulgadas para instalación.",
categoria: "Perchero de pared Raulí",
dimensiones: "45 x 10 cms. aprox.",
precio: "$25.000",
produccion: "Fabricación 10 días.",
img: "https://drive.google.com/uc?export=view&id=1dbAIWOPp5Intezhb3_t__vQGNjGdttEF",
orientacion: "horizontal",
}
];


app.get("/", function (req, res){
  res.render("home", {items: articulos});
});







app.listen(process.env.PORT || 3000, function (req,res) {
console.log("Server is running on port 3000")
  })
