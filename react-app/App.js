import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// screen
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import AboutScreen from './screens/AboutScreen';
import Login from './screens/Login';
import Registration from './screens/Registration';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Detail" component={DetailScreen} />
        <Tab.Screen name="About" component={AboutScreen} />
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="Register" component={Registration} />

      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
