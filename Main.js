const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "2ad1110b52mshf7d2a4fbc927a13p148b64jsna2f1db0a6b1e",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = (city) => {
  cityNaMe.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      temp1.innerHTML = response.temp;
      humidity2.innerHTML = response.humidity;

      cloud_pct.innerHTML = response.cloud_pct;
      temp.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_degrees.innerHTML = response.wind_degrees;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});

getWeather("Delhi");

const cities = [
  { name: "Mumbai", id: "M" },
  { name: "Chennai", id: "C" },
  { name: "Kolkata", id: "K" },
  { name: "Coimbatore", id: "CO" },
  { name: "Salem", id: "S" },
  { name: "Indore", id: "I" },
];

const updateOtherPlacesWeather = () => {
  cities.forEach((city) => {
    fetch(
      "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" +
        city.name,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        document.getElementById(city.id + "_cloud").innerHTML =
          response.cloud_pct;
        document.getElementById(city.id + "_fl").innerHTML =
          response.feels_like;
        document.getElementById(city.id + "_h").innerHTML = response.humidity;
        document.getElementById(city.id + "_maxt").innerHTML =
          response.max_temp;
        document.getElementById(city.id + "_mint").innerHTML =
          response.min_temp;
        document.getElementById(city.id + "_sr").innerHTML = response.sunrise;
        document.getElementById(city.id + "_ss").innerHTML = response.sunset;
        document.getElementById(city.id + "_t").innerHTML = response.temp;
        document.getElementById(city.id + "_wd").innerHTML =
          response.wind_degrees;
        document.getElementById(city.id + "_ws").innerHTML =
          response.wind_speed;
      })
      .catch((err) => console.error(err));
  });
};

updateOtherPlacesWeather();
