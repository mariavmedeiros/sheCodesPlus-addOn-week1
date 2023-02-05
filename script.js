let brazilTime = moment()
  .tz("America/Sao_Paulo")
  .format("dddd, MMMM D, YYYY, H:m a");

let usaTime = moment()
  .tz("America/Los_Angeles")
  .format("dddd, MMMM D, YYYY, H:m A");

let italyTime = moment().tz("Europe/Rome").format("dddd, MMMM D, YYYY, H:m A");

function showSelectedCity(event) {
  if (event.target.value === "saopaulo") {
    alert(`it is ${brazilTime} in São Paulo, Brazil`);
  }
  if (event.target.value === "sanfrancisco") {
    alert(`it is ${usaTime} in San Francisco, USA`);
  }
  if (event.target.value === "rome") {
    alert(`it is ${italyTime} in Rome, Italy`);
  }
}

let citySelect = document.querySelector("#cities");
citySelect.addEventListener("change", showSelectedCity);
