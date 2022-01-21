import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import logo from './assets/logo.png';
export default function App() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={{ width: 300, height: 700 }} />
    
      <Text style={{color: 'black', fontSize: 30}}> 
       <b> Hello,  React native </b>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
