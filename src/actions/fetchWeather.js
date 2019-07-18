export function fetchWeather() {
   return dispatch => {
      dispatch({ type: "LOADING_WEATHER" })
      const url = "http://localhost:3000/weather"
      debugger
      return fetch(url)
         .then(resp => {
            console.log(resp)
            return resp.json()
         })
         .catch(error => console.log(error))
         .then(weather => {
            return dispatch({ type: "FETCH_WEATHER", weather})
         })
   }
}
