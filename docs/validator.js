 const validator = {
   // Function algoritmo de Luhn
 isValid(creditCardNumber) {
  var leng = creditCardNumber.length
  var parity = leng % 2
  var sum = 0
  for (var i = leng - 1; i >= 0; i--) {
    var d = parseInt(creditCardNumber.charAt(i))
    if (i % 2 == parity) {
      d *= 2
    }
    if (d > 9) {
      d -= 9
    }
    sum += d
  }
  return (sum % 10) == 0
  },
  //character arrangement function
 maskify(creditCardNumber) {
  var leng = creditCardNumber.length
  var hide = leng - 4;
  var num = creditCardNumber.substring(hide, leng);
  var string = "";
  var i = 0;
  while (i < hide) {
    string += "#";
    i++;
  }
  return string + num;
},

//Function  MASTER / VISA / AMEX / DISCOVER
type(creditCardNumber) {
  var num = parseInt(creditCardNumber.substring(0, 1));

  switch (num) {
    case 3:
      return "AMEX";
    case 4:
      return "VISA";
    case 5:
      return "MASTERCARD";
    case 6:
      return "DISCOVER";
    default:
      return "DESCONOCIDO";
  }
}
 };






export default validator;