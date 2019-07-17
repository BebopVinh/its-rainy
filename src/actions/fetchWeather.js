export function fetchWeather() {
   return dispatch => {
      dispatch({ type: "LOADING_WEATHER" })
      const proxyurl = "https://cors-anywhere.herokuapp.com/"
      const url = "https://api.darksky.net/forecast/12b162f285f6f8d240443a58e0d1819e/33.7701, 118.1937"
      return fetch(proxyurl + url).then(resp => resp.json())
         .then(weather => {
            return dispatch({ type: "FETCH_WEATHER", weather})
         })
   }
}
