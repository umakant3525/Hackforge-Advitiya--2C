import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Footer from '../components/Footer';
const image1 = require('../assets/logo.png');

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleGetStartedPress = () => {
    navigation.navigate('PhoneSignIn'); // Assuming 'PhoneSignIn' is the screen to navigate to
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={image1} style={styles.image} resizeMode="contain" />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleGetStartedPress}>
        <Text style={styles.buttonText}>GET STARTED</Text>
      </TouchableOpacity>
     
      <Footer/>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    marginTop: '20%',
  },
  image: {
    width: 250,
    height: 200,
  },
  button: {
    marginTop: 50,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'rgb(53, 192, 146)',
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  buttonText: {
    fontSize: 20,
    color: 'black',
    fontFamily: 'serif',
  },

});

export default HomeScreen;
