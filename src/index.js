// only numbers
function valideKey(event){
	var code = (evt.which) ? evt.which : evt.keyCode;
    
    if(code==8) { // backspace.
      return true;
    } else if(code>=48 && code<=57) { // is a number.
      return true;
    } else{ // other keys.
      return false;
    }
}

//Manipulación de pantallas para mostrar y ocultar

function goToPage2() {
  document.getElementById("page1").style.display = "none";
  document.getElementById("page2").style.display = "block";
  document.getElementById("p2").innerText = "Bienvenid@ " + document.getElementById("name_user").value;
}

function goToPage3() {
  document.getElementById("page2").style.display = "none";
  document.getElementById("page3").style.display = "block";
}

function goToPage4() {
  document.getElementById("page3").style.display = "none";
  document.getElementById("page4").style.display = "block";
  document.getElementById("msgValid").innerText = "Tarjeta añadida con éxito";

}

function goToPage5() {
  document.getElementById("page4").style.display = "none";
  document.getElementById("page5").style.display = "block";
  document.getElementById("typeCard").innerText = type(document.getElementById("cardValid").value);
  document.getElementById("finalValue").innerText = maskify(document.getElementById("cardValid").value);
}

//Lógica de pantallas
function luhn() {
  /////////////////////////////redundancia con intencionalidad
  if (isValid(document.getElementById("cardValid").value) == true) {
    document.getElementById("p3").innerText = "Tarjeta válida.";
    setTimeout(goToPage4, 2000);
  } else {
    document.getElementById("p3").innerText = "Tarjeta no válida";
  }
}


/*import validator from './validator.js';

console.log(validator);*/