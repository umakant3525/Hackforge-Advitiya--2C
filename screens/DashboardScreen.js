import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, Pressable, Alert, SafeAreaView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import * as Location from "expo-location";
import { useNavigation } from "@react-navigation/native";
import Carousel from "../components/Carousel";

const DashboardScreen = () => {
  const navigation = useNavigation();
  const [displayCurrentAddress, setDisplayCurrentAddress] = useState("We are loading your location...");
  const [locationServicesEnabled, setLocationServicesEnabled] = useState(false);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    checkIfLocationEnabled();
    getCurrentLocation();
  }, []);

  const checkIfLocationEnabled = async () => {
    let enabled = await Location.hasServicesEnabledAsync();
    if (!enabled) {
      Alert.alert(
        "Location services not enabled",
        "Please enable the location services",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ],
        { cancelable: false }
      );
    } else {
      setLocationServicesEnabled(enabled);
    }
  };

  const getCurrentLocation = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;
      setLatitude(latitude);
      setLongitude(longitude);

      // Use reverse geocoding to get address details
      let addressResponse = await Location.reverseGeocodeAsync({ latitude, longitude });
      if (addressResponse && addressResponse.length > 0) {
        const city = addressResponse[0].city;
        const country = addressResponse[0].country;
        setDisplayCurrentAddress(`${city}, ${country}`);
      }
    } catch (error) {
      console.error("Error fetching location: ", error);
      Alert.alert("Error fetching location", error.message);
    }
  };

  const handleWeatherCategoryPress = (screenName) => {
    navigation.navigate(screenName, { latitude, longitude });
  };

  const buttonsData = [
    {
      id: "0",
      name: "Current Weather",
      screenName: "CurrentWeather",
      iconName: "wb-sunny",
    },
    {
      id: "1",
      name: "City Weather",
      screenName: "CityWeather",
      iconName: "location-city",
    },
    {
      id: "2",
      name: "Future Weather",
      screenName: "FutureWeather",
      iconName: "cloud",
    },
    {
      id: "3",
      name: "Past Weather",
      screenName: "PastWeather",
      iconName: "history",
    },

    {
      id: "4",
      name: "Advisory",
      screenName: "Advisory",
      iconName: "notifications",
    },
    {
      id: "5",
      name: "Crop Predictor",
      screenName: "CropPredictor",
      iconName: "agriculture",
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Location and Profile */}
      <View style={{ flexDirection: "row", alignItems: "center", padding: 20 }}>
        <MaterialIcons name="location-on" size={30} color="#fd5c63" />
        <View>
          <Text style={{ fontSize: 18, fontWeight: "600" }}>Home</Text>
          <Text>{displayCurrentAddress}</Text>
          {/* <Text>Latitude: {latitude}</Text>
          <Text>Longitude: {longitude}</Text> */}
        </View>
        <Pressable
          onPress={() => navigation.navigate("Profile")}
          style={{ marginLeft: "auto", marginRight: 7 }}
        >
          <Image
            style={{ width: 50, height: 50, borderRadius: 20 }}
            source={require("../assets/1.jpg")}
          />
        </Pressable>
      </View>

      {/* Image Carousel */}
      <Carousel />

      {/* Weather Category Buttons */}
      <View style={styles.container}>
        {buttonsData.map(({ id, name, iconName, screenName }) => (
          <Pressable
            key={id}
            style={({ pressed }) => [
              styles.button,
              pressed && styles.selectedButton, // Apply selectedButton style when button is pressed
            ]}
            onPress={() => handleWeatherCategoryPress(screenName)}
          >
            <MaterialIcons name={iconName} size={24} color="black" style={styles.icon} />
            <Text style={styles.text}>{name}</Text>
          </Pressable>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap', // Allow buttons to wrap to the next line if necessary
    marginTop: 20,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '45%', // Adjust the width as needed to fit two buttons in a row
    aspectRatio: 1, // Maintain a square shape for each button
    marginVertical: 10, // Add vertical margin between buttons
    borderRadius: 10, // Rounded corners for button
    backgroundColor: '#ffffff', // Default background color for button
    elevation: 5, // Add elevation for a card-like effect
  },
  selectedButton: {
    backgroundColor: '#a0d8ef', // Change background color when button is pressed
  },
  icon: {
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
  },
});

export default DashboardScreen;
