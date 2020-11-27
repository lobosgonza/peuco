'use strict';

const express = require("express");
const ejs = require('ejs');
const nodemailer = require('nodemailer');
const data = require("./lib/data.js"); // Esta es la data de los productos
const {
  mensaje
} = require("./lib/mensaje.js");
const bodyParser = require("body-parser");
const {
  google
} = require("googleapis");
require('dotenv').config();



// NodeMailer Google
const CLIENT = process.env.CLIENT;
const SECRET = process.env.SECRET;
const URI = process.env.URI;
const TOKEN = process.env.TOKEN;



const oAuth2Client = new google.auth.OAuth2(CLIENT, SECRET, URI)
oAuth2Client.setCredentials({
  refresh_token: REFRESH_TOKEN
})





// Fin Nodemailer Google



const app = express();


app.use(express.static("public"));

app.set('view engine', "ejs");

const articulos = data

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: true
}));

// parse application/json
app.use(bodyParser.json());






app.post('/', (req, res) => {

  const nombre = req.body.nombre;
  const apellido = req.body.apellido;
  const email = req.body.mail;
  const direccion = req.body.direccion;
  const telefono = req.body.telefono;
  const mensaje = req.body.mensaje;

  let date = new Date();
  let hoy = date.getDate + " de " + date.getMonth + " de " + date.getFullYear + "."; 
  let hora = date.getHours;

  async function sendMail() {

    try {

      const accessToken = await oAuth2Client.getAccessToken()

      const transport = nodemailer.createTransport({
        service: "gmail",
        secure: true,
        auth: {
          type: "OAuth2",

          user: "lobosgonza60@gmail.com",
          clientId: CLIENT,
          clientSecret: SECRET,
          refreshToken: TOKEN,
          accessToken: accessToken
        }
      })

      let mailOptions = {
        from: "PEUCO <lobosgonza60@gmail.com>",
        to: "lobosgonza60@gmail.com",
        subject: `Cotizacion de ${nombre} ${apellido}`,
        text: mensaje,
        html: `<ul>
        <li>nombre: ${nombre} ${apellido}</li>
        <li>mail: ${email}</li>
        <li>direccion: ${direccion}</li>
        <li>telefono: ${telefono}</li>
    <li>mensaje: ${mensaje}</p></li>
    <li>día de envío: ${date}</li>
        </ul> `
      };

      const result = await transport.sendMail(mailOptions)
      return result

    } catch (error) {
      return error
    }
  }


  console.log(req.body.mensaje);
  sendMail().then((result) => console.log("Email sent...", result))
    .catch((error) => console.log(error.message));
  // res.redirect("/")




});










app.get('/', (req, res) => {
  res.render("home", {
    items: articulos
  });
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