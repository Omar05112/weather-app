import "./style.css";
import { fetchWeatherData } from "./fetchWeatherData.js";
import { renderWeatherData } from "./renderWeatherData.js";

const searchButton = document.getElementById("search-button");

hideLoader();

searchButton.addEventListener("click", async (e) => {
  showLoader();
  e.preventDefault();
  fetchWeatherData().then((data) => {
    try {
      console.log(data);
      renderWeatherData(data);
    } catch (error) {
      console.log(error);
    } finally {
      hideLoader();
    }
  });
});

function showLoader() {
  document.getElementById("loading-display").style.display = "block";
}

function hideLoader() {
  document.getElementById("loading-display").style.display = "none";
}
