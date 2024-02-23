import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, ActivityIndicator } from 'react-native';
import firebase from './firebase';
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';

const PhoneSignIn = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const recaptchaVerifier = React.useRef(null);

  const handleSignIn = async () => {
    try {
      setLoading(true);
      const phoneProvider = new firebase.auth.PhoneAuthProvider();
      const verificationId = await phoneProvider.verifyPhoneNumber(
        phoneNumber,
        recaptchaVerifier.current
      );
      setLoading(false);
      navigation.navigate('OTPScreen', { verificationId });
    } catch (error) {
      setLoading(false);
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={firebase.app().options}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Phone Number"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <Button
        title={loading ? "Sending OTP..." : "Send OTP"}
        onPress={handleSignIn}
        disabled={loading}
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

export default PhoneSignIn;
