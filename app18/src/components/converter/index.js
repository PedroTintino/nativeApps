import { View, Text, TextInput, Pressable } from 'react-native';
import {styles} from './styles';

export default function Converter(props){
  return(
    <View style={styles.container}>
    
      <Text style={styles.title}> Conversor de Moedas </Text>

      <TextInput
        style={styles.input}
        placeholder='Informe um valor (R$): '
        onChangeText={props.onChangeText}
        keyboardType="numeric"
      />

      <Pressable style={styles.button} onPress={props.onPress}>
        <Text style={styles.buttonText}> Converter </Text>
      </Pressable>

      <Text style={styles.resultado}> {props.resultado} </Text>
    
    </View>
  );
}