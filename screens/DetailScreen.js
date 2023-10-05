import React from 'react';
import { View, Text, Button } from 'react-native';

const DetailScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Details Screen</Text>
      {/* <Button
        title="Go back to Home"
        onPress={() => navigation.goBack()}
      /> */}
    </View>
  );
};

export default DetailScreen;
