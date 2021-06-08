import validator from './validator.js';

const index = {
  // only numbers
  valideKey(evt) {
    let code = (evt.which) ? evt.which : evt.keyCode; //valide key

    if (code == 8) { // backspace.
      return true;
    } else if (code >= 48 && code <= 57) { // is a number.
      return true;
    } else { // other keys.
      return false;
    }
  },

  //Screen manipulation 
  goToPage2() {
    document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "block";
    document.getElementById("p2").innerText = document.getElementById("name_user").value;
  },

  goToPage3() {
    document.getElementById("page2").style.display = "none";
    document.getElementById("page3").style.display = "block";
  },

  goToPage4() {
    document.getElementById("page3").style.display = "none";
    document.getElementById("page4").style.display = "block";
  },

  goToPage5() {
    document.getElementById("page4").style.display = "none";
    document.getElementById("page5").style.display = "block";
    document.getElementById("typeCard").innerText = validator.type(document.getElementById("cardValid").value);
    document.getElementById("finalValue").innerText = validator.maskify(document.getElementById("cardValid").value);
  },

  //validation screen logic
  luhn() {
    if (validator.isValid(document.getElementById("cardValid").value)) {
      document.getElementById("p3").style.visibility = "hidden";
      document.getElementById("gif").style.visibility = "visible";
      setTimeout(index.goToPage4, 1000);
    } else {
      document.getElementById("p3").style.visibility = "visible";
      }
      return false;

    }
};

document.getElementById("btn1").addEventListener("click", index.goToPage2);
document.getElementById("btn2").addEventListener("click", index.goToPage3);
document.getElementById("form").addEventListener("submit", index.luhn);
document.getElementById("btn4").addEventListener("click", index.goToPage5);
