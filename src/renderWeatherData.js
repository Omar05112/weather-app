import { fetchWeatherData } from "./fetchWeatherData.js";

export const renderWeatherData = async (data) => {
  const temperatureDisplay = document.createElement("div");
  const conditionsDisplay = document.createElement("div");
  const dateDisplay = document.createElement("div");
  const feelsLikeDisplay = document.createElement("div");
  const timezoneDisplay = document.createElement("div");
  const descriptionDisplay = document.createElement("div");

  const displayContainer = document.getElementById("display-container");
  const tempandicon = document.getElementById("temperature-and-icon");

  temperatureDisplay.id = "temperature-display";
  temperatureDisplay.textContent = data.Temperature;
  tempandicon.appendChild(temperatureDisplay);

  conditionsDisplay.id = "conditions-display";
  conditionsDisplay.textContent = data.Conditions;
  displayContainer.appendChild(conditionsDisplay);

  dateDisplay.id = "date-display";
  dateDisplay.textContent = data.Date;
  displayContainer.appendChild(dateDisplay);

  feelsLikeDisplay.id = "feelslike-display";
  feelsLikeDisplay.textContent = data.FeelsLike;
  displayContainer.appendChild(feelsLikeDisplay);

  timezoneDisplay.id = "timezone-display";
  timezoneDisplay.textContent = data.Timezone;
  displayContainer.appendChild(timezoneDisplay);

  descriptionDisplay.id = "description-display";
  descriptionDisplay.textContent = data.Description;
  displayContainer.appendChild(descriptionDisplay);

  import(`./icons/${data.Icon}.svg`).then((module) => {
    const weatherImage = document.createElement("img");
    weatherImage.id = "weather-icon";
    weatherImage.src = module.default;
    tempandicon.appendChild(weatherImage);
  });

};
