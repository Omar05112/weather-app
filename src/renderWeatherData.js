import { fetchWeatherData } from "./fetchWeatherData.js";

export const renderWeatherData = async (data) => {
  const errorMessage = document.getElementById("error-message");
  try {
    errorMessage.textContent = "";
    const temperatureDisplay = document.createElement("div");
    const conditionsDisplay = document.createElement("div");
    const dateDisplay = document.createElement("div");
    const feelsLikeDisplay = document.createElement("div");
    const timezoneDisplay = document.createElement("div");
    const descriptionDisplay = document.createElement("div");

    const displayContainer = document.getElementById("display-container");
    const tempandicon = document.getElementById(
      "temperature-and-icon-and-feels-like",
    );
    const condandtimeandtimezone = document.getElementById(
      "conditions-and-date-and-timezone",
    );

    import(`./icons/${data.Icon}.svg`).then((module) => {
      const weatherImage = document.createElement("img");
      weatherImage.id = "weather-icon";
      weatherImage.src = module.default;
      tempandicon.appendChild(weatherImage);
    });

    temperatureDisplay.id = "temperature-display";
    temperatureDisplay.textContent = data.Temperature;
    tempandicon.appendChild(temperatureDisplay);

    conditionsDisplay.id = "conditions-display";
    conditionsDisplay.textContent = data.Conditions;
    condandtimeandtimezone.appendChild(conditionsDisplay);

    dateDisplay.id = "date-display";
    dateDisplay.textContent = data.Date;
    condandtimeandtimezone.appendChild(dateDisplay);

    feelsLikeDisplay.id = "feelslike-display";
    feelsLikeDisplay.textContent = `Feels like: ${data.FeelsLike}`;
    tempandicon.appendChild(feelsLikeDisplay);

    timezoneDisplay.id = "timezone-display";
    timezoneDisplay.textContent = data.Timezone;
    condandtimeandtimezone.appendChild(timezoneDisplay);

    descriptionDisplay.id = "description-display";
    descriptionDisplay.textContent = data.Description;
    displayContainer.appendChild(descriptionDisplay);
  } catch (error) {
    errorMessage.textContent =
      "This location does not exist in the Visual Crossing Database";
    console.log(error);
  }
};
