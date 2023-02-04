let brazilTime = moment()
  .tz("America/Sao_Paulo")
  .format("dddd, MMMM D, YYYY, H:M a");
let usaTime = moment()
  .tz("America/Los_Angeles")
  .format("dddd, MMMM D, YYYY, H:m A");

let italyTime = moment().tz("Europe/Rome").format("dddd, MMMM D, YYYY, H:m A)");

function showSelectedCity(event) {
  if (event.target.value === "saopaulo") {
    alert(`your current time zone is ${brazilTime}`);
  }
  if (event.target.value === "sanfrancisco") {
    alert(`your current time zone is ${usaTime}`);
  }
  if (event.target.value === "rome") {
    alert(`your current time zone is ${italyTime}`);
  }
}

let citySelect = document.querySelector("#cities");
citySelect.addEventListener("change", showSelectedCity);
