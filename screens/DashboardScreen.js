import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const DashboardScreen = ({ navigation }) => {
  const navigateToWeatherScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Dashboard Screen</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigateToWeatherScreen('CurrentWeather')}
      >
        <Text style={styles.buttonText}>Current Weather</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigateToWeatherScreen('PastWeather')}
      >
        <Text style={styles.buttonText}>Past Weather</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigateToWeatherScreen('FutureWeather')}
      >
        <Text style={styles.buttonText}>Future Weather</Text>
      </TouchableOpacity>
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'skyblue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default DashboardScreen;
