function modifyTextarea(){

    item0.addEventListener("click", modifyText, false);
    
}


function modifyText() {
    var item = document.getElementById("nombreProducto"); 
  var textArea = document.getElementById("FormControlTextarea");
  textArea.innerHTML = "Hola, quisiera encargar el producto " + item ;    
}