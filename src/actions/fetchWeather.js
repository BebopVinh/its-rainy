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
            debugger
            return dispatch({ type: "FETCH_WEATHER", weather})
         })
   }
}


// const getClients = () => {
//    fetch(`/clients.json`)
//       .then(resp => resp.json())
//       .then(clients => {
//          $('#app-container').html('')
//          const sortedClients = clients.sort(function (a, b) {
//             return a.name.localeCompare(b.name);
//             // if(a.name < b.name) { return -1; }
//             // if(a.name > b.name) { return 1; }
//             // return 0
//          }); 