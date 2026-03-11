import "./style.css";
import { fetchWeatherData } from "./fetchWeatherData.js";
import { renderWeatherData } from "./renderWeatherData.js";

const searchButton = document.getElementById("search-button");
const displayContainer =document.getElementById("display-container");
hideLoader();

searchButton.addEventListener("click", async (e) => {
  
  showLoader();
  e.preventDefault();
  fetchWeatherData().then((data) => {
    try {
      console.log(data);
      displayContainer.innerHTML="";
      renderWeatherData(data);
    } catch (error) {
      console.log(error);
    } finally {
      hideLoader();
    }
  });
});

function showLoader() {
  document.getElementById("loading-display").style.display = "grid";
}

function hideLoader() {
  document.getElementById("loading-display").style.display = "none";
}

