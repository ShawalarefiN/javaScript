const local_forecast = {
    today: {min: 20, max: 25},
    tomorrow: { min: 22, max: 26}
}   
function getMaxOfTom(forecast){
    const { tomorrow: {max: maxOfTom}} = forecast
    return maxOfTom;
}
console.log(getMaxOfTom(local_forecast))
