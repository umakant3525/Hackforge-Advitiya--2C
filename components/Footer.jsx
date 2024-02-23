import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Footer = () => {
  return (
    <View style={styles.footerContainer}>
      <View style={styles.footer}>
        <Text style={styles.textWhite}>All Rights Reserved @ agroforecast</Text>
      </View>
    </View>
  );
}

export default Footer;

const styles = StyleSheet.create({
  footerContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  footer: {
    paddingVertical: 10,
    backgroundColor: '#1C853C',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textWhite: {
    color: 'white',
    fontFamily: 'serif',
    fontSize: 16,
  },
});
