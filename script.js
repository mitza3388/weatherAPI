const API_KEY = `0fce9633294c64da90c6d9cd2bb1b65b`;
const url = `https://api.openweathermap.org/data/2.5`;



const getWeather = async (city) => {
    try {
        const options = {
            headers: {
                "content-type": "application/json",
            },
            params: {
                q: city,
                appid: API_KEY,
                units: 'metric',
                lang: 'he'
            }
        };
        const res = await axios.get(`${url}/weather`, options);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};


const createCard = (cityData) => {
    const colEl = document.createElement("div");
    const cardEl = document.createElement("div");
    colEl.className = "col-md-6 p-2";
    cardEl.className = "card p-4 shadow m-5";
    const temp = Math.round(cityData.main.temp);
    const feelTemp = Math.round(cityData.main.feels_like);
    const icon = "";


    cardEl.innerHTML = `
    <div class = "d-flex justify-content-between">
    <div>
    <h3><strong>${cityData.name}</strong></h3>
    <p class = "text-muted">${cityData.weather[0].description}</p>
    </div>
    <img src="http://openweathermap.org/img/w/${cityData.weather[0].icon}.png" style ="width:70px">
    </div>
    </div>
    
    <div class = "row text-center mt-3">
    <div class = "col-md-4">טמפ' נמדדת<p class = "mt-2"  dir = "ltr" style = "font-size:30px">${temp}&deg;C</p>
    </div>
    <div class = "col-md-4">טמפ' מורגשת<p class = "mt-2"  dir = "ltr" style = "font-size:30px">${feelTemp}&deg;C</p>
    </div>
    <div class = "col-md-4">לחות<p class = "mt-2" style = "font-size:30px">${cityData.main.humidity}%</p>
    </div>
    </div>  
    `;
    colEl.append(cardEl);
    return colEl;
};

const addContent = (holder, content) => holder.append(content);




export { getWeather, createCard, addContent };
