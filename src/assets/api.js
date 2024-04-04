import axios from "axios";

const axiosInstance = axios.create({
    baseURL:'https://api.openweathermap.org/data/2.5/weather'
})

export const getWeather = async (input) => {
    const resp = await axiosInstance.get(input)
    return resp.data;
}

