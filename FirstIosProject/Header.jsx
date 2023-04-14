import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function Header() {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headText}>Header</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headText: {
    height: 40,
    padding: 10,
    margin: 10,
  },
  headerContainer: {
    alignItems: 'center',
    backgroundColor: 'cyan',
  },
});

export default Header;
