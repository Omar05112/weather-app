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

    const eachDisplayElement = document.createElement("div");
    eachDisplayElement.id = "each-display";
    displayContainer.appendChild(eachDisplayElement);

    const firstTwoElement = document.createElement("div");
    firstTwoElement.id = "first-two";
    eachDisplayElement.appendChild(firstTwoElement);

    const temperatureAndIconAndFeelsLikeElement = document.createElement("div");
    temperatureAndIconAndFeelsLikeElement.id =
      "temperature-and-icon-and-feels-like";
    firstTwoElement.appendChild(temperatureAndIconAndFeelsLikeElement);

    const temperatureAndIconElement = document.createElement("div");
    temperatureAndIconElement.id = "temperature-and-icon";

    temperatureAndIconAndFeelsLikeElement.appendChild(
      temperatureAndIconElement,
    );

    const conditionsAndDateAndTimezoneElement = document.createElement("div");
    conditionsAndDateAndTimezoneElement.id = "conditions-and-date-and-timezone";
    firstTwoElement.appendChild(conditionsAndDateAndTimezoneElement);

    const descriptionContainerElement = document.createElement("div");
    descriptionContainerElement.id = "description-container";
    eachDisplayElement.appendChild(descriptionContainerElement);

    import(`./icons/${data.Icon}.svg`).then((module) => {
      const weatherImage = document.createElement("img");
      weatherImage.id = "weather-icon";
      weatherImage.src = module.default;
      temperatureAndIconElement.appendChild(weatherImage);
    });

    temperatureDisplay.id = "temperature-display";
    temperatureDisplay.textContent = data.Temperature;
    temperatureAndIconElement.appendChild(temperatureDisplay);

    conditionsDisplay.id = "conditions-display";
    conditionsDisplay.textContent = data.Conditions;
    conditionsAndDateAndTimezoneElement.appendChild(conditionsDisplay);

    dateDisplay.id = "date-display";
    dateDisplay.textContent = data.Date;
    conditionsAndDateAndTimezoneElement.appendChild(dateDisplay);

    feelsLikeDisplay.id = "feelslike-display";
    feelsLikeDisplay.textContent = `Feels like ${data.FeelsLike}`;
    temperatureAndIconAndFeelsLikeElement.appendChild(feelsLikeDisplay);

    timezoneDisplay.id = "timezone-display";
    timezoneDisplay.textContent = data.Timezone;
    conditionsAndDateAndTimezoneElement.appendChild(timezoneDisplay);

    descriptionDisplay.id = "description-display";
    descriptionDisplay.textContent = data.Description;
    eachDisplayElement.appendChild(descriptionDisplay);
  } catch (error) {
    const displayContainer = document.getElementById("display-container");
    displayContainer.innerHTML="";
    errorMessage.textContent =
      "This location does not exist in the Visual Crossing Database";
    console.log(error);
  }
};
