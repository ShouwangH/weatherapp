const akey = '2a1935f858ba82acf817041f3efd7ed0'


const getDataCityState = async (city, state) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},US-${state}&appid=${akey}&units=imperial`)
    const data = await response.json()
    return data
}

const getDataZip = async (zip) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${akey}&units=imperial`)
    const data = await response.json()
    return data
}

const test = getDataZip("60611")
console.log(test)

//html elements for data
const createDisplay = async (high,low,fcast,humidity) => {
    document.getElementById('high').innerHTML = `${high}\xB0F`
    document.getElementById('low').innerHTML = `${low}\xB0F`
    document.getElementById('forecast').innerHTML = `${fcast}`
    document.getElementById('humidity').innerHTML = `${humidity}`
}

const loadDataCityState = async (city, state)=> {
    const weather = await getDataCityState(city, state)
    const high = weather.main.temp_max
    const low = weather.main.temp_min
    const humidity = weather.main.humidity
    const fcast = weather.weather[0].description
    createDisplay(high,low,fcast,humidity)
}

const loadDataZip = async (zip)=> {
    const weather = await getDataZip(zip)
    const high = weather.main.temp_max
    const low = weather.main.temp_min
    const humidity = weather.main.humidity
    const fcast = weather.weather[0].description
    createDisplay(high,low,fcast,humidity)
}

// search button functionality

const zip = document.querySelector('.zipsearch')

zip.addEventListener('submit', (event) => {
    event.preventDefault();
    const code = document.getElementById("zip")
    loadDataZip(code.value)
})

const citystate = document.querySelector('.citystatesearch')

citystate.addEventListener('submit', (event) => {
    event.preventDefault();
    const city = document.getElementById("city")
    const state = document.getElementById("state")
    loadDataCityState(city.value, state.value)
})
