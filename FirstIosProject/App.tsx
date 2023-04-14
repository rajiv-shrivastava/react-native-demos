/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {
  Colors
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from "./HomeScreen"


import Activity from './Activity';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

//when we will use stack navigator
const HomeStack = createNativeStackNavigator();
// when we use tab navigator
const Tab = createBottomTabNavigator();
//
const Drawer = createDrawerNavigator();


function DrawerScreen({navigation}: {navigation: any}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>I am Drawer Screen</Text>
      <Button
        title="Go to Activity"
        onPress={() => navigation.navigate('Acitvity')}
      />      
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
     <HomeStack.Screen name="Home" component={HomeScreen} />             
     <HomeStack.Screen name="Settings" component={SettingsScreen} />
    </HomeStack.Navigator>
   );
 }

 function HomeDrawerScreen() {
  return (
    <Drawer.Navigator>
     <Drawer.Screen name="Home" component={HomeScreen} />             
     <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
   );
 }


function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  
  return (
    <NavigationContainer>
    {/* when we will use stack navigator */}
    <Tab.Navigator initialRouteName="Home">
       <Tab.Screen name="HomePage" component={HomeStackScreen} />
       <Tab.Screen name="DrawerScreen" component={DrawerScreen} />
       <Tab.Screen name="Acitvity" component={Activity} />
          {/* when we will use tab navigator */}          
    </Tab.Navigator>
    
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    alignItems: 'center',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    backgroundColor: 'yellow',
  },
  highlight: {
    fontWeight: '700',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
});

export default App;
