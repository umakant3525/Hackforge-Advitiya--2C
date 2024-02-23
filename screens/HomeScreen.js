import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleLoginPress = () => {
    navigation.navigate('PhoneSignIn');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>HomeScreen</Text>
      <Button title="Go to Login" onPress={handleLoginPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default HomeScreen;
