export const fetchWeatherData = async () => {
  const userInput = document.getElementById("user-input").value;
  const celsius = document.getElementById("celsius").checked;
  const fahrenheit = document.getElementById("fahrenheit").checked;
  try {
    let tempLetter;
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${userInput}?key=46EBDKGCUJ5N6A5JAGJPXYYR9`,
    );
    
    const weatherData = await response.json();
    console.log(weatherData);
    let temperature = weatherData.currentConditions.temp;
    const conditions = weatherData.currentConditions.conditions;
    const date = weatherData.days[0].datetime;
    let formatter = new Intl.DateTimeFormat("en-US", {
      timeZone: "UTC",
      weekday: "long",
    });
    let actualDay = formatter.format(new Date(date));
    let feelsLike = weatherData.currentConditions.feelslike;
    let weatherDescription = weatherData.description;
    const iconID = weatherData.currentConditions.icon;
    const timeZone = weatherData.timezone;
    if (celsius && !fahrenheit) {
      feelsLike = Math.round(((feelsLike - 32) * 5) / 9);
      temperature = Math.round(((temperature - 32) * 5) / 9);
      tempLetter = "°C";
    } else if (fahrenheit && !celsius) {
      tempLetter = "°F";
    }
    const temperatureValue = `${temperature}${tempLetter}`;
    const feelsLikeValue = `${feelsLike}${tempLetter}`;
    return {
      Temperature: temperatureValue,
      Conditions: conditions,
      Date: actualDay,
      Description: weatherDescription,
      FeelsLike: feelsLikeValue,
      Timezone: timeZone,
      Icon: iconID,
    };
  } catch (error) {
    console.log(error);
  }
};
