let date = new Date();
let h2 = document.querySelector("#date");
let hours = date.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = date.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
let dayIndex = date.getDay();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[dayIndex];
h2.innerHTML = `${day}, ${hours}:${minutes}`;

function search(event) {
  event.preventDefault();
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let searchCity = document.querySelector("#searchInput").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showTemp);
}
function showTemp(response) {
  console.log(response.data);
  document.querySelector("#city").innerHTML = response.data.name;

  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].description;

  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document
    .querySelector("#icon")
    .setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);
