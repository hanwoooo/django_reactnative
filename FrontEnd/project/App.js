import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Click Start!!
      </Text>
      <Text style={styles.buttontext}>
        Start
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({ //자동완성이 필요할 경우 무조건 쓰기!
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    //justifyContent: 'center',
  },
  text: {
    marginTop: 160,
    fontSize: 40,
  },
  startbutton: {
    marginTop: 240,
    justifyContent: 'center',
    backgroundColor: '#1E90FF',
    width: 200,
    height: 100,
    borderRadius: 20,
    borderTopRightRadius: 80,
  },
  buttontext: {
    color: "white",
    fontSize: 75,
    marginTop: 240,
    backgroundColor: '#1E90FF',
    alignSelf: 'center',
    justifyContent: 'center',
    width: 200,
    height: 100,
    borderRadius: 20,
    borderTopRightRadius: 80,
  }

});
