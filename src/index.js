import validator from './validator.js';

//console.log(validator);
//Funcion para mostrar mi pagina de compra
//function mostrarValidator() {
//let x = document.getElementById("validator");
  //if (x.style.display === "none") {
    //    x.style.display = "block";
    //} else {
      //  x.style.display = "block";
    //}
//}

  //  function closeValidator() {
    //let x = document.getElementById("validator");
    //if (x.style.display === "block") {
      //  x.style.display = "none";
    //} else {
      //   x.style.display = "none";
    //}
    //}
document.getElementById("btn").addEventListener("click", () => {
    validator.isValid(document.getElementById("cardNumber").value);
    });