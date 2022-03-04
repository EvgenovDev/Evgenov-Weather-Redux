import axios from "axios";

const instance = axios.create({
    baseURL: "http://api.weatherapi.com/v1/forecast.json?key=b0aa577540824b3b8e371718220302&lang=ru&days=1&aqi=yes&alerts=no"
})

export const getWeatherDataApi = async (city: string) => {
    return instance.get(`&q=${city}`)
        .then((response) => response.data)
        .catch(() => "Error")
}