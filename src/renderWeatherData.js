import { fetchWeatherData } from "./fetchWeatherData.js";

export const renderWeatherData = async (data) => {
  const temperatureDisplay = document.createElement("div");
  
  data = await fetchWeatherData();
  const displayContainer = document.getElementById("display-container");
  
  console.log(data.Temperature);

  temperatureDisplay.id = "temperature-display";
  temperatureDisplay.textContent = data.Temperature;

  displayContainer.appendChild(temperatureDisplay);
};
