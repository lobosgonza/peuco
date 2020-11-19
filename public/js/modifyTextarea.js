function modifyText(itemId, itemCategoria){

  const producto = document.getElementById("articulo"+ itemId ).innerText;
  const textArea = document.getElementById("FormControlTextarea");
  
  console.log(itemCategoria);
  let articuloCalificativo = " ";

  if (itemCategoria === "Tabla" ){
    articuloCalificativo = "la "
} else {
  articuloCalificativo = "el "
};

textArea.innerHTML = "Hola, quisiera encargar " + articuloCalificativo + producto;
};
