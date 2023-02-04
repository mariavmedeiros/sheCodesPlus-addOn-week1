function showSelectedCity(event) {
  if (event.target.value === "saopaulo") {
    alert("oi");
  }
  if (event.target.value === "sanfrancisco") {
    alert("hi");
  }
  if (event.target.value === "milano") {
    alert("ciao");
  }
}

let citySelect = document.querySelector("#cities");
citySelect.addEventListener("change", showSelectedCity);

//let brazilTime = moment().tz("Brazil/East").format("dddd, MMMM D, YYYY, H:M a");
//let brazilElement = document.querySelector("#brazil");
