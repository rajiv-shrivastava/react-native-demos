import React, {useState} from 'react';
import {
    View,Text,Button
  } from 'react-native';

function HomeScreen({navigation}: {navigation: any}) {

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Activity"
        onPress={() => navigation.navigate('Acitvity')}
      />
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
}

export default HomeScreen;
