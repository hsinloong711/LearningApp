import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ScreenA from './ScreenA';
import ScreenB from './ScreenB';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Screen_B"
        screenOptions={{headerShown: true, headerTitleAlign: 'center'}}>
        <Drawer.Screen
          name="Screen_A"
          component={ScreenA}
          options={{
            drawerIcon: ({focused}) => (
              <FontAwesome5 name="autoprefixer" size={focused ? 25 : 20} />
            ),
          }}
        />
        <Drawer.Screen
          name="Screen_B"
          component={ScreenB}
          options={{
            drawerIcon: ({focused}) => (
              <FontAwesome5 name="btc" size={focused ? 25 : 20} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
