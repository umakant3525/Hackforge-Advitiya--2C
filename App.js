import React from 'react';
import { SafeAreaView } from 'react-native';
import StackNavigator from './StackNavigator';

export default function App() {
  return (
      <SafeAreaView style={{ flex: 1 }}>
        <StackNavigator />
      </SafeAreaView>
  );
}
