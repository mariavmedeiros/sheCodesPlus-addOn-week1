//let brazilTime = moment()
// .tz("America/Sao_Paulo")
// .format("dddd, MMMM D, YYYY, H:M a");
//let brazilElement = document.querySelector("#saopaulo");

//let usaTime = moment()
// .tz("America/Los_Angeles")
//.format("dddd, MMMM D, YYYY, H:m A");

//let italyTime = moment().tz("Europe/Rome").format("dddd, MMMM D, YYYY, H:m A)");

function showSelectedCity(event) {
  if (event.target.value === "saopaulo") {
    alert("oi");
  }
  if (event.target.value === "sanfrancisco") {
    alert("hi");
  }
  if (event.target.value === "rome") {
    alert("ciao");
  }
}

let citySelect = document.querySelector("#cities");
citySelect.addEventListener("change", showSelectedCity);
