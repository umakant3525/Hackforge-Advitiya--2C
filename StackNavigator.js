import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import PhoneSignIn from './screens/PhoneSignIn';
import OTPScreen from './screens/OTPScreen'; 
import DashboardScreen from './screens/DashboardScreen';
import AdvisoryScreen from './screens/AdvisoryScreen';
import SettingsScreen from './screens/SettingsScreen';
import CurrentWeather from './screens/CurrentWeather';
import FutureWeather from './screens/FutureWeather';
import PastWeather from './screens/PastWeather';
import Profile from './screens/Profile';
import CityWeather from './screens/CityWeather';
import CropPredictor from './screens/CropPredictor';

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
        <Stack.Screen name="PhoneSignIn" component={PhoneSignIn} options={{headerShown:false}}  />
        <Stack.Screen name="OTPScreen" component={OTPScreen} options={{headerShown:false}}  /> 
        <Stack.Screen name="Dashboard" component={DashboardScreen} options={{headerShown:false}} />
        <Stack.Screen name="CurrentWeather" component={CurrentWeather}  /> 
        <Stack.Screen name="CityWeather" component={CityWeather}  /> 
        <Stack.Screen name="FutureWeather" component={FutureWeather} />
        <Stack.Screen name="PastWeather" component={PastWeather} />
        <Stack.Screen name="Advisory" component={AdvisoryScreen} />
        <Stack.Screen name="CroptPredictor" component={CropPredictor} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;


