import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';


const letters = /^[A-Za-z\s]*$/;

function InputPage() {
  const [text, onChangeText] = useState('');
  const [count, setCount] = useState(0);

  const handlePress = () => {
    let sum = 0;

  
    for(let i=0;i < text.length ;i++){
        sum = (sum + (text.charCodeAt(i)) - 96);
    }
 
    setCount(sum);
  }

  const handleChange = val => {
    if (val.match(letters)) {
      onChangeText(val.toLowerCase());
    }
  };

  return (
    <View style={styles.textInpContainer}>
      <Text>Text is :- {text}</Text>
      <TextInput
        style={styles.input}
        onChangeText={val => handleChange(val)}
        value={text}
      />
      <View style={styles.countContainer}>
            <Text>Touching opacity {count} times</Text>
    </View>      
      <TouchableOpacity style={styles.button} onPress={handlePress}>
            <Text>Press Here</Text>
          </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '80%',
  },
  textInpContainer: {
    alignItems: 'center',
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
});

export default InputPage;
