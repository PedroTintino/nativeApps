import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import {styles} from './styles';

export default function Converter(props) {
  return (
    <View style={styles.wrapper}>
      
      <Text style={styles.header}>Currency Converter</Text>

      <TextInput
        style={styles.textInput}
        placeholder='Enter amount in R$'
        onChangeText={props.onChangeText}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.convertButton} onPress={props.onPress}>
        <Text style={styles.convertButtonText}>Convert</Text>
      </TouchableOpacity>

      <Text style={styles.conversionResult}> {props.resultado} </Text>
    
    </View>
  );
}