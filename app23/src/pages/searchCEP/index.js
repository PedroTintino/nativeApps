import React, { useState } from 'react';
import { Text, View, TextInput, Button, StyleSheet } from 'react-native';
import { styles } from './styles';

export default function SearchCEP() {
  const [cep, setCep] = useState('');
  const [dados, setDados] = useState(null);

  const buscarCep = async () => {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();

      if (response.ok) {
        setDados(data);
      } else {
        setDados(null);
        alert('CEP não encontrado. Verifique o CEP digitado.');
      }
    } catch (error) {
      console.error('Erro ao buscar CEP:', error);
      alert('Erro ao buscar CEP. Verifique sua conexão de internet.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Consultar CEP</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite o CEP..."
        value={cep}
        onChangeText={setCep}
        keyboardType="numeric"
      />

      <View style={styles.button}>
        <Button title="Buscar" onPress={buscarCep} />
      </View>

      {dados && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Cep: {dados.cep}</Text>
          <Text style={styles.resultText}>Logradouro: {dados.logradouro}</Text>
          <Text style={styles.resultText}>Bairro: {dados.bairro}</Text>
          <Text style={styles.resultText}>Cidade: {dados.localidade}</Text>
          <Text style={styles.resultText}>Estado: {dados.uf}</Text>
        </View>
      )}
    </View>
  );
}