import React from 'react';
import {Text, View} from 'react-native';


const HelloWorldApp = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>This is from a components folder!</Text>
    </View>
  );
};
export default HelloWorldApp