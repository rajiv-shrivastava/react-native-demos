/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';
import FirstScreen from './InputPage';
import Header from './Header';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Screen2(){
  const isDarkMode = useColorScheme() === 'dark';
  
  return (
       <>
        <Header />
          <View style={styles.screen2Counter}>
            <Text style={styles.sectionText}>
              Text with multiple style class
            </Text>
        </View>
        </>
  );
}

const styles = StyleSheet.create({
  sectionText: {
    fontSize: 24,
    fontWeight: '600',
    alignItems: 'center',
  },
  screen2Counter: {
    alignItems: 'center',
    padding: 10,
  },
});

export default Screen2;
