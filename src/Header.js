import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header = props => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>React Native Tutorial</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#000000',
    fontSize: 20,
    margin: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    width: 150,
    height: 50,
    alignItems: 'center',
  },
});

export default Header;
