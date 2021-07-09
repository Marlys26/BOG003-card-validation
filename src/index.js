import validator from "./validator.js";

//console.log(validator);

document.getElementById("btn").addEventListener("click", () => {
  let creditCardNumber = document.getElementById("cardNumber").value;
  let nameCard = document.getElementById("nameCard").value;
  if (creditCardNumber == "") {
    alert("DEBES INTRODUCIR UN NUMERO");
    return document.getElementById("cardNumber").value;
  }
  if (nameCard == "") {
    alert("DEBES INTRODUCIR TU NOMBRE Y APELLIDO");
    return document.getElementById("nameCard").value;
  }
  validarTarjeta(creditCardNumber);
  maskyCard(creditCardNumber);
  nombreComprador(nameCard);
});

function validarTarjeta(creditCardNumber) {
  let exitoso = validator.isValid(creditCardNumber);
  if (exitoso === true) {
    document.getElementById("validator").setAttribute("hidden", "");
    document.getElementById("compraExitosa").removeAttribute("hidden");
  } else {
    document.getElementById("mensaje").innerHTML =
      "Su tarjeta es invalida por favor verifiquela e intente nuevamente";
  }
}
function maskyCard(creditCardNumber) {
  document.getElementById("numberMaskify").innerHTML =
    validator.maskify(creditCardNumber);
}

function nombreComprador(nameCard) {
  document.getElementById("nameResul").innerHTML = nameCard;
}
