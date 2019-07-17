export default function manageWeather (state = {}, action) {
   switch (action.type) {

      case "LOADING_WEATHER":
         console.log("Loading weather")

      case "FETCH_WEATHER":
         console.log(action)
         let x = {...state, weather: action.weather}
         console.log(x)
         return x

      default:
         return state
   }
}