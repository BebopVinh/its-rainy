export default function manageWeather (state = {}, action) {
   switch (action.type) {

      case "LOADING_WEATHER":
         console.log("Loading weather")

      case "FETCH_WEATHER":
         let x = {...state, weather: action.weather}
         debugger
         return x

      default:
         return state
   }
}