
import loc from "./localizacao"



const API_KEY = "bd5e378503939ddaee76f12ad7a97608"

export const api =  `https://api.openweathermap.org/data/2.5/onecall?lat=-9.665&lon=-35.7353&exclude=daily,minutely&cnt=24&units=metric&appid=${API_KEY}`


export default async() => {
    let cord;
    await loc().then(response=>response).then(data=>{cord = data})
    const latitude =  cord.latitude;
    const longitude = cord.longitude
    const api = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=daily,minutely&cnt=24&units=metric&appid=${API_KEY}`
    return api;

}


