var botonEncriptar = document.querySelector(".boton-encriptar");
var botonDesencriptar = document.querySelector(".boton-desencriptar");
var botonCopiar = document.querySelector(".boton__copiar")
var resultado = document.querySelector(".texto-resultado");


document.getElementById("idCopiar").style.display="none";
document.getElementById("textoResultado").style.display="none";


function myFunctionOcultar() {
  document.getElementById("image").style.display = "none";
  document.getElementById("idParrafo-1").style.display="none";
  document.getElementById("idParrafo-2").style.display="none";
  document.getElementById("idCopiar").style.display="block";
  document.getElementById("textoResultado").style.display="block";
}


function encriptar(){
  myFunctionOcultar();
  var area = capturaTexto();
  resultado.textContent = encriptarTexto(area);
}

function desencriptar(){
  myFunctionOcultar();
  var area = capturaTexto();
  resultado.textContent = desencriptarTexto(area);
}


//El texto lo capyturamos en la variable "area" para luego encriptar o desencriptar
function capturaTexto(){
  var area = document.querySelector(".entrada__texto");
  return area.value;
}

//Encriptar Texto reemplazando las vocales
function encriptarTexto(mensaje){
  var texto = mensaje;
  var finalText = "";

  for(var i = 0; i < texto.length; i++){
      if(texto[i] == "a"){
          finalText = finalText + "ai"
      }
      else if(texto[i] == "e"){
          finalText = finalText + "enter"
      }
      else if(texto[i] == "i"){
          finalText = finalText + "imes"
      }
      else if(texto[i] == "o"){
          finalText = finalText + "ober"
      }
      else if(texto[i] == "u"){
          finalText = finalText + "ufat"
      }
      else{
          finalText = finalText + texto[i];
      }
  }

  return finalText;
}

//Copiar texto y salida de alerta al momento de copiarlo
function copyToClickBoard(){
  var content = document.getElementById("textoResultado").innerHTML;

  navigator.clipboard.writeText(content)
      .then(() => {
          swal("Muy bien!", "El texto ha sido copiado!", "success");
  })
      .catch(error => {
          swal("Opps!", "El texto no ha sido copiado!", "error");
  })

}

//Desencriptar Texto volviendo a su estado inicial
function desencriptarTexto(mensaje){
  var texto = mensaje;
  var finalText = "";

  for(var i = 0; i < texto.length; i++){
      if(texto[i] == "a"){
          finalText = finalText + "a"
          i = i + 1;
      }
      else if(texto[i] == "e"){
          finalText = finalText + "e"
          i = i + 4;
      }
      else if(texto[i] == "i"){
          finalText = finalText + "i"
          i = i + 3;
      }
      else if(texto[i] == "o"){
          finalText = finalText + "o"
          i = i + 3;
      }
      else if(texto[i] == "u"){
          finalText = finalText + "u"
          i = i + 3;
      }
      else{
          finalText = finalText + texto[i];
      }
  }

  return finalText;

}


// Botones que al /Botones que al hacer click hacen función de encriptar y desencriptar
botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
botonCopiar.onclick = copyToClickBoard;