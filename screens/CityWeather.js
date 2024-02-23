import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Assuming you're using Expo for icons

// Importing images directly
import sun from './../assets/current_page_image1-removebg-preview.png';
import humidity from './../assets/humidity.png';
import wind from './../assets/windspeed.png';
import rain from './../assets/rainfall-removebg-preview.png';
import pressure from './../assets/pressure-removebg-preview.png';

const CityWeather = () => {
  const [cityName, setCityName] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const handleSearch = () => {
    if (cityName.trim() === '') {
      alert('Please enter a city name');
      return;
    }

    const apiUrl = `http://api.weatherapi.com/v1/current.json?key=d69439111df14fcbabe43757242302&q=${cityName}&aqi=yes`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        setWeatherData(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View
        style={{
          padding: 10,
          margin: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderWidth: 0.8,
          borderColor: "#C0C0C0",
          borderRadius: 7,
        }}
      >
        <TextInput
          placeholder="Enter city name"
          value={cityName}
          onChangeText={text => setCityName(text)}
          style={{ flex: 1 }}
        />
        <TouchableOpacity onPress={handleSearch}>
          <MaterialIcons name="search" size={24} color="#fd5c63" />
        </TouchableOpacity>
      </View>
      
      {weatherData ? (
        <>
          <View style={styles.imageContainer}>
            <Image source={{ uri: `https:${weatherData.current.condition.icon}` }} style={styles.sunImage} />
          </View>
          <View style={styles.locationContainer}>
            <MaterialIcons name="location-on" size={30} color="#fd5c63" />
            <Text style={styles.textLocation}>{weatherData.location.name}, {weatherData.location.region}</Text>
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.text1}>{weatherData.current.temp_c}°C 🌞</Text>
            <Text style={styles.text3}>{weatherData.current.condition.text}</Text>
            <View style={styles.line5}>
              <View style={styles.infoBox}>
                <Image source={humidity} style={styles.icon} />
                <Text style={styles.infoText}>{weatherData.current.humidity}%{'\n'}Humidity</Text>
              </View>
              <View style={styles.infoBox}>
                <Image source={wind} style={styles.icon} />
                <Text style={styles.infoText}>{weatherData.current.wind_kph}km/hr{'\n'}Wind Speed</Text>
              </View>
            </View>
            <View style={styles.line5}>
              <View style={styles.infoBox}>
                <Image source={rain} style={styles.icon} />
                <Text style={styles.infoText}>{weatherData.current.precip_mm}%{'\n'}Rainfall</Text>
              </View>
              <View style={styles.infoBox}>
                <Image source={pressure} style={styles.icon} />
                <Text style={styles.infoText}>{weatherData.current.pressure_mb}mb{'\n'}Pressure_mb</Text>
              </View>
            </View>
          </View>
          {/* <View style={styles.footer}>
            <Text style={styles.textWhite}>All Rights Reserved @ agroforecast</Text>
          </View> */}
        </>
      ) : (
        <Text>Please enter a city name to search for weather information.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0F2E9', // Light green background color
    paddingHorizontal: 20, // Added horizontal padding for content alignment
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sunImage: {
    height: 170,
    width: 170,
  },
  contentContainer: {
    flex: 2,
    marginHorizontal: 20,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // Centering horizontally
    marginBottom: 10,
  },
  text1: {
    marginTop: 10,
    fontSize: 50,
    textAlign: 'center',
  },
  textLocation: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  text3: {
    fontSize: 30,
    textAlign: 'center',
  },
  line5: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  infoBox: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#D1F0DC', // Light green background color for info boxes
    padding: 10,
    borderRadius: 10,
    marginRight: 10,
  },
  icon: {
    height: 30,
    width: 30,
  },
  infoText: {
    textAlign: 'center',
    marginTop: 5,
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    width: '100%', // Set width to 100% to span the entire horizontal width
    backgroundColor: '#1C853C',
    position: 'absolute', // Position the footer at the bottom
    bottom: 0, // Stick the footer to the bottom of the screen
  },
  textWhite: {
    color: 'white',
    fontFamily: 'serif',
    fontSize: 16,
  },
});

export default CityWeather;
