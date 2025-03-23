// const API_KEY = "7f424f381e84393751d290f410f54e02";
// const lat = 40.7128;
// const lon = -74.0060;

// // Function to fetch current weather
// async function fetchCurrentWeather() {
//   try {
//     const response = await fetch(
//       `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=imperial`
//     );

//     if (!response.ok) {
//       throw new Error(`Response status: ${response.status}`);
//     }

//     const json = await response.json();
//     console.log("Current Weather:", json);

//     // Select the container
//     const containerWeather = document.querySelector(".temperature-right");
//     if (!containerWeather) {
//       console.error("Element with class 'temperature-right' not found.");
//       return;
//     }

//     // Clear previous content
//     containerWeather.innerHTML = "";

//     // Extract necessary data
//     const temp = Math.round(json.main.temp);
//     const tempHigh = Math.round(json.main.temp_max);
//     const tempLow = Math.round(json.main.temp_min);
//     const humidity = json.main.humidity;
//     const sunrise = new Date(json.sys.sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//     const sunset = new Date(json.sys.sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//     const weatherCondition = json.weather[0].description;

//     // Create weather elements
//     const elements = [
//       `<span class="temp">🌤 ${temp}°F ${weatherCondition}</span>`,
//       `<span>🌡 High: ${tempHigh}°F </span>`,
//       `<span>🌡 Low: ${tempLow}°F </span>`,
//       `<span>💧 Humidity: ${humidity}%</span>`,
//       `<span>🌅 Sunrise: ${sunrise}</span>`,
//       `<span>🌇 Sunset: ${sunset}</span>`,
//     ];

//     // Append all elements to the container
//     containerWeather.innerHTML = elements.join("");

//   } catch (error) {
//     console.error("Error fetching weather data:", error);
//   }
// }

// // Function to fetch 3-day forecast
// async function fetchForecast() {
//   try {
//     const response = await fetch(
//       `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=imperial`
//     );

//     if (!response.ok) {
//       throw new Error(`Response status: ${response.status}`);
//     }

//     const json = await response.json();
//     console.log("Forecast Data:", json);

//     // Select the forecast container
//     const containerForecast = document.querySelector(".temp-right");
//     if (!containerForecast) {
//       console.error("Element with class 'temp-right' not found.");
//       return;
//     }

//     // Clear previous content
//     containerForecast.innerHTML = "";

//     // Get forecast for the next three days (approximate)
//     const forecastDays = {};
//     json.list.forEach((entry) => {
//       const date = new Date(entry.dt * 1000);
//       const dayName = date.toLocaleDateString("en-US", { weekday: "long" });
//       if (!forecastDays[dayName]) {
//         forecastDays[dayName] = Math.round(entry.main.temp);
//       }
//     });

//     // Get only three upcoming days
//     const forecastEntries = Object.entries(forecastDays).slice(0, 3);

//     // Create forecast elements
//     const forecastElements = forecastEntries.map(([day, temp], index) => {
//       if (index === 0) return `<span class="temp">🌤Today: ${temp}°F </span>`;
//       return `<span>🌡${day}: ${temp}°F </span>`;
//     });

//     // Append forecast elements
//     containerForecast.innerHTML = forecastElements.join("");

//   } catch (error) {
//     console.error("Error fetching forecast data:", error);
//   }
// }

// // Fetch both current weather and forecast
// fetchCurrentWeather();
// fetchForecast();
