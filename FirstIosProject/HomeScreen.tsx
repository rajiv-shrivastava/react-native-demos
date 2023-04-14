import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, Platform} from 'react-native';

function HomeScreen({navigation}: {navigation: any}) {
  return (
    <View style={styles.sectionContainer}>
      <Text>Home Screen</Text>
      <Text>Bg is grey on IOS wheras green on android</Text>
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

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    marginTop: 32,
    paddingHorizontal: 24,
    ...Platform.select({
      ios: {
        backgroundColor: '#b1b1b1',
      },
      android: {
        backgroundColor: 'green',
      },
    }),
  },
});
