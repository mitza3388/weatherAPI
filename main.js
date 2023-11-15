import { getWeather, createCard,addContent } from "./script.js";



async function render() {
    const cities = ['London', 'New York', 'Eilat', 'Alaska'];
    const contentHolder = document.getElementById('content');
    for (const cityName of cities) {
        try {
            const cityData = await getWeather(cityName);
            addContent(contentHolder, createCard(cityData));
        } catch (error) {
            console.error(`Error fetching weather for ${cityName}:`, error);
        }
    }
}
render();