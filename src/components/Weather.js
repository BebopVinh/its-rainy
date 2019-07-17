import React, { Component } from 'react'

class Weather extends Component {
   render() {
      const currentWeather = this.props.weather.currently
      return (
         <div>
            <span>
               It is currently: 
               {currentWeather.summary}
            </span>
         </div>
      )
   }
}

export default Weather
