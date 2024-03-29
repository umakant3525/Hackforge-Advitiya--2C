import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import DateTimePicker from "@react-native-community/datetimepicker";

// Importing images directly
import sun from './../assets/current_page_image1-removebg-preview.png';
import humidity from './../assets/humidity.png';
import wind from './../assets/windspeed.png';
import rain from './../assets/rainfall-removebg-preview.png';
import pressure from './../assets/pressure-removebg-preview.png';

const FutureWeather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  useEffect(() => {
    // For demonstration purposes, just setting up some hardcoded data
    const data = {
      current: {
        condition: {
          icon: sun,
          text: 'Sunny'
        },
        temp_c: 25,
        humidity: 70,
        wind_kph: 10,
        precip_mm: 0.5,
        pressure_mb: 1012
      },
      location: {
        name: 'Pune',
        region: 'Maharashtra'
      }
    };
    setWeatherData(data);
  }, []);

  const handleDateSelected = (event, selectedDate) => {
    const currentDate = selectedDate || new Date();
    setShowDatePicker(false);
    setSelectedDate(currentDate);
  };

  return (
    <View style={styles.container}>
      <View style={styles.datePickerContainer}>
        <MaterialIcons name="date-range" size={30} color="#fd5c63" onPress={() => setShowDatePicker(true)} />
        <Text style={styles.selectedDateText}>Selected Date: {selectedDate.toDateString()}</Text>
      </View>
      {showDatePicker && (
        <DateTimePicker
          value={selectedDate || new Date()}
          minimumDate={new Date()}
          mode="date"
          display="default"
          onChange={handleDateSelected}
        />
      )}
      {weatherData ? (
        <View style={styles.weatherContainer}>
          <View style={styles.imageContainer}>
            <Image source={weatherData.current.condition.icon} style={styles.sunImage} />
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
        </View>
      ) : (
        <Text>Loading...</Text>
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
  datePickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // Centering horizontally
    marginTop: 20,
    marginBottom: 10,
  },
  selectedDateText: {
    fontSize: 18,
    marginLeft: 10,
  },
  weatherContainer: {
    flex: 1,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  sunImage: {
    height: 170,
    width: 170,
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
});

export default FutureWeather;
