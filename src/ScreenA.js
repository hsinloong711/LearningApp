import React from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// To use the navigation feature, we have to include navigation prop as an input argument. Then we can use navigate function
// to the name of desired screen. This whole function is a component
function ScreenA({navigation}) {
  const onPressHandler = () => {
    navigation.navigate('Screen_B');
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Screen A</Text>
      <Pressable
        onPress={onPressHandler}
        // style function, must be pressed nothign else
        style={({pressed}) => ({backgroundColor: pressed ? '#ddd' : '#0f0'})}>
        <Text style={styles.text}>Go to Screen B</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    margin: 10,
  },
});

export default ScreenA;
