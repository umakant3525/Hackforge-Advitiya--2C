import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import firebase from './firebase';

const OTPScreen = ({ route, navigation }) => {
  const [code, setCode] = useState('');

  const handleConfirmCode = async () => {
    try {
      if (code.length !== 6) {
        Alert.alert('❌ Error', 'Please enter a 6-digit OTP.', [{ text: 'OK' }]);
        return;
      }
      const credential = firebase.auth.PhoneAuthProvider.credential(
        route.params.verificationId,
        code
      );
      await firebase.auth().signInWithCredential(credential);
      Alert.alert('✅ Success', 'You have been successfully signed in!', [{ text: 'OK' }]);
      // Optionally navigate to DashboardScreen after successful login
      navigation.navigate('Dashboard');
    } catch (error) {
      Alert.alert('❌ Error', error.message, [{ text: 'OK' }]);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter OTP"
        keyboardType="numeric"
        maxLength={6}
        value={code}
        onChangeText={setCode}
      />
      <Button
        title="Confirm OTP"
        onPress={handleConfirmCode}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    width: '80%',
  },
});

export default OTPScreen;
