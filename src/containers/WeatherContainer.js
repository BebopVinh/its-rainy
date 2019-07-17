import React, { Component } from 'react'
import { connect } from 'react-redux';
import {fetchWeather} from '../actions/fetchWeather'
import Weather from '../components/Weather'

class WeatherContainer extends Component {

   componentDidMount() {
      this.props.fetchWeather()
   }

   renderWeather = () => {
      if (!!this.props.weather) {
         return <Weather weather={this.props.weather} />
      } else {return null}
   }

   render() {
      return (
         <div>
            {this.renderWeather()}
         </div>
      )
   }
}



const mapStateToProps = state => {
   return {weather: state.weather}
}

export default connect(mapStateToProps, {fetchWeather})(WeatherContainer)
