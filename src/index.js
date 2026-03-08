import "./style.css";
import { fetchWeatherData } from "./fetchWeatherData.js";
import { renderWeatherData } from "./renderWeatherData.js";

const searchButton = document.getElementById("search-button");

searchButton.addEventListener("click", async (e) => {
  e.preventDefault();
  const displayContainer = document.getElementById("display-container");
  displayContainer.innerHTML="";
  const loadingDisplay = document.createElement("div");
  loadingDisplay.id="loading-display";
  loadingDisplay.textContent = "Fetching data....";
  displayContainer.appendChild(loadingDisplay);
  fetchWeatherData().then((data) => {
    loadingDisplay.remove();
    console.log(data);
    renderWeatherData(data);
  });
});
